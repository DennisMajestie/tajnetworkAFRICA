
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { PageHeaderComponent } from '../../shared/components/page-header/page-header.component';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, PageHeaderComponent],
  templateUrl: './service-detail.component.html',
  styleUrls: ['./service-detail.component.scss']
})
export class ServiceDetailComponent implements OnInit {

  serviceId: any;
  serviceContent: any;
  servicePayload: any = {};
  bgImage = "assets/images/taj/homeslider/slider6.jpg";
  tel: number = 2348029824786;



  services = [
    { id: 1, service: 'CRM & ERP Implementation' },
    { id: 2, service: 'Chatbot Development' },
    { id: 3, service: 'Software Development' },
    { id: 4, service: 'Mentorship Program' },
    { id: 5, service: 'Website Development' },
    { id: 6, service: 'IT Consultancy' },
    { id: 7, service: 'SEO Optimization' },
    { id: 8, service: 'Data Analysis & Insights' },
    { id: 9, service: 'Cyber Security' },
    { id: 10, service: 'Mobile App Development' },
    { id: 11, service: 'Web App Development' },
    { id: 12, service: 'Digital Marketing' },
    { id: 13, service: 'Website Hosting' },
    { id: 14, service: 'UI/UX Design' },
    { id: 15, service: 'SEM Optimization' },
    { id: 16, service: 'Payment Gateway Integration' },
    { id: 17, service: 'Maintenance & Support Services' },
    { id: 18, service: 'Content Marketing' },
    { id: 19, service: 'Social Media Management' },
    { id: 20, service: 'Email Marketing' },
    { id: 21, service: 'Cloud Hosting Solutions' },
    { id: 22, service: 'Business Process Automation Consultation' },
    { id: 23, service: 'Full Stack Web Development Course' },
    { id: 24, service: 'Cloud Infrastructure & DevOps Mastery' }

  ]

  content = [
    {
      id: 1,
      service: 'CRM & ERP Implementation',
      intro: 'Optimize your business operations with our Enterprise CRM & ERP solutions.',
      caption: 'Efficiency and seamless integration.',
      img: "assets/images/taj/service-details/erp.jpg",
      img2: "assets/images/taj/service-details/erp2.jpg",
      text1: 'Revolutionize your business with customized CRM and ERP systems designed to improve efficiency and collaboration. These systems help businesses manage resources, customer relationships, and operations seamlessly. Our approach ensures that every module is tailored to your specific organizational workflow.',
      text2: 'We integrate advanced technologies to ensure seamless data flow across departments, giving you real-time insights and greater control. From finance and HR to sales and inventory, we bridge the gap between your departments.',
      text3: "Our solutions are designed to be scalable, adaptable, and secure, ensuring they evolve with your business and seamlessly adjust to dynamic market demands. By leveraging cutting-edge technologies and best practices, we create robust solutions that not only meet current needs but also provide the flexibility to scale as your business grows.",
      features: [
        'Business Process Audit & Requirement Mapping',
        'Custom Module Design & Architecture',
        'Legacy Data Cleaning & Secure Migration',
        'Third-party API & Platform Integration',
        'User Acceptance Testing & Employee Training',
        'Post-Launch Optimization & Support'
      ]
    },
    {
      id: 2,
      service: 'Chatbot Development',
      intro: 'Enhance customer engagement with responsive, AI-powered chatbots.',
      caption: 'Smarter customer interactions.',
      img: "assets/images/taj/service-details/chatbot2.jpg",
      img2: "assets/images/taj/service-details/chatbot.jpg",
      text1: 'Our chatbot development services provide your business with intelligent conversational tools that engage users 24/7. Automate customer support, streamline interactions, and significantly reduce response times for complex queries.',
      text2: 'From sales inquiries to technical support, our chatbots are designed to handle a variety of customer needs while delivering personalized experiences that mirror human interaction.',
      text3: "We use advanced AI and machine learning algorithms to ensure that your chatbot not only functions efficiently but also continuously learns and improves over time. This adaptive capability transforms your customer service into a strategic asset.",
      features: [
        'Natural Language Processing (NLP) Setup',
        'Multi-platform Integration (Web, WhatsApp, Slack)',
        'Custom Intent & Dialogue Flow Mapping',
        'Sentiment Analysis Integration',
        'Automated Lead Qualification Systems',
        'Conversational Analytics Dashboard'
      ]
    },
    {
      id: 3,
      service: 'Software Development',
      intro: 'Custom enterprise software designed for your unique business challenges.',
      caption: 'Innovative solutions for growth.',
      img: "assets/images/taj/service-details/SD.jpg",
      img2: "assets/images/taj/service-details/SD2.jpg",
      text1: 'Our software development services help businesses solve complex problems and achieve their goals. From concept to deployment, we ensure each solution is designed for your specific needs, using the latest agile methodologies.',
      text2: 'Whether you are automating tasks or enhancing user experiences, our solutions are built for high-performance and absolute reliability. We don’t just build apps; we build business solutions.',
      text3: "We provide comprehensive post-deployment support and regular updates to ensure that your software continues to perform at its best. Our team is dedicated to monitoring your system and addressing potential issues before they impact your business.",
      features: [
        'Agile Software Development Lifecycle',
        'Microservices Architecture Design',
        'Cloud-Native Application Development',
        'Quality Assurance & Automated Testing',
        'Secure API Ecosystem Creation',
        'Continuous Integration & Deployment (CI/CD)'
      ]
    },
    {
      id: 4,
      service: 'Mentorship Program',
      intro: 'Empowering aspiring tech professionals with world-class expert guidance.',
      caption: 'Roadmap to Tech Excellence.',
      img: "assets/images/taj/service-details/mentorship-premium.png",
      img2: "assets/images/taj/service-details/mentorship-premium.png",
      text1: 'Our mentorship program is designed to empower tech professionals by providing expert insights and hands-on guidance. We connect you with verified industry leaders who have walked the path you are currently on.',
      text2: 'Through personalized sessions, our mentors help you navigate challenges, build rare skills, and achieve your career goals faster than traditional learning methods.',
      text3: "This program is meticulously designed to cater to individuals at all skill levels. We provide highly practical knowledge and hands-on experience that enable participants to thrive in global tech environments.",
      features: [
        'Phase 1: Professional Skills Audit & Goal Setting',
        'Phase 2: Custom Learning Roadmap Development',
        'Phase 3: High-Impact Project Portfolio Building',
        'Phase 4: Interview Mastery & Soft Skills Training',
        'Phase 5: Global Career Coaching & Network Access',
        'Ongoing: Exclusive Community Masterclasses'
      ],
      duration: 'Ongoing Personalized Support'
    },
    {
      id: 5,
      service: 'Website Development',
      intro: 'Create high-conversion, stunning websites that elevate your global brand.',
      caption: 'Building your digital dominance.',
      img: "assets/images/taj/service-details/web-development.jpg",
      img2: "assets/images/taj/service-details/web-development2.jpg",
      text1: 'Our website development services deliver stunning, user-friendly designs that elevate your brand and engage your audience. We build sites that serve as powerful business engines.',
      text2: 'We focus on responsive designs, blazing fast loading times, and SEO-friendly architecture to ensure your website ranks where it matters.',
      text3: "Whether you’re building an e-commerce store, a corporate website, or a custom SaaS platform, we specialize in creating scalable, secure, and high-performance solutions.",
      features: [
        'UX Research & Interactive Wireframing',
        'Custom Theme & UI Development',
        'Mobile-First Responsive Engineering',
        'CMS Integration & Custom Plugins',
        'Performance Optimization & Core Web Vitals',
        'SEO-Ready Architecture & Analytics'
      ]
    },
    {
      id: 6,
      service: 'IT Consultancy',
      intro: 'Strategic guidance for seamless digital transformation.',
      caption: 'Smarter IT decisions for global success.',
      img: "assets/images/taj/service-details/Consultancy.jpg",
      img2: "assets/images/taj/service-details/Consultancy2.jpg",
      text1: 'Our IT consultancy services help businesses navigate the complexities of digital transformation. We provide actionable insights and strategic planning for the long-term.',
      text2: 'From infrastructure upgrades to technology adoption, we work with you to align IT solutions with your business objectives, ensuring maximum ROI.',
      text3: "Our team of experts is committed to ensuring that you remain ahead of the competition by strategically leveraging the latest technologies and industry best practices.",
      features: [
        'Digital Transformation Strategy',
        'Infrastructure Security Audit',
        'Tech Stack Rationalization',
        'Compliance & Governance Planning',
        'Disaster Recovery Strategy',
        'Cloud Migration Consultation'
      ]
    },
    {
      id: 7,
      service: 'SEO Optimization',
      intro: 'Boost your online visibility, authority, and organic traffic.',
      caption: 'Get found online, dominate your niche.',
      img: "assets/images/taj/service-details/seo.jpg",
      img2: "assets/images/taj/service-details/seo2.jpg",
      text1: 'Our SEO optimization services help your business climb search engine rankings, attract more qualified visitors, and significantly increase conversions.',
      text2: 'We utilize proven strategies like keyword optimization, content marketing, and deep technical SEO to ensure your website performs exceptionally in search engines.',
      text3: "Stay ahead of the competition with our continuous monitoring and adjustment approach, ensuring your website remains relevant in an ever-evolving landscape.",
      features: [
        'Technical SEO Health Check',
        'Advanced Keyword & Competitor Research',
        'On-Page Semantic Optimization',
        'High-Authority Link Building Strategy',
        'Content Gap Analysis & Planning',
        'Local SEO & GMB Management'
      ]
    },
    {
      id: 8,
      service: 'Data Analysis & Insights',
      intro: 'Unlock the hidden value and actionable insights from your data.',
      caption: 'Turning raw data into strategic opportunity.',
      img: "assets/images/taj/service-details/Data_Analysis.jpg",
      img2: "assets/images/taj/service-details/Data_Analytics2.jpg",
      text1: 'We provide data analysis services that help businesses make informed decisions based on real-time actionable insights and predictive patterns.',
      text2: 'Our solutions include trend identification and visual reporting, tailored to give you a clear view of your business performance.',
      text3: "Leverage your data effectively to identify new opportunities, streamline operations, and stay ahead of the curve in an increasingly data-driven world.",
      features: [
        'Data Cleaning & ETL Processing',
        'Predictive Analytics Modeling',
        'Interactive BI Dashboard Design',
        'Market Trend & Competitor Analysis',
        'Operation Efficiency Reporting',
        'Customer Behavior Insights'
      ]
    },
    {
      id: 9,
      service: 'Cyber Security',
      intro: 'Protect your enterprise assets with robust, multi-layered security.',
      caption: 'Defend your business against evolving threats.',
      img: "assets/images/taj/service-details/Cybersecurity.jpg",
      img2: "assets/images/taj/service-details/Cybersecurity2.jpg",
      text1: 'Our cybersecurity solutions protect your business from ever-evolving digital threats, safeguarding your most sensitive data and physical assets.',
      text2: 'We provide a multi-layered security approach that includes threat detection, risk management, and rapid response strategies to keep you secure.',
      text3: "Partner with us to ensure your systems are secure, compliant, and ready to withstand future challenges. We take security as a serious business driver.",
      features: [
        'Vulnerability Assessment & Penetration Testing',
        'Network Firewall & Proxy Optimization',
        'IAM (Identity & Access Management)',
        'Endpoint Security & Monitoring',
        'Incident Response & Recovery Plans',
        'Compliance Readiness (ISO, SOC2, GDPR)'
      ]
    },
    {
      id: 10,
      service: 'Mobile App Development',
      intro: 'Develop intuitive, high-performance mobile apps for any platform.',
      caption: 'The future is mobile. Build it right.',
      img: "assets/images/taj/service-details/mobile.jpg",
      img2: "assets/images/taj/service-details/mobile2.jpg",
      text1: 'We design and develop mobile apps tailored to meet your unique business goals and user expectations. We focus on engagement and utility.',
      text2: 'Our expertise spans native and hybrid apps, ensuring flawless functionality and performance across all iOS and Android devices.',
      text3: "From ideation to deployment on App Store and Play Store, we provide end-to-end services that help you stay ahead in the mobile-first world.",
      features: [
        'iOS & Android Native Development',
        'Cross-Platform Engineering (Flutter/Ionic)',
        'App UI/UX Design & Prototyping',
        'Backend API & Cloud Integration',
        'App Store Optimization (ASO)',
        'Maintenance & OS Version Updates'
      ]
    },
    {
      id: 11,
      service: 'Web App Development',
      intro: 'Powerful, scalable web applications built for business performance.',
      caption: 'Enterprise-grade web apps for modern teams.',
      img: "assets/images/taj/service-details/web.jpg",
      img2: "assets/images/taj/service-details/web2.jpg",
      text1: 'Our web app development services offer robust, scalable, and high-performance applications tailored to your operational needs.',
      text2: 'We specialize in creating interactive user experiences that drive deep engagement and streamline your complex internal operations.',
      text3: "From startups to enterprises, we provide solutions that support your growth and adapt to evolving market trends with ease.",
      features: [
        'Custom SaaS Product Development',
        'Single Page Application (SPA) Design',
        'Legacy App Modernization',
        'Real-time Data Sync & Web Sockets',
        'Cloud-Native Web Services',
        'Scalable Database Orchestration'
      ]
    },
    {
      id: 12,
      service: 'Digital Marketing',
      intro: 'Reach and convert your audience with data-driven marketing.',
      caption: 'Drive meaningful engagement and ROI.',
      img: "assets/images/taj/service-details/digital.jpg",
      img2: "assets/images/taj/service-details/digital2.jpg",
      text1: 'Our digital marketing services help you connect with your audience through highly targeted campaigns that tell your brand story.',
      text2: 'We combine social media marketing, creative content creation, and paid ads to deliver measurable results that impact your bottom line.',
      text3: "Let us help you build a strong online presence and achieve your marketing goals efficiently with our team of growth experts.",
      features: [
        'Multi-channel Social Media Strategy',
        'Pay-Per-Click (PPC) Management',
        'Brand Identity & Awareness Campaigns',
        'Conversion Rate Optimization (CRO)',
        'Performance Tracking & Attribution',
        'Influencer & Partnership Marketing'
      ]
    },
    {
      id: 13,
      service: 'Website Hosting',
      intro: 'Secure, blazing-fast, and highly reliable hosting solutions.',
      caption: 'The foundation of your digital availability.',
      img: "assets/images/taj/service-details/hosting.jpg",
      img2: "assets/images/taj/service-details/hosting2.jpg",
      text1: 'Our website hosting solutions ensure high performance, total security, and 99.9% reliability for your online platforms.',
      text2: 'We provide scalable hosting plans, regular automated backups, and 24/7 monitoring to ensure your website runs smoothly under any load.',
      text3: "Whether it’s shared, VPS, or dedicated hosting, we have a solution to match your specific needs and traffic volume.",
      features: [
        'Managed Cloud Hosting (AWS/Azure)',
        '24/7 Server Monitoring & Support',
        'Automatic SSL & Security Patching',
        'High-Availability Server Clusters',
        'DDoS Protection & Firewall Setup',
        'Global CDN Integration'
      ]
    },
    {
      id: 14,
      service: 'UI/UX Design',
      intro: 'Design user-centric interfaces that people love to use.',
      caption: 'Create memorable, intuitive digital experiences.',
      img: "assets/images/taj/service-details/uiux.jpg",
      img2: "assets/images/taj/service-details/uiux2.jpg",
      text1: 'Our UI/UX design services focus on creating intuitive and visually appealing interfaces that captivate and retain users.',
      text2: 'We prioritize user behavior research and seamless navigation to deliver impactful digital experiences that drive business results.',
      text3: "From wireframes to prototypes, we collaborate with you to ensure the final product meets your vision while adhering to design best practices.",
      features: [
        'User Persona & Journey Mapping',
        'Interactive High-Fidelity Prototyping',
        'User Testing & Feedback Analysis',
        'Design System Creation',
        'Accessibility (WCAG) Compliance',
        'Visual Interface Design & Assets'
      ]
    },
    {
      id: 15,
      service: 'SEM Optimization',
      intro: 'Maximize your ROI with advanced Search Engine Marketing.',
      caption: 'Get better results with smarter ad spend.',
      img: "assets/images/taj/service-details/sem.jpg",
      img2: "assets/images/taj/service-details/sem2.jpg",
      text1: 'Our SEM optimization services improve ad performance by leveraging data-driven strategies and real-time bidding optimizations.',
      text2: 'We focus on intelligent keyword research, high-quality audience targeting, and continuous A/B testing to ensure you get the best ROI.',
      text3: "Increase your sales and attract quality leads with tailored ad campaigns that deliver measurable success for your brand.",
      features: [
        'Google Ads & Bing Campaign Setup',
        'Ad Copywriting & Creative Design',
        'Landing Page Optimization',
        'Keyword Bidding & Budget Strategy',
        'Retargeting & Remarketing Flows',
        'Monthly ROI Reporting'
      ]
    },
    {
      id: 16,
      service: 'Payment Gateway Integration',
      intro: 'Simplify global transactions with secure payment gateways.',
      caption: 'Seamless, frictionless checkout experiences.',
      img: "assets/images/taj/service-details/payment.jpg",
      img2: "assets/images/taj/service-details/payment2.jpg",
      text1: 'Our payment gateway integration services simplify global transactions by connecting your platform to secure, trusted payment systems.',
      text2: 'We support multiple payment options (Visa, Mastercard, MoMo), ensuring a smooth and successful checkout process for every customer.',
      text3: "With a focus on security and PCI compliance, our solutions help you build trust and improve customer satisfaction effortlessly.",
      features: [
        'Multi-currency Gateway Setup',
        'Recurring Billing & Subscriptions',
        'Fraud Detection & Prevention Sync',
        'Mobile Money & Wallet Integration',
        'PCI-DSS Compliance Support',
        'Custom Checkout Flow Engineering'
      ]
    },
    {
      id: 17,
      service: 'Maintenance & Support Services',
      intro: 'Ongoing professional support to ensure total system stability.',
      caption: 'Ensuring your systems run perfectly, 24/7.',
      img: "assets/images/taj/service-details/mss.jpg",
      img2: "assets/images/taj/service-details/mss2.jpg",
      text1: 'Our maintenance and support services ensure your systems remain stable, secure, and always up to date with the latest patches.',
      text2: 'We provide regular performance audits, rapid issue resolution, and optimization to keep your platforms running at peak efficiency.',
      text3: "Trust us for proactive monitoring and round-the-clock support to address any technical challenges before they become business problems.",
      features: [
        '24/7 Emergency Technical Support',
        'Regular Security Updates & Patching',
        'Performance & Uptime Monitoring',
        'Database Optimization & Backups',
        'New Feature Implementation',
        'Technical Debt Cleanup'
      ]
    },
    {
      id: 18,
      service: 'Content Marketing',
      intro: 'Engage and grow your audience with high-impact content.',
      caption: 'Strategic storytelling that drives conversions.',
      img: "assets/images/taj/service-details/content.jpg",
      img2: "assets/images/taj/service-details/content2.jpg",
      text1: 'Our content marketing services focus on creating valuable, relevant content to attract and retain your target audience.',
      text2: 'We craft compelling blogs, high-production videos, and viral infographics that establish your brand as a leading industry authority.',
      text3: 'Let us help you engage your audience and drive long-term conversions through powerful, authentic storytelling.',
      features: [
        'Content Strategy & Topic Research',
        'Professional Copywriting & Editing',
        'Video Production & Distribution',
        'Social Media Content Management',
        'Email Newsletter Campaigns',
        'E-book & Whitepaper Creation'
      ]
    },
    {
      id: 19,
      service: 'Social Media Management',
      intro: 'Master your online presence with targeted management.',
      caption: 'Grow your brand voice on the world’s biggest platforms.',
      img: "assets/images/taj/service-details/smm.jpg",
      img2: "assets/images/taj/service-details/smm2.jpg",
      text1: 'Our social media management services boost your brand’s visibility through consistent, high-energy strategic content.',
      text2: 'We handle everything from community engagement to high-level strategy, ensuring your brand stays active and relevant.',
      text3: "Build meaningful connections with your audience and grow your global presence with our social media expertise.",
      features: [
        'Platform-Specific Content Strategy',
        'Community Management & Engagement',
        'Influencer Outreach & Management',
        'Social Media Growth Analytics',
        'Paid Social Campaign Alignment',
        'Crisis & Reputation Management'
      ]
    },
    {
      id: 20,
      service: 'Email Marketing',
      intro: 'Reach your audience directly with personalized campaigns.',
      caption: 'Engage and convert right in the inbox.',
      img: "assets/images/taj/service-details/email2.jpg",
      img2: "assets/images/taj/service-details/email.jpg",
      text1: 'Our email marketing services help you connect with your audience through targeted, highly personalized email flows.',
      text2: 'From crafting engaging weekly newsletters to setting up complex automation, we ensure your emails deliver results.',
      text3: "Boost your engagement and drive higher conversions with professional email strategies tailored for your business.",
      features: [
        'Automated Customer Journey Flows',
        'Drip Campaign Design & Timing',
        'High-Conversion Template Design',
        'A/B Testing Subject Lines & Content',
        'List Segmenting & Lead Management',
        'Performance Tracking & Optimization'
      ]
    },
    {
      id: 21,
      service: 'Cloud Hosting Solutions',
      intro: 'Scalable, enterprise-grade cloud hosting for modern businesses.',
      caption: 'Secure, reliable cloud solutions for high growth.',
      img: "assets/images/taj/service-details/cloud-hosting.jpg",
      img2: "assets/images/taj/service-details/cloud-hosting2.jpg",
      text1: 'Our cloud hosting solutions provide secure, scalable, and highly reliable infrastructure for your business-critical applications.',
      text2: 'We ensure optimal server performance, seamless auto-scaling, and total availability, no matter how much you grow.',
      text3: "With advanced security protocols and disaster recovery plans, your data is always safe and accessible when you need it.",
      features: [
        'Public & Private Cloud Architecture',
        'Load Balancing & High Availability',
        'Cloud Security Hardening (SSL/WAF)',
        'Automatic Snapshotting & Backups',
        'Seamless Infrastructure Scaling',
        'Cost-Optimization Audits'
      ]
    },
    {
      id: 22,
      service: 'Business Process Automation Consultation',
      intro: 'Streamline your operations with intelligent automated solutions.',
      caption: 'Maximum efficiency through smart technology.',
      img: "assets/images/taj/service-details/automation.jpg",
      img2: "assets/images/taj/service-details/automation2.jpg",
      text1: 'Our business process automation consultancy optimizes your workflows, saving you thousands of man-hours every year.',
      text2: 'We implement cutting-edge technologies to automate repetitive tasks, allowing your core team to focus on strategic goals.',
      text3: "With streamlined processes, you can enhance productivity and eliminate costly operational bottlenecks throughout your organization.",
      features: [
        'Workflow Bottleneck Identification',
        'Custom RPA (Robotic Process Automation)',
        'Legacy Integration with Modern API',
        'Automated Internal Reporting Flows',
        'HR & Payroll Automation Setup',
        'Operational Efficiency Roadmap'
      ]
    },
    {
      id: 23,
      service: 'Full Stack Web Development Course',
      intro: 'Master modern, scalable web architecture from scratch with Taj Network.',
      caption: 'Become an Elite Full Stack Developer.',
      img: "assets/images/taj/service-details/fullstack-premium.png",
      img2: "assets/images/taj/service-details/fullstack-premium.png",
      text1: 'Our Full Stack Web Development course is a project-heavy, 24-week program designed to turn beginners into job-ready engineers.',
      text2: 'From crafting stunning UIs to building robust server logic, we provide a complete technical ecosystem for your journey.',
      text3: "Experience hands-on training with real-world projects, industry best practices, and expert mentorship that continues beyond the classroom.",
      features: [
        'Roadmap Phase 1: Web Fundamentals (HTML5, CSS3, Modern JS)',
        'Roadmap Phase 2: Frontend Engineering (Angular, React, State Mgmt)',
        'Roadmap Phase 3: Backend Logic (Node.js, Express, Python)',
        'Roadmap Phase 4: Database Design (PostgreSQL, MongoDB, Redis)',
        'Roadmap Phase 5: DevOps & Cloud (Git, CI/CD, AWS Deployment)',
        'Roadmap Phase 6: Final Capstone & Job Placement Coaching'
      ],
      duration: '24 Weeks (Intensive)'
    },
    {
      id: 24,
      service: 'Cloud Infrastructure & DevOps Mastery',
      intro: 'Learn to design and manage resilient, scalable cloud systems.',
      caption: 'Scale your career with Cloud Engineering.',
      img: "assets/images/taj/service-details/cloud-premium.png",
      img2: "assets/images/taj/service-details/cloud-premium.png",
      text1: 'The Cloud & DevOps Mastery course is designed for professionals looking to excel in system architecture and automated deployments.',
      text2: 'Master the tools the pros use: AWS, Docker, Kubernetes, and professional CI/CD pipelines for 100% reliable system delivery.',
      text3: "Gain practical, high-value experience in monitoring, logging, and troubleshooting complex, high-availability cloud environments.",
      features: [
        'Roadmap Phase 1: Linux Administration & Networking Basics',
        'Roadmap Phase 2: Advanced Cloud Providers (AWS/Azure)',
        'Roadmap Phase 3: Containerization Mastery (Docker & K8s)',
        'Roadmap Phase 4: Infrastructure as Code (Terraform & Ansible)',
        'Roadmap Phase 5: CI/CD Excellence (Jenkins, GitLab, GitHub Actions)',
        'Roadmap Phase 6: Enterprise Security & Monitoring (ELK, Prometheus)'
      ],
      duration: '18 Weeks (Deep Dive)'
    }
  ];


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.serviceId = params['id'];
      this.servicePayload = { serviceId: this.serviceId };
      this.serviceContent = this.content.find(item => item.id == this.serviceId);
      window.scrollTo(0, 0);
    });
  }

}
