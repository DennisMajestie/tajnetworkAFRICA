import { Injectable } from '@angular/core';
import { Select2Data } from 'ng-select2-component';

@Injectable({
  providedIn: 'root'
})
export class BlogDataService {

  blogData: any = [
    {
      id: "1",
      author: "TechCrunch",
      title: "Meta’s AI Research Lab Introduces Revolutionary Image Generation Model",
      caption: "Meta unveils advanced AI model.",
      text1: "Meta’s AI research lab has announced a breakthrough in image generation technology with their new model, LumaGen. This model produces highly detailed images from simple text prompts, advancing AI's capabilities in creative tasks.",
      text2: "Unlike its predecessors, LumaGen integrates both style and subject context, making it ideal for industries like entertainment, e-commerce, and graphic design. Early demos have showcased its ability to generate photorealistic scenes with intricate details.",
      text3: "Meta plans to roll out LumaGen in phases, initially for academic and corporate use, before potentially integrating it into consumer products. This innovation sets the stage for new AI-driven visual tools in 2024 and beyond.",
      img: "assets/images/blog/meta.jpg",
      date: "2024-12-02"
    },

    {
      id: "2",
      author: "Financial Times",
      title: "European AI Specialist Helsing Unveils First Attack Drone",
      caption: "Helsing launches new AI drone.",
      text1: "Helsing, a European defense tech company, has launched the HX-2 drone, a new attack drone designed for autonomous operations. This marks the company's entry into the growing market for AI-powered weaponry.",
      text2: "The HX-2 has already seen deployment in Ukraine, highlighting its effectiveness in real-world conflict zones. It features advanced navigation systems, enhanced targeting capabilities, and a modular design that allows for diverse payloads.",
      text3: "Helsing is also marketing the HX-2 to NATO allies, emphasizing its role in modernizing defense strategies and reducing reliance on traditional human-operated systems.",
      img: "assets/images/blog/drone.jpg",
      date: "2024-12-02"
    },
    {
      id: "3",
      author: "New York Post",
      title: "Amazon Cyber Monday is Here - Shop the 171+ Best Deals, Updated Live Today",
      caption: "Amazon Cyber Monday sales soar.",
      text1: "Amazon Cyber Monday 2024 is in full swing, presenting over 170 deals on popular products like Apple AirPods Pro 2 and Samsung Galaxy devices. Customers are flocking to take advantage of these limited-time discounts.",
      text2: "This year's event includes deep discounts on home appliances, tech gadgets, and beauty products. Deals like the Dyson V15 vacuum at $150 off have attracted significant attention.",
      text3: "Amazon promises lightning deals that refresh hourly, ensuring customers can find new bargains throughout the day. These deals are expected to drive record-breaking sales during the holiday season.",
      img: "assets/images/blog/amazon.jpg",
      date: "2024-12-02"
    },



  ];


  servicesData: any = [

    {
      id: 1,
      service: 'CRM & ERP Implementation',
      intro: 'Optimize your business operations with our CRM & ERP solutions.',
      caption: 'Efficiency and seamless integration.',
      img: "assets/images/taj/service-details/erp2.jpg"
    },
    {
      id: 2,
      service: 'Chatbot Development',
      intro: 'Enhance customer engagement with responsive chatbots.',
      caption: 'Smarter customer interactions.',
      img: "assets/images/taj/service-details/chatbot.jpg"
    },
    {
      id: 3,
      service: 'Software Development',
      intro: 'Custom software designed for your unique business needs.',
      caption: 'Innovative solutions for growth.',
      img: "assets/images/taj/service-details/SD2.jpg"
    },
    {
      id: 4,
      service: 'Mentorship Program',
      intro: 'Empowering aspiring tech professionals with expert guidance.',
      caption: 'Guidance for tech excellence.',
      img: "assets/images/taj/service-details/mentorship2.jpg"
    },
    {
      id: 5,
      service: 'Website Development',
      intro: 'Create stunning websites that elevate your brand.',
      caption: 'Building your digital presence.',
      img: "assets/images/taj/service-details/web-development2.jpg"
    },
    {
      id: 6,
      service: 'IT Consultancy',
      intro: 'Strategic guidance for digital transformation.',
      caption: 'Smarter IT decisions for success.',
      img: "assets/images/taj/service-details/Consultancy2.jpg"
    },
    {
      id: 7,
      service: 'SEO Optimization',
      intro: 'Boost your online visibility and traffic.',
      caption: 'Get found online, grow your business.',
      img: "assets/images/taj/service-details/seo2.jpg"
    },
    {
      id: 8,
      service: 'Data Analysis & Insights',
      intro: 'Unlock actionable insights from your data.',
      caption: 'Turning data into opportunity.',
      img: "assets/images/taj/service-details/Data_Analytics2.jpg"
    },
    {
      id: 9,
      service: 'Cyber Security',
      intro: 'Protect your assets with robust cybersecurity solutions.',
      caption: 'Defend your business against threats.',
      img: "assets/images/taj/service-details/Cybersecurity2.jpg"
    },
    {
      id: 10,
      service: 'Mobile App Development',
      intro: 'Develop intuitive mobile apps for any platform.',
      caption: 'Mobile apps for your business.',
      img: "assets/images/taj/service-details/mobile2.jpg"
    },
    {
      id: 11,
      service: 'Web App Development',
      intro: 'Web apps built for performance and scalability.',
      caption: 'Powerful web apps for your needs.',
      img: "assets/images/taj/service-details/web2.jpg"
    },
    {
      id: 12,
      service: 'Digital Marketing',
      intro: 'Reach your audience with effective marketing strategies.',
      caption: 'Drive engagement and grow online.',
      img: "assets/images/taj/service-details/digital2.jpg"
    },
    {
      id: 13,
      service: 'Website Hosting',
      intro: 'Reliable hosting solutions for your website.',
      caption: 'Secure, fast, and reliable hosting.',
      img: "assets/images/taj/service-details/hosting2.jpg"
    },
    {
      id: 14,
      service: 'UI/UX Design',
      intro: 'Design user-friendly interfaces for all platforms.',
      caption: 'Create memorable user experiences.',
      img: "assets/images/taj/service-details/uiux2.jpg"
    },
    {
      id: 15,
      service: 'SEM Optimization',
      intro: 'Maximize your ad performance with SEM strategies.',
      caption: 'Get better ROI with optimized ads.',
      img: "assets/images/taj/service-details/sem2.jpg"
    },
    {
      id: 16,
      service: 'Payment Gateway Integration',
      intro: 'Simplify transactions with secure payment gateways.',
      caption: 'Seamless payment integration.',
      img: "assets/images/taj/service-details/payment.jpg"
    },

    {
      id: 17,
      service: 'Maintenance & Support Services',
      intro: 'Ongoing support and maintenance for system stability.',
      caption: 'Ensuring your systems run smoothly.',
      img: "assets/images/taj/service-details/mss2.jpg"
    },

    {
      id: 18,
      service: 'Content Marketing',
      intro: 'Engage your audience with creative content strategies.',
      caption: 'Content that drives results.',
      img: "assets/images/taj/service-details/content2.jpg"
    },
    {
      id: 19,
      service: 'Social Media Management',
      intro: 'Enhance your online presence with strategic management.',
      caption: 'Grow your brand on social media.',
      img: "assets/images/taj/service-details/smm2.jpg"
    },
    {
      id: 20,
      service: 'Email Marketing',
      intro: 'Reach your audience with personalized email campaigns.',
      caption: 'Emails that engage and convert.',
      img: "assets/images/taj/service-details/email.jpg"
    },
    {
      id: 21,
      service: 'Cloud Hosting Solutions',
      intro: 'Scalable and secure cloud hosting for businesses.',
      caption: 'Reliable cloud hosting solutions.',
      img: "assets/images/taj/service-details/cloud-hosting2.jpg"
    },
    {
      id: 22,
      service: 'Business Process Automation Consultation',
      intro: 'Streamline operations with automated solutions.',
      caption: 'Efficiency through automation.',
      img: "assets/images/taj/service-details/automation2.jpg"
    },
    {
      id: 23,
      service: 'Full Stack Web Development Course',
      intro: 'Master the art of building modern, scalable web applications from scratch.',
      caption: 'Become a pro full stack developer.',
      img: "assets/images/taj/service-details/fullstack-course.png"
    },
    {
      id: 24,
      service: 'Cloud Infrastructure & DevOps Mastery',
      intro: 'Learn to design and manage resilient cloud systems using industry leading tools.',
      caption: 'Scale your future with Cloud and DevOps.',
      img: "assets/images/taj/service-details/cloud-course.png"
    }

  ];

  sliderContent = [
    {
      bgImage: "assets/images/taj/homeslider/slider1.jpg",
      sliderTitle: "Innovation",
      sliderTitle2: "At Its Core",
      sliderText: "We specialize in delivering cutting-edge software solutions tailored to meet your unique needs.",
      sliderText2: "Our innovative approach ensures businesses stay ahead in today’s fast-evolving digital landscape"
    },


    {
      bgImage: "assets/images/taj/homeslider/slider3.jpg",
      sliderTitle: "Empowering Growth",
      sliderTitle2: "Through Technology",
      sliderText: "From small startups to large enterprises, we empower organizations to unlock their full potential with robust,",
      sliderText2: "scalable, and efficient software solutions.  At TAJ Network Africa, your success is our mission."
    },

    {
      bgImage: "assets/images/taj/homeslider/slider7.jpg",
      sliderTitle: "Building Tomorrow, ",
      sliderTitle2: "Today!",
      sliderText: "We are not just creating software; we are crafting solutions that shape the future.",
      sliderText2: "Let’s build a smarter, more connected tomorrow together."
    },

  ];

  data: Select2Data = [
    {
      value: 'crm',
      label: 'CRM & ERP Implementation',
      data: { color: 'white', name: 'CRM & ERP Implementation' },
    },
    {
      value: 'chatbot-development',
      label: 'Chatbot Development',
      data: { color: 'white', name: 'Chatbot Development' },
    },
    {
      value: 'software-development',
      label: 'Software Development',
      data: { color: 'white', name: 'Software Development' },
    },
    {
      value: 'mentorship-program',
      label: 'Mentorship Program',
      data: { color: 'white', name: 'Mentorship Program' },
    },
    {
      value: 'website-development',
      label: 'Website Development',
      data: { color: 'white', name: 'Website Development' },
    },
    {
      value: 'it-consultancy',
      label: 'IT Consultancy',
      data: { color: 'white', name: 'IT Consultancy' },
    },
    {
      value: 'seo-optimization',
      label: 'SEO Optimization',
      data: { color: 'white', name: 'SEO Optimization' },
    },
    {
      value: 'data-analysis',
      label: 'Data Analysis & Insights',
      data: { color: 'white', name: 'Data Analysis & Insights' },
    },
    {
      value: 'cyber-security',
      label: 'Cyber Security',
      data: { color: 'white', name: 'Cyber Security' },
    },
    {
      value: 'mobile-app-development',
      label: 'Mobile App Development',
      data: { color: 'white', name: 'Mobile App Development' },
    },
    {
      value: 'web-app-development',
      label: 'Web App Development',
      data: { color: 'white', name: 'Web App Development' },
    },
    {
      value: 'digital-marketing',
      label: 'Digital Marketing',
      data: { color: 'white', name: 'Digital Marketing' },
    },
    {
      value: 'website-hosting',
      label: 'Website Hosting',
      data: { color: 'white', name: 'Website Hosting' },
    },
    {
      value: 'ui-ux-design',
      label: 'UI/UX Design',
      data: { color: 'white', name: 'UI/UX Design' },
    },
    {
      value: 'sem-optimization',
      label: 'SEM Optimization',
      data: { color: 'white', name: 'SEM Optimization' },
    },
    {
      value: 'payment-gateway-integration',
      label: 'Payment Gateway Integration',
      data: { color: 'white', name: 'Payment Gateway Integration' },
    },
    {
      value: 'business-process-automation',
      label: 'Business Process Automation Consultation',
      data: { color: 'white', name: 'Business Process Automation Consultation' },
    },
    {
      value: 'content-marketing',
      label: 'Content Marketing',
      data: { color: 'white', name: 'Content Marketing' },
    },
    {
      value: 'social-media-management',
      label: 'Social Media Management',
      data: { color: 'white', name: 'Social Media Management' },
    },
    {
      value: 'email-marketing',
      label: 'Email Marketing',
      data: { color: 'white', name: 'Email Marketing' },
    },
    {
      value: 'cloud-hosting-solutions',
      label: 'Cloud Hosting Solutions',
      data: { color: 'white', name: 'Cloud Hosting Solutions' },
    },
    {
      value: 'maintenance-support-services',
      label: 'Maintenance & Support Services',
      data: { color: 'white', name: 'Maintenance & Support Services' },
    },
    {
      value: 'fullstack-course',
      label: 'Full Stack Web Development Course',
      data: { color: 'white', name: 'Full Stack Web Development Course' },
    },
    {
      value: 'cloud-devops-mastery',
      label: 'Cloud Infrastructure & DevOps Mastery',
      data: { color: 'white', name: 'Cloud Infrastructure & DevOps Mastery' },
    },
    {
      value: 'Training',
      label: 'Training',
      data: { color: 'white', name: 'Training' },
    },



  ];

  techUse: any = [
    { img: "assets/images/brand/angular.png" },
    { img: "assets/images/brand/firebase.png" },
    { img: "assets/images/brand/node.png" },
    { img: "assets/images/brand/php.png" },
    { img: "assets/images/brand/python.png" },
    { img: "assets/images/brand/sql.png" },
    { img: "assets/images/brand/bootstrap.png" },
    { img: "assets/images/brand/office.png" },
    { img: "assets/images/brand/typescript.png" },
    { img: "assets/images/brand/ionic.png" },
    { img: "assets/images/brand/fluterwave.png" },


  ]


  constructor() { }


  newData() {
    return this.blogData;
  }

  getServices() {
    return this.servicesData;
  }

  getSliderContent() {
    return this.sliderContent;
  }


}
