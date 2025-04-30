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
import makebasic from '/assets/make_basic.png';
import makeintermediate from '/assets/make_intermediate.png';
import toeic from '/assets/toeic.jpg';
import bigdata from '/assets/BigData.jpg';
import easysave from '/assets/easysave.png';
import wireless from '/assets/network_wireless.jpg';
import network from '/assets/enterprise_network.jpeg';
import cybersecurityproject from '/assets/cybersecurity_project.png';


function App() {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = translations[lang];
  
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null);
  const [selectedCertification, setSelectedCertification] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);

  

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
        ? 'Passionné par les nouvelles technologies, je mène une veille constante et explore régulièrement de nouveaux outils pour enrichir mes compétences.'
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
      id: 'makebasic',
      title: lang === 'fr'
        ? 'Make Basique.'
        : 'Make Basic.',
      organization: 'Make Academy',
      date: '2024',
      image: makebasic,
      description: lang === 'fr'
        ? 'Badge Make Basique - Les bases de l\'automatisation maîtrisées.'
        : 'Badge Make Basic - Mastering the basics of automation.',
      details: lang === 'fr' ? {
        domains: [
          'Donnée, Gestion de données, Structure de données',
          'Automatisation',
          'Agrégation',
          'No-code',
        ],
        validity: 'Certification valide à vie',
        score: '',
      } : {
        domains: [
          'Data, Data Literacy, Data Structures',
          'Automation',
          'Aggregation',
          'No-code',
        ],
        validity: 'Certification valid for life',
        score: '',
      },
    },
    {
      id: 'makeintermediate',
      title: lang === 'fr'
        ? 'Make Intermédiare.'
        : 'Make Intermediary.',
      organization: 'Make Academy',
      date: '2024',
      image: makeintermediate,
      description: lang === 'fr'
        ? 'Badge Make Intermédiare - L\'automatisation au niveau supérieur.'
        : 'Badge Make Intermediate - Automation to the next level.',
      details: lang === 'fr' ? {
        domains: [
          'Données / Structures de données / Tableaux / JSON',
          'Automatisation / Fonctions / map() / get() / Directives',
          'HTTP / Requêtes HTTP / Paramètres d’URL / Webhooks',
          'Gestion des erreurs',
          'Manipulation des dates',
        ],
        validity: 'Certification valide à vie',
        score: '',
      } : {
        domains: [
          'Data / Data Structures / Array / JSON',
          'Automation / Functions / map() / get() / Directive',
          'HTTP / HTTP Requests / URL query / Webhooks',
          'No-Error Handling',
          'Date Manipulation',
        ],
        validity: 'Certification valid for life',
        score: '',
      },
    },
    {
      id: 'toeic',
      title: 'TOEIC',
      organization: 'ETS Global',
      date: '2025',
      image: toeic,
      description: lang === 'fr'
        ? 'ETS Global certification d\'anglais - Test d\'anglais pour la communication internationale.'
        : 'ETS Global english certification - Test of English for International Communication.',
      details: lang === 'fr' ? {
        domains: [
          'Compréhension écrite',
          'Compréhension orale',
          'Identifiant de la certification : 5101789782',
        ],
        validity: 'Certification valide jusqu\'en 2027',
        score: '925/1000',
      } : {
        domains: [
          'Reading comprehension',
          'Listening comprehension',
          'Certification identifier: 5101789782',
        ],
        validity: 'Certification valid until 2027',
        score: '925/1000',
      },
    },
  ];

  const projects = [
    {
      title: lang === 'fr' ? 'Réseau sans-fil' : 'Wireless Network',
      description: lang === 'fr'
        ? 'Projet réalisé dans le cadre de mon IUT, par groupe de huit nous avons été équipés d\'un switch, d\'un routeur, de deux bornes Wi-Fi et d\'un téléphone IP. Le but est de les configurer, et d\'ajouter un IPBX via sous machine virtuelle, afin d\'obtenir une infrastructure d\'entreprise sans fil.'
        : 'Project carried out as part of my IUT, in groups of eight we were equipped with a switch, a router, two Wi-Fi terminals and an IP phone. The aim is to configure them, and add an IPBX via a virtual machine, in order to obtain a wireless enterprise infrastructure.',
      image: wireless,
      tags: ['Wi-Fi', 'Cisco', 'IPBX'],
    },
        {
      title: lang === 'fr' ? 'Réseau d\'entreprise' : 'Enterprise Network',
      description: lang === 'fr' 
        ? 'Ce projet a été le premier que j\'ai réalisé au CESI, avec trois autres étudiants. Ce projet réseau était basé sur de nombreuses notions, que ce soit l\'administration des serveurs, la configuration d\'un AD (avec toutes ses règles et GPO), l\'installation d\'un routeur redondant (firewall et règles DMZ), mais aussi la supervision (Centreon).'
        : 'This project was the first I did at CESI, along with three other students. This network project was based on many different notions, whether server administration, configuration of an AD (with all its rules and GPO), installation of redundant router (firewall and DMZ rules) , but also supervision (Centreon). We did very well on this project and got an A grade.',
      image: network,
      tags: ['Active Directory', 'Pfsense', 'Centreon', 'Backup'],
    },
    {
      title: lang === 'fr' ? 'Easysave' : 'Easysave',
      description: lang === 'fr'
        ? 'Réaliser d\'une application de travail sauvegarde en programmation orienté objet, chiffré, journalisé et multithreader.'
        : 'Create an object-oriented, encrypted, journalized and multithreaded backup work application',
      image: easysave,
      tags: ['C#', 'POO', 'XML'],
    },
    {
      title: lang === 'fr' ? 'Big Data' : 'Big Data',
      description: lang === 'fr'
        ? 'Dans le cadre de ce projet, le groupe CHU (Cloud Healthcare Unit) nous a donc demandé de l\'aider à mettre en place son propre entrepôt de données afin d\'exploiter un grand nombre de données. Après avoir effectué des traitements de données via Talend sur les fichiers sources (PostgreSQL, xls, csv) qui nous ont été fournis, nous avons dû créer des tables partitionnées et des buckets afin d\'optimiser les requêtes. Enfin, une structuration des données dans PowerBI a été demandée.'
        : 'During this project, the CHU group (Cloud Healthcare Unit) therefore asked us to help it set up its own data warehouse in order to exploit a large amount of data. After performing data processing jobs via Talend on the source files (PostgreSQL, xls, csv) provided to us, we had to create partitioned tables and buckets to optimize requests. And finally a data structuring in PowerBI was requested.',
      image: bigdata,
      tags: ['SGBDR', 'Hadoop', 'Hive', 'PowerBI'],
    },
    {
      title: lang === 'fr' ? 'Élective réseau' : 'Malware Analysis',
      description: lang === 'fr'
        ? 'Dans le cadre de mes études au CESI, en 4ème année, nous devions concevoir une architecture LAN pour une entreprise internationale complète, comprenant plusieurs réseaux LAN, puis concevoir un nuage MPLS et (i)BGP pour les interconnecter.'
        : 'As part of my studies at CESI, in 4th year, we had to design a LAN architecture for a complete international company, including several LAN networks, and then design an MPLS and (i)BGP cloud to interconnect them.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?fit=crop&w=800&h=400',
      tags: ['Active Directory', 'StormShield', 'Exchange', '3CX', 'MPLS', '(i)BPG', 'OSPF', 'VRF'],
    },
    {
      title: lang === 'fr' ? 'Cybersécurité' : 'Cybersecurity',
      description: lang === 'fr'
        ? 'En cinquième et dernière année, nous avons réalisé un projet en cybersécurité découpé en plusieurs phases : Conception, Pentest, Forensic, et Optimisation. Durant la première phase, l’objectif était de concevoir une architecture réseau et système pour une entreprise fictive de 900 employés, avec certaines contraintes techniques et organisationnelles. Au sein de cette infrastructure, on trouvait un domaine Active Directory (avec un RODC), un serveur de messagerie (Exchange 2019), un serveur de téléphonie (3CX), un serveur de fichiers et de sauvegarde, un outil de supervision (Centreon), un SIEM (Wazuh), ainsi qu’un EDR reposant sur une architecture hybride SOA/Microservices. Une fois cette architecture en place, la seconde phase consistait à attaquer l’infrastructure voisine afin d’identifier et d’exploiter des vulnérabilités. La phase Forensic visait ensuite à retrouver les traces des attaquants à partir des logs et du SIEM. Enfin, la phase d’optimisation était centrée sur l’amélioration de l’infrastructure en matière de sécurité et de fonctionnalité.'
        : 'In our fifth and final year, we carried out a cybersecurity project divided into several phases: Design, Pentest, Forensic, and Optimization. In the first phase, the objective was to design a network and system architecture for a fictitious company of 900 employees, with certain technical and organizational constraints. This infrastructure included an Active Directory domain (with a RODC), a mail server (Exchange 2019), a telephony server (3CX), a file and backup server, a monitoring tool (Centreon), a SIEM (Wazuh), and an EDR based on a hybrid SOA/Microservices architecture. Once this architecture was in place, the second phase involved attacking the neighboring infrastructure to identify and exploit vulnerabilities. The forensic phase then involved tracking down the attackers\' traces using logs and SIEM. Finally, the optimization phase focused on improving the infrastructure in terms of security and functionality.',
      image: cybersecurityproject,
      tags: ['Active Directory', 'StormShield', 'Cisco', 'Exchange', '3CX', 'SIEM', 'Supervision', 'Pentest', 'Forensic'],
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
                  <span className="text-sm text-gray-700 font-medium text-center">{t.interet1}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl w-40  transition">
                  <img src={f1} alt="Formule 1" className="w-20 h-20 object-contain mb-2 " />
                  <span className="text-sm text-gray-700 font-medium text-center">{t.interet2}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl w-40  transition">
                  <img src={manga} alt="Mangas / Animés" className="w-20 h-20 object-contain mb-2" />
                  <span className="text-sm text-gray-700 font-medium text-center">{t.interet3}</span>
                </div>

                <div className="flex flex-col items-center bg-gray-50 p-4 rounded-xl  w-40 transition">
                  <img src={cybersecurity} alt="Cybersécurité" className="w-20 h-20 object-contain mb-2" />
                  <span className="text-sm text-gray-700 font-medium text-center">{t.interet4}</span>
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
                className="bg-white rounded-lg overflow-hidden shadow-sm cursor-pointer transform hover:scale-105 transition-transform flex flex-col justify-between h-full min-h-[450px]"
                onClick={() => setSelectedCertification(cert.id)}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="block mx-auto mt-4 w-50 h-100 object-cover"
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
                  <h4 className="font-semibold">{t.formation1titre}</h4>
                  <p className="text-gray-600">{t.formation1ecole} • 2020 - 2023</p>
                  <p className="mt-2 text-justify">{t.formation1description}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{t.formation2titre}</h4>
                  <p className="text-gray-600">{t.formation2ecole} • 2018 - 2020</p>
                  <p className="mt-2 text-justify">{t.formation2description}</p>
                </div>
                {/* <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{t.formation3titre}</h4>
                  <p className="text-gray-600">{t.formation3ecole} • 2018 - 2020</p>
                  <p className="mt-2 text-justify">{t.formation3description}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{t.formation4titre}</h4>
                  <p className="text-gray-600">{t.formation4ecole} • 2018 - 2020</p>
                  <p className="mt-2 text-justify">{t.formation4description}</p>
                </div> */}
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
              <div className="space-y-6 text-justify">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{t.experience1titre}</h4>
                  <p className="text-gray-600">{t.experience1ecole} • 2 {t.month}</p>
                  <p className="mt-2">{t.experience1description}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{t.experience2titre}</h4>
                  <p className="text-gray-600">{t.experience2ecole} • 3 {t.month}</p>
                  <p className="mt-2">{t.experience2description}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{t.experience3titre}</h4>
                  <p className="text-gray-600">{t.experience3ecole} • 36 {t.month}</p>
                  <p className="mt-2">{t.experience3description}</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="font-semibold">{t.experience4titre}</h4>
                  <p className="text-gray-600">{t.experience4ecole} • 4 {t.month}</p>
                  <p className="mt-2">{t.experience4description}</p>
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
              <div
                className="bg-white rounded-lg overflow-hidden shadow-sm h-full cursor-pointer hover:shadow-md transition"
                onClick={() => setSelectedProject(project)}
              >
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-justify mb-4 line-clamp-3">{project.description}</p>
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
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
                <p className="text-gray-700 mb-6 whitespace-pre-line text-justify">
                  {selectedProject.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, idx) => (
                    <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
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