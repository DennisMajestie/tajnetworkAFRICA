import { Injectable } from '@angular/core';
import { Select2Data } from 'ng-select2-component';

@Injectable({
  providedIn: 'root'
})
export class TrainingDataService {

  constructor() { }

  trainingServices = [
    {
      id: 1,
      title: "Frontend Development",
      caption: "Crafting visually appealing and responsive websites that provide seamless user experiences across all devices.",
      shortDescription: "Join our Frontend Mentorship program today and embark on a transformative journey that will empower you to build not just websites, but a successful future in tech.",
      longDescription: "Our Frontend Development training program is designed to equip you with the knowledge and practical experience needed to build beautiful, interactive, and responsive websites. You’ll learn essential technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular. This course will help you master modern web development techniques, ensuring you can create user-friendly interfaces, optimize websites for all devices, and deliver high-performance digital solutions.",
      features: [
        "Core Web Technologies",
        "Modern Frameworks",
        "Responsive Designs",
        "Version Control",
        "Project-Based Learning",
        "Performance Optimization"
      ],
      images: "assets/images/courses/frontend.jpg",
      courseValue: "Frontend-Development"
    },
    {
      id: 2,
      title: "Backend Development",
      caption: "Building robust server-side applications that ensure efficient data handling, security, and reliable functionality.",
      shortDescription: "Master the art of backend development and learn to build scalable and secure server-side applications that power modern industries.",
      longDescription: "Our Backend Development training program provides in-depth knowledge of server-side programming. You'll learn how to design, build, and maintain robust applications that handle databases, authentication, and APIs. Technologies covered include Node.js, Express.js, Django, and databases like PostgreSQL and MongoDB, preparing you to lead engineering teams and manage complex server architectures at scale.",
      features: [
        "Server-Side Logic",
        "Database Architecture",
        "API Engineering",
        "Security Protocols",
        "Cloud Infrastructure",
        "System Scalability"
      ],
      images: "assets/images/courses/backend.jpg",
      courseValue: "Backend-Development"
    },
    {
      id: 3,
      title: "UI/UX Design",
      caption: "Designing intuitive, user-friendly interfaces that enhance engagement and create memorable digital experiences.",
      shortDescription: "Learn how to create seamless and engaging digital experiences through effective UI/UX design principles and user-centric psychology.",
      longDescription: "Our UI/UX Design program teaches you how to create visually appealing and user-friendly interfaces from the ground up. You'll gain hands-on experience with wireframing, high-fidelity prototyping, and usability testing. By the end of this course, you will understand the intersection of human behavior and digital design, enabling you to build products that users love and trust.",
      features: [
        "Visual Design Theory",
        "Prototyping Tools",
        "User Journey Mapping",
        "Information Architecture",
        "Usability Testing",
        "Design System Thinking"
      ],
      images: "assets/images/courses/uiux.jpg",
      courseValue: "UI/UX-Design"
    },
    {
      id: 4,
      title: "Data Science",
      caption: "Analyzing complex data to uncover insights and support data-driven decision-making for smarter business strategies.",
      shortDescription: "Gain the skills to extract meaningful insights from massive datasets and make informed, predictive business decisions using AI.",
      longDescription: "Our Data Science course covers essential techniques for analyzing and visualizing complex data. Learn programming languages like Python and R, and explore data manipulation, machine learning, and AI applications. This program is designed to transform complex numbers into strategic business advantages, preparing you for roles in analytics, research, and high-level engineering departments.",
      features: [
        "Statistical Analysis",
        "Data Mining",
        "Machine Learning",
        "Predictive Modeling",
        "Big Data Engineering",
        "Data Storytelling"
      ],
      images: "assets/images/courses/data-science.jpg",
      courseValue: "Data-Science"
    },
    {
      id: 5,
      title: "Cyber Security",
      caption: "Protecting digital assets with advanced security measures to defend against cyber threats and ensure data integrity.",
      shortDescription: "Learn to safeguard complex systems and networks from evolving cyber threats in today's increasingly dangerous digital landscape.",
      longDescription: "Our Cyber Security course provides comprehensive knowledge of ethical hacking, penetration testing, and network security. You will learn how to identify vulnerabilities, implement robust encryption, and build defensive perimeters to protect organizations. This course focuses on defensive strategies and incident response, ensuring you can mitigate risks and protect sensitive data in real-world scenarios.",
      features: [
        "Network Defense",
        "Ethical Hacking",
        "Advanced Encryption",
        "Incident Response",
        "Risk Assessment",
        "Security Auditing"
      ],
      images: "assets/images/courses/cyber-security.jpg",
      courseValue: "Cyber-Security"
    },
    {
      id: 6,
      title: "SEO Optimization",
      caption: "Improving website visibility on search engines to attract more organic traffic and increase global reach.",
      shortDescription: "Master advanced search engine optimization strategies to improve website rankings and dominate search engine result pages.",
      longDescription: "Our SEO Optimization course teaches effective techniques to enhance a website’s search engine ranking. Learn about keyword research, on-page and off-page SEO, technical SEO, and Google Analytics. You will discover how to leverage search intent and technical performance to drive consistent organic growth and outperform competitors in highly saturated digital markets.",
      features: [
        "Semantic Search",
        "On-Page Strategies",
        "Technical SEO Audits",
        "Content Marketing",
        "Backlink Building",
        "Performance Analytics"
      ],
      images: "assets/images/courses/seo.jpg",
      courseValue: "SEO-Optimization"
    },
    {
      id: 7,
      title: "Digital Marketing",
      caption: "Implementing strategic online campaigns to grow brand presence, engage audiences, and drive high-value conversions.",
      shortDescription: "Learn to create and execute data-driven digital marketing strategies that drive measurable business growth and customer loyalty.",
      longDescription: "This course covers digital marketing essentials, including social media marketing, email marketing, PPC campaigns, and content marketing. You’ll also learn about analytics, performance tracking, and conversion rate optimization. Our program bridges the gap between creative storytelling and analytical precision, enabling you to build brands that resonate and convert at scale.",
      features: [
        "Social Media Ads",
        "Growth Hacking",
        "Email Automation",
        "Content Strategy",
        "Conversion Optimization",
        "Brand Strategy"
      ],
      images: "assets/images/courses/digital-marketing.jpg",
      courseValue: "Digital-Marketing"
    },
    {
      id: 8,
      title: "Graphics Design",
      caption: "Creating visually captivating graphics that communicate messages effectively and strengthen professional brand identity.",
      shortDescription: "Master the art of professional graphic design and create stunning visual content that defines modern brand aesthetics.",
      longDescription: "Our Graphic Design course provides intensive training in digital and print design. Using industry-standard tools like Adobe Photoshop, Illustrator, and CorelDRAW, you will learn the principles of typography, color theory, and layout. This program is designed to turn your creative vision into professional-grade assets that enhance brand identity and communication across all media channels.",
      features: [
        "Adobe Creative Suite",
        "Brand Visual Identity",
        "Commercial Illustration",
        "Print Media Design",
        "Motion Graphics",
        "Professional Portfolio"
      ],
      images: "assets/images/courses/graphics-design.jpg",
      courseValue: "Graphics-Design"
    },
    {
      id: 9,
      title: "SEM Optimization",
      caption: "Enhancing paid search strategies to boost ad performance, increase ROI, and drive high-quality targeted traffic.",
      shortDescription: "Learn the deep mechanics of Search Engine Marketing (SEM) to maximize ad performance and budget efficiency.",
      longDescription: "This course covers Google Ads, complex keyword bidding strategies, audience targeting, and A/B testing for paid search campaigns. You'll learn how to analyze campaign metrics to optimize return on investment and build scalable paid acquisition funnels. This program is essential for anyone looking to master the art of paid digital acquisition and performance marketing.",
      features: [
        "PPC Strategy",
        "Bid Management",
        "A/B Split Testing",
        "Conversion Tracking",
        "Retargeting Campaigns",
        "Analytics Integration"
      ],
      images: "assets/images/courses/sem.jpg",
      courseValue: "SEM-Optimization"
    },
    {
      id: 10,
      title: "CMS Management",
      caption: "Streamlining content creation and organization to ensure easy updates and a well-maintained modern website.",
      shortDescription: "Learn how to manage, customize, and secure professional CMS platforms like WordPress, Wix, and Joomla.",
      longDescription: "This course teaches how to build, customize, and manage enterprise-level websites using modern CMS platforms. You'll dive deep into theme customization, plugin development, and speed optimization. We focus on teaching you how to maintain security best practices and SEO performance, ensuring your content management systems are robust, fast, and easy to scale.",
      features: [
        "Platform Ecosystems",
        "Theme Customization",
        "Plugin Architecture",
        "Speed Optimization",
        "Security Best Practices",
        "E-commerce Setup"
      ],
      images: "assets/images/courses/cms.jpg",
      courseValue: "Content-Management-System"
    },
    {
      id: 11,
      title: "Mobile App Development",
      caption: "Creating high-performance cross-platform mobile applications for iOS and Android using modern frameworks.",
      shortDescription: "Master mobile engineering and build world-class apps that run natively on all mobile platforms with a single codebase.",
      longDescription: "Our Mobile Development course covers the full lifecycle of app creation. You'll learn frameworks like Flutter and React Native, focusing on performance optimization, native API integration, and publishing to the App Store and Google Play. This program ensures you can build smooth, high-performance mobile experiences that leverage the latest device capabilities and design trends.",
      features: [
        "Cross-Platform Dev",
        "State Management",
        "Native Integration",
        "Mobile UI / UX",
        "Store Deployment",
        "App Architecture"
      ],
      images: "assets/images/courses/mobile.jpg",
      courseValue: "Mobile-App-Development"
    },
    {
      id: 12,
      title: "Cloud & DevOps Mastery",
      caption: "Managing enterprise cloud infrastructure and implementing CI/CD pipelines for automated software delivery.",
      shortDescription: "Become a Cloud Engineer and master the art of automated infrastructure, scalable deployments, and site reliability.",
      longDescription: "This advanced course focus on AWS, Azure, and Google Cloud. You'll learn Docker, Kubernetes, and Terraform for Infrastructure as Code (IaC). We cover building robust CI/CD pipelines at scale using tools like Jenkins and GitHub Actions. This program is designed to transform you into a DevOps specialist capable of managing the infrastructure that powers global digital enterprises.",
      features: [
        "Cloud Architecture",
        "Containerization",
        "Infrastructure as Code",
        "Automated Pipelines",
        "Cloud Security",
        "Site Reliability"
      ],
      images: "assets/images/courses/cloud-mastery.jpg",
      courseValue: "Cloud-DevOps-Mastery"
    }
  ];

  courses: Select2Data = [
    {
      value: 'Frontend-Development',
      label: 'Frontend Development',
      data: { color: 'white', name: 'Frontend Development' },
    },
    {
      value: 'Backend-Development',
      label: 'Backend-Development',
      data: { color: 'white', name: 'Backend Development' },
    },
    {
      value: 'UI/UX-Design',
      label: 'UI/UX Design',
      data: { color: 'white', name: 'UI/UX Design' },
    },
    {
      value: 'Data-Science',
      label: 'Data Science',
      data: { color: 'white', name: 'Data Science' },
    },
    {
      value: 'Cyber-Security',
      label: 'Cyber Security',
      data: { color: 'white', name: 'Cyber Security' },
    },
    {
      value: 'SEO-Optimization',
      label: 'SEO Optimization',
      data: { color: 'white', name: 'SEO Optimization' },
    },
    {
      value: 'Graphics-Design',
      label: 'Graphics Design',
      data: { color: 'white', name: 'Graphics Design' },
    },
    {
      value: 'Digital-Marketing',
      label: 'Digital Marketing',
      data: { color: 'white', name: 'Digital Marketing' },
    },
    {
      value: 'SEM-Optimization',
      label: 'SEM-Optimization',
      data: { color: 'white', name: 'SEM Optimization' },
    },
    {
      value: 'Content-Management-System',
      label: 'CMS Management',
      data: { color: 'white', name: 'CMS Management' },
    },
    {
      value: 'Mobile-App-Development',
      label: 'Mobile App Development',
      data: { color: 'white', name: 'Mobile App Development' },
    },
    {
      value: 'Cloud-DevOps-Mastery',
      label: 'Cloud & DevOps Mastery',
      data: { color: 'white', name: 'Cloud & DevOps Mastery' },
    },
  ];

}
