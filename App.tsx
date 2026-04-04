import React, { useState, useEffect, useRef } from 'react';
import { portfolioData } from './data/portfolio';
import { PortfolioData, ImageAsset } from './types';
import { 
  MapPin, 
  Mail, 
  Linkedin, 
  Github, 
  Phone, 
  ExternalLink, 
  X,
  Menu,
  Globe,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const data: PortfolioData = portfolioData;

const SECTIONS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Work Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'recommendations', label: 'Recommendations' },
  { id: 'openSource', label: 'Open Source' },
  { id: 'education', label: 'Education' },
];

const ProjectSlider: React.FC<{ images: ImageAsset[], onImageClick: (img: ImageAsset) => void }> = ({ images, onImageClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative group mt-6 no-print">
      <div 
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar scroll-smooth pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {images.map((img, idx) => (
          <div 
            key={idx}
            className="flex-shrink-0 w-full md:w-[calc(50%-8px)] snap-start cursor-zoom-in relative overflow-hidden rounded-sm bg-ink-50/50 border border-ink-100"
            onClick={() => onImageClick(img)}
          >
            {img.type === 'video' ? (
              <video 
                src={img.src} 
                className="w-full h-64 md:h-96 object-contain transition-transform duration-500 hover:scale-[1.02]"
                muted
                loop
                playsInline
                onMouseOver={(e) => e.currentTarget.play()}
                onMouseOut={(e) => e.currentTarget.pause()}
              />
            ) : (
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-64 md:h-96 object-contain transition-transform duration-500 hover:scale-[1.02]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            )}
            <div className="absolute inset-0 bg-ink-900/0 hover:bg-ink-900/5 transition-colors duration-300" />
            {img.type === 'video' && (
              <div className="absolute top-2 right-2 bg-ink-900/60 text-white text-[10px] px-1.5 py-0.5 rounded uppercase tracking-wider font-bold">
                Video
              </div>
            )}
          </div>
        ))}
      </div>
      
      {images.length > 2 && (
        <>
          <button 
            onClick={() => scroll('left')}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ink-900 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hidden md:flex z-10"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-ink-900 p-2 rounded-full shadow-lg transition-all opacity-0 group-hover:opacity-100 hidden md:flex z-10"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}
      
      {/* Mobile hint */}
      <div className="flex md:hidden justify-center mt-2 gap-1">
        {images.map((_, idx) => (
          <div key={idx} className="w-1.5 h-1.5 rounded-full bg-ink-200" />
        ))}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<ImageAsset | null>(null);
  const [activeSection, setActiveSection] = useState<string>('about');
  
  // Instagram Embed Logic
  useEffect(() => {
    const scriptId = 'instagram-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://www.instagram.com/embed.js';
      script.async = true;
      document.body.appendChild(script);
    } else if ((window as any).instgrm) {
      (window as any).instgrm.Embeds.process();
    }
  }, [data.projects]);

  // Refs for scroll spy
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const openLightbox = (image: ImageAsset) => {
    setCurrentImage(image);
    setLightboxOpen(true);
    document.body.classList.add('no-scroll');
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImage(null);
    document.body.classList.remove('no-scroll');
  };

  // Close lightbox on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  // Scroll Spy Logic
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section is near top of viewport
      threshold: 0
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    SECTIONS.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Offset for sticky header on mobile
      const yOffset = window.innerWidth < 768 ? -80 : -40; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-paper font-sans text-ink-800 selection:bg-accent-blue/20 selection:text-ink-900">
      
      {/* Lightbox Overlay */}
      {lightboxOpen && currentImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/95 backdrop-blur-sm p-4 animate-in fade-in duration-200 no-print"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox} 
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
          >
            <X size={32} />
          </button>
          <div className="max-w-5xl w-full flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            {currentImage.type === 'video' ? (
              <video 
                src={currentImage.src} 
                controls
                autoPlay
                className="max-h-[80vh] w-auto rounded-sm shadow-2xl"
              />
            ) : (
              <img 
                src={currentImage.src} 
                alt={currentImage.alt} 
                className="max-h-[80vh] w-auto rounded-sm shadow-2xl"
                referrerPolicy="no-referrer"
              />
            )}
            {currentImage.caption && (
              <p className="mt-4 text-white/80 text-center font-light tracking-wide max-w-2xl">
                {currentImage.caption}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Mobile Navigation (Sticky Top) */}
      <nav className="md:hidden sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-ink-200 no-print">
        <ul className="flex overflow-x-auto hide-scrollbar py-4 px-6 gap-6">
          {SECTIONS.map((section) => (
            <li key={section.id} className="shrink-0">
              <button
                onClick={() => scrollToSection(section.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  activeSection === section.id 
                    ? 'text-ink-900 border-b-2 border-ink-900 pb-1' 
                    : 'text-ink-400 hover:text-ink-600'
                }`}
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Layout Container */}
      <div className="max-w-screen-xl mx-auto md:flex md:gap-12 lg:gap-24 px-6 md:px-12 pt-8 md:pt-24 pb-24">
        
        {/* Desktop Sidebar / Table of Contents */}
        <aside className="hidden md:block w-[240px] shrink-0 no-print">
          <div className="sticky top-24 border-r border-ink-200/50 pr-6 h-[calc(100vh-6rem)] overflow-y-auto hide-scrollbar">
            <h5 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-6 pl-3">
              Contents
            </h5>
            <ul className="space-y-1">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => scrollToSection(section.id)}
                    className={`group flex items-center w-full text-left py-1.5 px-3 text-sm transition-all duration-200 rounded-sm ${
                      activeSection === section.id
                        ? 'text-ink-900 font-semibold border-l-2 border-ink-900 bg-ink-200/30'
                        : 'text-ink-500 hover:text-ink-800 hover:bg-ink-200/20 border-l-2 border-transparent'
                    }`}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Quick Contact Info in Sidebar */}
            <div className="mt-12 pt-12 border-t border-ink-200/50 pl-3">
              <div className="flex flex-col gap-3 text-xs text-ink-500">
                {data.hero.email && (
                  <a href={`mailto:${data.hero.email}`} className="hover:text-accent-blue transition-colors break-words">
                    {data.hero.email}
                  </a>
                )}
                {data.hero.linkedin && (
                  <a href={`https://${data.hero.linkedin}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                    LinkedIn Profile
                  </a>
                )}
                {data.hero.github && (
                  <a href={`https://${data.hero.github}`} target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors">
                    GitHub Profile
                  </a>
                )}
              </div>
            </div>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 min-w-0 max-w-3xl">
          
          {/* Header / Hero (About) */}
          <section id="about" className="mb-20 scroll-mt-24">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-ink-900 mb-4">
              {data.hero.name}
            </h1>
            <h2 className="text-xl md:text-2xl text-ink-600 font-medium mb-8">
              {data.hero.title}
            </h2>
            
            <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-ink-600 mb-10 font-medium no-print">
              <div className="flex items-center gap-2 hover:text-ink-900 transition-colors">
                <MapPin size={16} />
                <span>{data.hero.location}</span>
              </div>
              {data.hero.email && (
                <a href={`mailto:${data.hero.email}`} className="flex items-center gap-2 hover:text-accent-blue transition-colors">
                  <Mail size={16} />
                  <span>{data.hero.email}</span>
                </a>
              )}
              {data.hero.phone && (
                <div className="flex items-center gap-2 hover:text-ink-900 transition-colors">
                  <Phone size={16} />
                  <span>{data.hero.phone}</span>
                </div>
              )}
              {data.hero.linkedin && (
                <a href={`https://${data.hero.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-blue transition-colors">
                  <Linkedin size={16} />
                  <span>LinkedIn</span>
                </a>
              )}
              {data.hero.github && (
                <a href={`https://${data.hero.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-blue transition-colors">
                  <Github size={16} />
                  <span>GitHub</span>
                </a>
              )}
              {data.hero.website && (
                <a href={data.hero.website} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent-blue transition-colors">
                  <Globe size={16} />
                  <span>Website</span>
                </a>
              )}
            </div>

            {/* Print only contact info block */}
            <div className="hidden print:block mb-8 text-sm text-ink-600">
               <p>{data.hero.email} | {data.hero.phone}</p>
               <p>{data.hero.location}</p>
               <p>{data.hero.linkedin}</p>
            </div>

            <p className="text-lg leading-relaxed text-ink-800">
              {data.hero.summary}
            </p>
          </section>

          <hr className="border-ink-200 mb-16" />

          {/* Skills */}
          <section id="skills" className="mb-20 scroll-mt-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-8">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.skills.map((skillGroup, idx) => (
                <div key={idx}>
                  <h4 className="font-semibold text-ink-900 mb-3">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, sIdx) => (
                      <span key={sIdx} className="text-sm text-ink-600 bg-ink-200/50 px-2 py-1 rounded-md">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="mb-20 scroll-mt-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-10">Professional Experience</h3>
            <div className="space-y-16">
              {data.experience.map((job, idx) => (
                <div key={idx} className="group break-inside-avoid">
                  <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-ink-900">{job.role}</h4>
                    <span className="text-sm font-medium text-ink-400 mt-1 md:mt-0">{job.duration}</span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4 text-ink-600">
                    <span className="font-medium text-ink-800">{job.company}</span>
                    <span className="hidden md:inline text-ink-200">•</span>
                    <span className="text-sm">{job.location}</span>
                  </div>
                  
                  {job.company_description && (
                    <p className="text-sm text-ink-500 italic mb-4 border-l-2 border-ink-200 pl-4 py-1">
                      {job.company_description}
                    </p>
                  )}

                  <ul className="list-disc list-outside ml-4 space-y-3 text-ink-800 leading-relaxed marker:text-ink-400">
                    {job.bullet_points.map((point, pIdx) => (
                      <li key={pIdx} dangerouslySetInnerHTML={{ 
                        __html: point.replace(/\*\*(.*?)\*\*/g, '<span class="font-bold text-ink-900">$1</span>') 
                      }} />
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-ink-200 mb-16" />

          {/* Projects */}
          <section id="projects" className="mb-20 scroll-mt-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-10">Featured Projects</h3>
            <div className="space-y-20">
              {data.projects.map((project, idx) => (
                <article key={idx} className="break-inside-avoid">
                  <div className="flex items-baseline gap-4 mb-2">
                    <h4 className="text-xl font-bold text-ink-900">{project.name}</h4>
                    <div className="flex gap-3 text-sm no-print">
                      {project.github && (
                        <a href={project.github} className="text-accent-blue hover:underline flex items-center gap-1">
                          Repo <ExternalLink size={12} />
                        </a>
                      )}
                      {project.live_link && (
                        <a href={project.live_link} className="text-accent-blue hover:underline flex items-center gap-1">
                          Live <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>

                  {project.area && (
                    <div className="mb-4">
                      <span className="text-xs uppercase tracking-widest font-bold text-accent-blue bg-accent-blue/5 px-2 py-1 rounded">
                        {project.area}
                      </span>
                    </div>
                  )}

                  <p className="text-ink-800 leading-relaxed mb-4">{project.summary}</p>
                  
                  {project.impact && (
                     <p className="text-ink-800 leading-relaxed mb-6 font-medium">
                      Impact: <span className="font-normal text-ink-600">{project.impact}</span>
                     </p>
                  )}

                  {/* Project Video Embed */}
                  {project.videoUrl && (
                    <div className="mt-6 rounded-lg overflow-hidden border border-ink-200 bg-black aspect-video no-print">
                      <iframe
                        src={project.videoUrl}
                        title={`${project.name} Video`}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  )}

                  {/* Project Instagram Embed */}
                  {project.instagramEmbed && (
                    <div 
                      className="mt-6 flex justify-center no-print overflow-hidden rounded-lg border border-ink-200"
                      dangerouslySetInnerHTML={{ __html: project.instagramEmbed }}
                    />
                  )}

                  {/* Project Images Slider */}
                  {project.images && project.images.length > 0 && (
                    <ProjectSlider images={project.images} onImageClick={openLightbox} />
                  )}
                  
                  {project.images && project.images.length > 0 && (
                      <div className="mt-2 text-xs text-ink-400 text-center italic no-print">
                          Click images to enlarge • Swipe to see more
                      </div>
                  )}
                </article>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section id="awards" className="mb-20 scroll-mt-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-8">Honors & Awards</h3>
            <div className="grid grid-cols-1 gap-6">
              {data.awards.map((award, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row sm:items-baseline gap-2">
                  <div className="min-w-[200px]">
                    <span className="font-bold text-ink-900 block">{award.title}</span>
                    {award.company && (
                      <span className="text-base text-ink-400 block mt-0.5">
                        {award.company}
                      </span>
                    )}
                  </div>
                  <span className="text-ink-600 text-sm leading-relaxed">{award.description}</span>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-ink-200 mb-16" />

          {/* Recommendations */}
          <section id="recommendations" className="mb-20 scroll-mt-24">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400">Recommendations</h3>
              <a 
                href="https://www.linkedin.com/in/rahul-saini-profile/details/recommendations/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-xs font-medium text-accent-blue hover:underline flex items-center gap-1.5 no-print"
              >
                View on LinkedIn <ExternalLink size={12} />
              </a>
            </div>
            <div className="space-y-16">
              {data.recommendations.map((rec, idx) => (
                <div key={idx} className="bg-white p-8 rounded-lg border border-ink-200 shadow-sm break-inside-avoid">
                  <blockquote className="text-lg text-ink-800 leading-relaxed italic mb-6">
                    "{rec.text}"
                  </blockquote>
                  <div className="flex items-center gap-3 mb-6">
                    <div>
                      <div className="font-bold text-ink-900">{rec.name}</div>
                      <div className="text-sm text-ink-500">{rec.designation}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Open Source */}
          {data.openSource && data.openSource.length > 0 && (
            <section id="openSource" className="mb-20 scroll-mt-24">
              <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-10">Open Source Contributions</h3>
              <div className="grid grid-cols-1 gap-8">
                {data.openSource.map((contribution, idx) => (
                  <div key={idx} className="group p-6 rounded-lg border border-ink-200 hover:border-accent-blue/30 hover:bg-accent-blue/5 transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg font-bold text-ink-900">{contribution.title}</h4>
                      <a 
                        href={contribution.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-ink-400 hover:text-accent-blue transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                    <p className="text-ink-700 leading-relaxed text-sm mb-4">
                      {contribution.description}
                    </p>
                    {contribution.video && (
                      <div className="mt-4 rounded-lg overflow-hidden border border-ink-200 bg-black/5">
                        <video 
                          src={contribution.video} 
                          controls 
                          className="w-full max-h-[400px] object-contain"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          <section id="education" className="mb-24 scroll-mt-24">
            <h3 className="text-xs font-bold uppercase tracking-widest text-ink-400 mb-8">Education</h3>
            {data.education.map((edu, idx) => (
              <div key={idx} className="break-inside-avoid">
                <h4 className="text-lg font-bold text-ink-900">{edu.degree}</h4>
                <p className="text-ink-600">{edu.institution}</p>
                <p className="text-sm text-ink-400 mb-2">{edu.location}</p>
                {edu.core_areas && (
                  <p className="text-sm text-ink-500 italic">
                    <span className="font-semibold not-italic">Core Areas:</span> {edu.core_areas}
                  </p>
                )}
              </div>
            ))}
          </section>

        

        </main>
      </div>
    </div>
  );
};

export default App;