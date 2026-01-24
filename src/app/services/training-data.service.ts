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
      shortDescription: "Join our Frontend Mentorship program today and embark on a transformative journey that will empower you to build not just websites, but a successful future in tech. Your path to becoming a skilled Frontend developer starts here!",
      longDescription: "Our Frontend Development training program is designed to equip you with the knowledge and practical experience needed to build beautiful, interactive, and responsive websites. You’ll learn essential technologies like HTML, CSS, JavaScript, and frameworks such as React and Angular. This course will help you master modern web development techniques, ensuring you can create user-friendly interfaces and optimize websites for all devices.",
      features: [
        "Core Technologies",
        "Frameworks",
        "Responsive Design",
        "Version Control",
        "Project-Based Learning"
      ],
      images: "assets/images/courses/frontend.jpg"
    },
    {
      id: 2,
      title: "Backend Development",
      caption: "Building robust server-side applications that ensure efficient data handling, security, and reliable functionality.",
      shortDescription: "Master the art of backend development and learn to build scalable and secure server-side applications.",
      longDescription: "Our Backend Development training program provides in-depth knowledge of server-side programming. You'll learn how to design, build, and maintain robust applications that handle databases, authentication, and APIs. Technologies covered include Node.js, Express.js, Django, and databases like PostgreSQL and MongoDB.",
      features: [
        "Core Technologies",
        "Database Management",
        "API Development",
        "Authentication & Security",
        "Scalability & Performance"
      ],
      images: "assets/images/courses/backend.jpg"
    },
    {
      id: 3,
      title: "UI/UX Design",
      caption: "Designing intuitive, user-friendly interfaces that enhance engagement and create memorable digital experiences.",
      shortDescription: "Learn how to create seamless and engaging digital experiences through effective UI/UX design principles.",
      longDescription: "Our UI/UX Design program teaches you how to create visually appealing and user-friendly interfaces. You'll gain hands-on experience with wireframing, prototyping, and usability testing.",
      features: [
        "Design Tools",
        "Wireframing & Prototyping",
        "User Research",
        "Visual Design Principles",
        "Real-World Projects"
      ],
      images: "assets/images/courses/uiux.jpg"
    },
    {
      id: 4,
      title: "Data Science",
      caption: "Analyzing complex data to uncover insights and support data-driven decision-making for smarter business strategies.",
      shortDescription: "Gain the skills to extract meaningful insights from data and make informed business decisions.",
      longDescription: "Our Data Science course covers essential techniques for analyzing and visualizing data. Learn programming languages like Python and R, and explore data manipulation, machine learning, and AI applications.",
      features: [
        "Programming Languages",
        "Data Analysis Tools",
        "Machine Learning",
        "Big Data Technologies",
        "Data Visualization"
      ],
      images: "assets/images/courses/data-science.jpg"
    },
    {
      id: 5,
      title: "Cyber Security",
      caption: "Protecting digital assets with advanced security measures to defend against cyber threats and ensure data integrity.",
      shortDescription: "Learn to safeguard systems and networks from cyber threats in today's digital landscape.",
      longDescription: "Our Cyber Security course provides comprehensive knowledge of ethical hacking, penetration testing, and network security.",
      features: [
        "Security Fundamentals",
        "Ethical Hacking",
        "Encryption Techniques",
        "Cyber Threat Intelligence",
        "Compliance & Risk Management"
      ],
      images: "assets/images/courses/cyber-security.jpg"
    },
    {
      id: 6,
      title: "SEO Optimization",
      caption: "Improving website visibility on search engines to attract more organic traffic and increase reach.",
      shortDescription: "Master search engine optimization strategies to improve website rankings and visibility.",
      longDescription: "Our SEO Optimization course teaches effective techniques to enhance a website’s search engine ranking. Learn about keyword research, on-page and off-page SEO, technical SEO, and Google Analytics to improve web traffic and visibility.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Technical SEO",
        "Link Building",
        "SEO Tools"
      ],
      images: "assets/images/courses/seo.jpg"
    },
    {
      id: 7,
      title: "Digital Marketing",
      caption: "Implementing strategic online campaigns to grow brand presence, engage audiences, and drive conversions.",
      shortDescription: "Learn to create and execute digital marketing strategies that drive business growth.",
      longDescription: "This course covers digital marketing essentials, including social media marketing, email marketing, PPC campaigns, and content marketing. You’ll also learn about analytics and performance tracking.",
      features: [
        "Social Media Marketing",
        "Email Marketing",
        "PPC Advertising",
        "Content Marketing",
        "Analytics"
      ],
      images: "assets/images/courses/digital-marketing.jpg"
    },
    {
      id: 8,
      title: "Graphics Design",
      caption: "Creating visually captivating graphics that communicate messages effectively and strengthen brand identity.",
      shortDescription: "Master the art of graphic design and create stunning visual content.",
      longDescription: "Our Graphic Design course provides training in digital and print design, using tools like Adobe Photoshop, Illustrator, and CorelDRAW.",
      features: [
        "Design Software",
        "Brand Identity Design",
        "Print & Digital Media",
        "Motion Graphics",
        "Portfolio Development"
      ],
      images: "assets/images/courses/graphics-design.jpg"
    },
    {
      id: 9,
      title: "SEM Optimization",
      caption: "Enhancing paid search strategies to boost ad performance, increase ROI, and drive targeted traffic.",
      shortDescription: "Learn the ins and outs of Search Engine Marketing (SEM) to maximize ad performance.",
      longDescription: "This course covers Google Ads, keyword bidding strategies, audience targeting, and A/B testing for paid search campaigns.",
      features: [
        "Google Ads",
        "Keyword Bidding",
        "A/B Testing",
        "Audience Targeting",
        "Budget Management"
      ],
      images: "assets/images/courses/sem.jpg"
    },
    {
      id: 10,
      title: "Content Management System (CMS)",
      caption: "Streamlining content creation and organization to ensure easy updates and a well-maintained website.",
      shortDescription: "Learn how to manage and customize CMS platforms like WordPress and Joomla.",
      longDescription: "This course teaches how to build, customize, and manage websites using CMS platforms.",
      features: [
        "Platforms",
        "Customization",
        "SEO & Performance",
        "Speed optimization",
        "Security best practices"
      ],
      images: "assets/images/courses/cms.jpg"
    },
    {
      id: 11,
      title: "Mobile App Development",
      caption: "Creating high-performance cross-platform mobile applications for iOS and Android using modern frameworks.",
      shortDescription: "Master mobile engineering and build world-class apps that run natively on all mobile platforms.",
      longDescription: "Our Mobile Development course covers the full lifecycle of app creation. You'll learn frameworks like Flutter and React Native, focusing on performance optimization, native API integration, and publishing to App Store and Google Play.",
      features: [
        "Flutter & Dart",
        "React Native",
        "Mobile UI Patterns",
        "API Integration",
        "Store Deployment"
      ],
      images: "assets/images/courses/mobile.jpg"
    },
    {
      id: 12,
      title: "Cloud & DevOps Mastery",
      caption: "Managing enterprise cloud infrastructure and implementing CI/CD pipelines for automated software delivery.",
      shortDescription: "Become a Cloud Engineer and master the art of automated infrastructure and scalable deployments.",
      longDescription: "This advanced course focus on AWS, Azure, and Google Cloud. You'll learn Docker, Kubernetes, Terraform for IaC, and Jenkins/GitHub Actions for building robust CI/CD pipelines at scale.",
      features: [
        "AWS/Azure/GCP",
        "Docker & K8s",
        "Infrastructure as Code",
        "CI/CD Pipelines",
        "Cloud Security"
      ],
      images: "assets/images/courses/cloud-mastery.jpg"
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
      label: 'Content Management System (CMS)',
      data: { color: 'white', name: 'Content Management System (CMS)' },
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
