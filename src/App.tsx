import React, { useState } from 'react';
import { Github, Linkedin, Mail, Server, Shield, Keyboard, KeyboardOff , Network, Globe2, Download, X } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { translations } from './translations';
import f1 from '/assets/f1.png';
import gaming from '/assets/gaming.png';
import manga from '/assets/manga.png';
import cybersecurity from '/assets/cybersecurity.png';
import CV from '/assets/CV_3.0_Adrien_Eude.pdf';
import photoprofil from '/assets/photo_profil.jpg';

function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = translations[lang];
  
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);

  const softSkills = [
    {
      title: lang === 'fr' ? 'Autonome' : 'Autonomous',
      description: lang === 'fr' 
        ? 'Habitué à travailler de manière indépendante, je suis capable de gérer mes projets en toute autonomie, comme en témoignent mes missions freelance réalisées en parallèle de mes études.'
        : 'Accustomed to working independently, I am able to manage my projects independently, as evidenced by the freelance assignments I have carried out in parallel with my studies.',
    },
    {
      title: lang === 'fr' ? 'Travail d\'équipe' : 'Teamwork',
      description: lang === 'fr' 
        ? 'Excellente capacité à collaborer et à contribuer à des projets d\'équipe.'
        : 'Excellent ability to collaborate and contribute to team projects.',
    },
    {
      title: lang === 'fr' ? 'Curieux' : 'Curious',
      description: lang === 'fr'
        ? 'Passionné par les nouvelles technologies, je mène une veille constante et explore régulièrement de nouveaux outils pour enrichir mes compétences'
        : 'Passionate about new technologies, I am constantly on the lookout and regularly explore new tools to enhance my skills.',
    },
    {
      title: lang === 'fr' ? 'Polyvalent' : 'Versatile',
      description: lang === 'fr'
        ? 'Mon parcours professionnel m’a permis d\'intervenir sur des projets variés allant du support IT à l\'automatisation, en passant par l\'administration système et le développement.'
        : 'My career path has enabled me to work on a wide range of projects, from IT support and automation to system administration and development.',
    },
    {
      title: lang === 'fr' ? 'Rigoureux' : 'Rigorous',
      description: lang === 'fr'
        ? 'Je m\'attache à produire un travail de qualité, structuré et documenté, notamment dans la mise en place d\'infrastructures réseau ou le pilotage de projets techniques.'
        : 'I am committed to producing high-quality, structured and documented work, particularly when it comes to setting up network infrastructures or managing technical projects.',
    },
    {
      title: lang === 'fr' ? 'Adaptabilité' : 'Adaptability',
      description: lang === 'fr'
        ? 'Capacité à s\'adapter rapidement aux nouvelles technologies et situations.'
        : 'Ability to quickly adapt to new technologies and situations.',
    },
  ];

  const skills = {
    system: {
      title: lang === 'fr' ? 'Administration Système' : 'System Administration',
      icon: Server,
      details: lang === 'fr' ? [
        'Administration Linux/Windows Server',
        'Hyperviseur (Proxmox, ESXi, Hyper V)',
        'Virtualisation (VMware, VirtualBox)',
        'Scripting (Bash, PowerShell)',
        'Monitoring et supervision',
      ] : [
        'Linux/Windows Server Administration',
        'Hypervisor (Proxmox, ESXi, Hyper V)',
        'Virtualization (VMware, Docker)',
        'Scripting (Bash, PowerShell)',
        'Monitoring and supervision (Centreon, PRTG)',
      ],
    },
    network: {
      title: lang === 'fr' ? 'Réseaux' : 'Networks',
      icon: Network,
      details: lang === 'fr' ? [
        'Configuration routeurs/switchs (Cisco)',
        'Protocoles réseau TCP/IP',
        'VLANs et Routage',
      ] : [
        'Router/switch configuration',
        'TCP/IP network protocols',
        'VLANs and routing',
      ],
    },
    security: {
      title: lang === 'fr' ? 'Cybersécurité' : 'Cybersecurity',
      icon: Shield,
      details: lang === 'fr' ? [
        'Pentesting (Kali Linux)',
        'Analyse de vulnérabilités (CVE)',
        'Sécurité réseau',
        'Forensic',
      ] : [
        'Pentesting (Kali Linux)',
        'Vulnerability analysis',
        'Network security',
        'Forensic',
      ],
    },
    developement: {
      title: lang === 'fr' ? 'Développement' : 'Development',
      icon: Keyboard,
      details: lang === 'fr' ? [
        'Développement logiciel (C#, Kotline)',
        'Développement Web (HTML, CSS, JAVASCRIPT)  ',
        'Développement d\'API (Python)',
      ] : [
        'Software development (C#, Kotline)',
        'Web development (HTML, CSS, JAVASCRIPT)',
        'API development (Python)',
      ],
    },
    nocode: {
      title: lang === 'fr' ? 'No-code' : 'No-code',
      icon: KeyboardOff ,
      details: lang === 'fr' ? [
        'Automatisation de tâche/process (Make.com)',
        'Intégration d\'outil d\'Intelligence Artificiel (ChatGPT, PerplexityIA, Claude IA, etc)',
      ] : [
        'Task/process automation (Make.com)',
        'Integration of Artificial Intelligence tools (ChatGPT, PerplexityIA, Claude IA, etc.)',
      ],
    },
  };

  const certifications = [
    {
      id: 'cissp',
      title: 'CISSP',
      organization: 'ISC²',
      date: '2023',
      image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?fit=crop&w=300&h=200',
      description: lang === 'fr'
        ? 'Certified Information Systems Security Professional - Certification de référence en sécurité des systèmes d\'information.'
        : 'Certified Information Systems Security Professional - Leading certification in information systems security.',
      details: lang === 'fr' ? {
        domains: [
          'Sécurité et gestion des risques',
          'Sécurité des actifs',
          'Architecture et ingénierie de sécurité',
          'Communication et sécurité réseau',
          'Gestion des identités et des accès',
        ],
        validité: 'Certification valide jusqu\'en 2026',
        score: '750/1000',
      } : {
        domains: [
          'Security and Risk Management',
          'Asset Security',
          'Security Architecture and Engineering',
          'Communication and Network Security',
          'Identity and Access Management',
        ],
        validity: 'Certification valid until 2026',
        score: '750/1000',
      },
    },
    {
      id: 'ccna',
      title: 'CCNA',
      organization: 'Cisco',
      date: '2022',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?fit=crop&w=300&h=200',
      description: lang === 'fr'
        ? 'Cisco Certified Network Associate - Certification en administration réseau.'
        : 'Cisco Certified Network Associate - Network administration certification.',
      details: lang === 'fr' ? {
        domains: [
          'Configuration des équipements réseau',
          'Protocoles de routage',
          'Commutation et réseaux locaux',
          'Services d\'infrastructure',
        ],
        validité: 'Certification valide jusqu\'en 2025',
        score: '925/1000',
      } : {
        domains: [
          'Network equipment configuration',
          'Routing protocols',
          'Switching and local networks',
          'Infrastructure services',
        ],
        validity: 'Certification valid until 2025',
        score: '925/1000',
      },
    },
  ];

  const projects = [
    {
      title: lang === 'fr' ? 'Système de Détection d\'Intrusion' : 'Intrusion Detection System',
      description: lang === 'fr' 
        ? 'Développement d\'un IDS personnalisé utilisant l\'apprentissage automatique'
        : 'Development of a custom IDS using machine learning',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?fit=crop&w=800&h=400',
      tags: ['Python', 'Machine Learning'],
    },
    {
      title: lang === 'fr' ? 'Infrastructure Cloud Sécurisée' : 'Secure Cloud Infrastructure',
      description: lang === 'fr'
        ? 'Mise en place d\'une infrastructure cloud avec haute disponibilité'
        : 'Implementation of a highly available cloud infrastructure',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?fit=crop&w=800&h=400',
      tags: ['AWS', 'Terraform'],
    },
    {
      title: lang === 'fr' ? 'Audit de Sécurité' : 'Security Audit',
      description: lang === 'fr'
        ? 'Réalisation d\'un audit complet de sécurité pour une PME'
        : 'Comprehensive security audit for an SME',
      image: 'https://images.unsplash.com/photo-1551808525-51a94da548ce?fit=crop&w=800&h=400',
      tags: ['Pentest', 'Audit'],
    },
    {
      title: lang === 'fr' ? 'Automatisation DevSecOps' : 'DevSecOps Automation',
      description: lang === 'fr'
        ? 'Mise en place d\'un pipeline CI/CD sécurisé'
        : 'Implementation of a secure CI/CD pipeline',
      image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?fit=crop&w=800&h=400',
      tags: ['Jenkins', 'GitLab', 'Docker'],
    },
    {
      title: lang === 'fr' ? 'Analyse de Malware' : 'Malware Analysis',
      description: lang === 'fr'
        ? 'Création d\'un environnement d\'analyse de logiciels malveillants'
        : 'Creation of a malware analysis environment',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=800&h=400',
      tags: ['Reverse Engineering', 'Python'],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Language Switcher */}
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
        >
          <Globe2 className="w-5 h-5" />
          <span className="font-medium">{lang.toUpperCase()}</span>
        </button>
      </div>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col items-center text-center">
            <img
              src={photoprofil}
              alt="Photo de profil"
              className="w-32 h-32 rounded-full border-4 border-white shadow-lg mb-6"
            />
            <h1 className="text-4xl font-bold mb-4">Adrien Eude</h1>
            <p className="text-xl mb-6">{t.title}</p>
            <div className="flex gap-4 mb-8">
              <a href="https://github.com/eudeadrien" className="hover:text-blue-200 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://www.linkedin.com/in/adrien-eude-916103221/" className="hover:text-blue-200 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:eude.adrien27@gmail.com" className="hover:text-blue-200 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
            <a
              href={CV}
              download
              className="flex items-center gap-2 bg-white text-blue-900 px-6 py-3 rounded-full font-medium hover:bg-blue-50 transition-colors"
            >
              <Download className="w-5 h-5" />
              {t.downloadCV}
            </a>
          </div>
        </div>
      </header>

      {/* À Propos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">{t.about}</h2>
          <div className="grid md:grid-cols-2 gap-12">
              {/* About */}
            <div>
              <h3 className="text-xl font-semibold mb-4">{t.presentation}</h3>
              <p className="text-gray-600 mb-6">{t.description}</p>
              {/* Soft Skills */}
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Réseaux</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Systèmes</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cybersécurité</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Cloud</span>
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-4">{t.softSkills}</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">{skill.title}</h4>
                    <p className="text-sm text-gray-600">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Centre D'interet */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold mb-4">{t.center_interet}</h3>
              <div className="flex flex-wrap gap-4">
                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl w-40  transition">
                  <img src={gaming} alt="Jeux Vidéo" className="w-20 h-20 object-contain mb-2" />
                  <span className="text-sm text-gray-700 font-medium text-center">Jeux Vidéo</span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl w-40  transition">
                  <img src={f1} alt="Formule 1" className="w-20 h-20 object-contain mb-2 " />
                  <span className="text-sm text-gray-700 font-medium text-center">Formule 1</span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl w-40  transition">
                  <img src={manga} alt="Mangas / Animés" className="w-20 h-20 object-contain mb-2" />
                  <span className="text-sm text-gray-700 font-medium text-center">Mangas / Animés</span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl  w-40 transition">
                  <img src={cybersecurity} alt="Cybersécurité" className="w-20 h-20 object-contain mb-2" />
                  <span className="text-sm text-gray-700 font-medium text-center">Cybersécurité</span>
                </div>
              </div>
             {/* Skills */}
              <h3 className="text-xl font-semibold mb-4">{t.skills}</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([key, skill]) => (
                  <div key={key} className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <skill.icon className="w-5 h-5 text-blue-600" />
                        <span className="font-medium">{skill.title}</span>
                      </div>
                      <button
                        onClick={() => setExpandedSkill(expandedSkill === key ? null : key)}
                        className="text-sm text-blue-600 hover:text-blue-800"
                      >
                        {expandedSkill === key ? t.hideDetails : t.viewDetails}
                      </button>
                    </div>
                    {expandedSkill === key && (
                      <ul className="mt-3 space-y-2 text-gray-600 pl-7 list-disc">
                        {skill.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.certifications}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer transform hover:scale-105 transition-transform"
                onClick={() => setSelectedCertification(cert.id)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{cert.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{cert.organization} • {cert.date}</p>
                  <p className="text-gray-700">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification Modal */}
      {selectedCertification && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold">
                  {certifications.find(c => c.id === selectedCertification)?.title}
                </h3>
                <button
                  onClick={() => setSelectedCertification(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              {certifications.find(c => c.id === selectedCertification)?.details.domains.map((domain, index) => (
                <div key={index} className="mb-4">
                  <p className="text-gray-700">• {domain}</p>
                </div>
              ))}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-gray-600">
                  {certifications.find(c => c.id === selectedCertification)?.details.validity}
                </p>
                <p className="text-gray-600 mt-2">
                  {certifications.find(c => c.id === selectedCertification)?.details.score}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Parcours Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.path}</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formation */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14v7"/>
                </svg>
                {t.education}
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Diplôme d'Ingénieur en Systèmes d'Information</h4>
                  <p className="text-gray-600">École d'ingénieurs • 2020 - 2023</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">DUT Informatique</h4>
                  <p className="text-gray-600">IUT • 2018 - 2020</p>
                </div>
              </div>
            </div>
            
            {/* Expérience */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                {t.experience}
              </h3>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Stage - Administrateur Système</h4>
                  <p className="text-gray-600">Entreprise • 6 mois</p>
                  <p className="mt-2">Administration système et sécurisation d'infrastructure</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">Stage - Analyste Cybersécurité</h4>
                  <p className="text-gray-600">Entreprise • 4 mois</p>
                  <p className="mt-2">Analyse de vulnérabilités et tests d'intrusion</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projets Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">{t.projects}</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-12"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-sm h-full">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 Votre Nom. {t.copyright}</p>
        </div>
      </footer>
    </div>
  );
}

export default App;