export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { label: "Happy Clients", value: 120, suffix: "+" },
  { label: "Companies Served", value: 60, suffix: "+" },
  { label: "Projects Delivered", value: 180, suffix: "+" },
  { label: "Years of Expertise", value: 10, suffix: "+" },
];

export const skills = [
  { label: "Software Development", value: 92 },
  { label: "App Development", value: 90 },
  { label: "Web Development", value: 92 },
  { label: "Artificial Intelligence", value: 95 },
];

export const services = [
  {
    title: "Software Development",
    description:
      "Custom, scalable software engineered around how your business actually operates, from architecture to launch.",
  },
  {
    title: "Web Development",
    description:
      "High-performance web platforms built on modern frameworks with a relentless focus on speed and conversion.",
  },
  {
    title: "Analytic Solutions",
    description:
      "Turn raw data into decisions with dashboards and pipelines that surface the signal inside the noise.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Resilient cloud infrastructure, CI/CD automation, and observability that scales with zero drama.",
  },
  {
    title: "Product & Design",
    description:
      "End-to-end product design that balances brand, usability, and business goals from wireframe to pixel.",
  },
  {
    title: "Data Center",
    description:
      "24/7 dedicated infrastructure support to keep critical systems fast, secure, and always online.",
  },
];

export const techStackRow1 = [
  "aws", "react", "nextdotjs", "typescript", "nodedotjs", "tailwindcss", "mongodb", "postgresql", "docker",
];

export const techStackRow2 = [
  "graphql", "redis", "firebase", "angular", "vuedotjs", "laravel", "apachekafka", "googlecloud", "kubernetes",
];

export const process = [
  {
    step: "01",
    title: "Requirement Analysis",
    description:
      "We thoroughly understand your business needs, gather detailed requirements, and define scope for a clear roadmap.",
  },
  {
    step: "02",
    title: "Design & Planning",
    description:
      "Comprehensive designs, architectures, and project plans ensuring scalability, security, and alignment with your goals.",
  },
  {
    step: "03",
    title: "Development",
    description:
      "Cutting-edge technologies and engineering best practices build robust software tailored to your specification.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description:
      "Rigorous QA ensures reliability. We handle seamless deployment and provide ongoing support post-launch.",
  },
];

export const servicesFull = [
  {
    slug: "app-development",
    icon: "smartphone",
    title: "App Development",
    description:
      "Comprehensive mobile application development services creating native, hybrid, and cross-platform apps for iOS and Android with modern technologies and best practices.",
  },
  {
    slug: "web-development",
    icon: "globe",
    title: "Web Development",
    description:
      "Custom web application development using modern frameworks and technologies to create responsive, user-friendly websites and web platforms.",
  },
  {
    slug: "ecommerce-solutions",
    icon: "shopping-cart",
    title: "E-Commerce Solutions",
    description:
      "Complete e-commerce platform development with secure payment gateways, inventory management, and user-friendly shopping experiences to drive online sales.",
  },
  {
    slug: "cloud-devops",
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Comprehensive cloud migration, infrastructure automation, and DevOps practices to accelerate development cycles and improve deployment reliability.",
  },
  {
    slug: "real-estate",
    icon: "building",
    title: "Real Estate Management Solutions",
    description:
      "Comprehensive property management solutions to streamline real estate operations and enhance tenant experiences.",
  },
  {
    slug: "lms-education",
    icon: "graduation-cap",
    title: "LMS & Education Solutions",
    description:
      "Comprehensive learning management systems and educational technology solutions for modern education.",
  },
  {
    slug: "healthcare",
    icon: "heart-pulse",
    title: "Healthcare Management Systems",
    description:
      "Integrated healthcare solutions to improve patient care and streamline medical practice operations.",
  },
  {
    slug: "ai-automation",
    icon: "bot",
    title: "AI-Powered Automation",
    description:
      "Leverage artificial intelligence to automate processes, enhance decision-making, and drive business growth.",
  },
  {
    slug: "iot-apps",
    icon: "cpu",
    title: "IOT Apps",
    description:
      "Innovative Internet of Things solutions to connect devices, collect data, and enable smart automation.",
  },
  {
    slug: "product-design",
    icon: "pen-tool",
    title: "Product & Design",
    description:
      "Comprehensive product design services including UI/UX design, user research, prototyping, and brand identity to create intuitive and engaging digital products.",
  },
  {
    slug: "data-center",
    icon: "server",
    title: "Data Center",
    description:
      "Enterprise-grade data center solutions providing secure hosting, colocation, disaster recovery, and 24/7 monitoring for critical business infrastructure.",
  },
  {
    slug: "erp-crm",
    icon: "database",
    title: "ERP & CRM Solutions",
    description:
      "Comprehensive ERP and CRM solutions to streamline business operations, enhance customer relationships, and improve decision-making through integrated systems.",
  },
];

export const servicesProcess = [
  {
    step: "01",
    title: "Consultation & Assessment",
    description:
      "We begin with a thorough consultation to understand your requirements, assess your current infrastructure, and identify the best solutions for your business needs.",
  },
  {
    step: "02",
    title: "Proposal & Planning",
    description:
      "Our team develops a detailed proposal with project scope, timeline, and cost estimates. We create a comprehensive plan outlining deliverables and milestones.",
  },
  {
    step: "03",
    title: "Implementation & Development",
    description:
      "Our skilled developers and engineers execute the project using industry best practices, ensuring quality, security, and scalability throughout the development process.",
  },
  {
    step: "04",
    title: "Testing & Deployment",
    description:
      "Rigorous testing ensures the solution meets all requirements. We handle seamless deployment and provide training, documentation, and ongoing support.",
  },
];

export const projects = [
  {
    slug: "shoeto",
    name: "Shoeto",
    category: "E-Commerce",
    description: "A stylish, comfortable footwear shopping destination for every occasion.",
    image: "/projects/shoeto.png",
    featured: true,
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    duration: "7 months",
  },
  {
    slug: "aura-cart-store",
    name: "Aura Cart Store",
    category: "E-Commerce",
    description: "Premium multi-category storefront with fast shipping and easy returns.",
    image: "/projects/auracart.png",
    techStack: ["React", "Node.js", "MongoDB"],
    duration: "4 months",
  },
  {
    slug: "shop-n-hop",
    name: "Shop 'N Hop App",
    category: "Mobile App",
    description: "Discover deals and track purchases with a personalized shopping experience.",
    image: "/projects/pop.png",
    techStack: ["Vue.js", "Express", "PostgreSQL"],
    duration: "3 months",
  },
  {
    slug: "find-here",
    name: "Find-Here App",
    category: "Web Application",
    description: "Fast, reliable location search for businesses, services, and places nearby.",
    image: "/projects/findhere.png",
    techStack: ["React", "D3.js", "Node.js"],
    duration: "5 months",
  },
  {
    slug: "skill-orbit",
    name: "Skill Orbit",
    category: "Education",
    description: "Personalized learning paths with expert-led courses and resources.",
    image: "/projects/skillorbit.png",
    techStack: ["Angular", "Spring Boot", "AWS"],
    duration: "6 months",
  },
  {
    slug: "is-startup",
    name: "Is Startup",
    category: "Startup Platform",
    description: "Discover, track, and connect with innovative startups and funding trends.",
    image: "/projects/isstartup.png",
    techStack: ["React Native", "Firebase", "Node.js"],
    duration: "4 months",
  },
  {
    slug: "kidezz",
    name: "Kidezz",
    category: "E-Commerce",
    description: "A fun, safe platform for kids to learn, play, and grow.",
    image: "/projects/kidezz.png",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    duration: "7 months",
  },
  {
    slug: "dhahween",
    name: "Dhahween",
    category: "Food Delivery",
    description: "An innovative platform connecting talents, creativity, and opportunity.",
    image: "/projects/dhahween.png",
    techStack: ["React", "Node.js", "MongoDB"],
    duration: "5 months",
  },
];

export const articles = [
  {
    tag: "Web Development",
    date: "15 Jan 2026",
    title: "The Future of React Development: Best Practices for 2026",
    excerpt:
      "Discover the latest trends and techniques in React development that help you build more efficient, scalable applications.",
  },
  {
    tag: "Cloud Computing",
    date: "22 Jan 2026",
    title: "Cloud Migration Strategies: Moving Your Business to the Cloud",
    excerpt:
      "Effective strategies for migrating existing applications to cloud platforms while minimizing downtime.",
  },
  {
    tag: "Mobile Development",
    date: "28 Jan 2026",
    title: "Mobile App Security: Protecting Users in a Digital World",
    excerpt:
      "Essential security measures and best practices for building secure mobile applications that protect user data.",
  },
];

export const testimonials = [
  { quote: "AlphaSoft's data analytics platform revolutionized our decision-making process. We now have real-time insights that drive our business forward.", name: "Latif Khan", role: "Data Scientist, InsightCorp" },
  { quote: "AlphaSoft delivered our e-commerce platform on time and exceeded expectations. Their expertise in modern web technologies transformed our business operations.", name: "Ahmed Rahman", role: "CTO, TechStart Solutions" },
  { quote: "Working with AlphaSoft was a game-changer for our mobile app development. Their attention to detail resulted in a seamless user experience.", name: "Ali Raza", role: "Product Manager, InnovateCorp" },
  { quote: "The custom software solution AlphaSoft built for us significantly improved workflow efficiency. Their support team is always responsive.", name: "Fatima Khan", role: "Operations Director, DataFlow Inc" },
  { quote: "AlphaSoft's expertise in cloud migration helped us scale seamlessly. Their strategic approach saved us time and resources.", name: "Aisha Ahmed", role: "IT Manager, GlobalTech" },
  { quote: "AlphaSoft's team provided exceptional UI/UX design and development services. Our client satisfaction increased dramatically.", name: "Zara Malik", role: "Marketing Director, BrandBoost" },
];

export const contact = {
  phone: "+92 370 4857471",
  whatsapp: "https://wa.me/923704857471",
  email: "alphasoft360@gmail.com",
  location: "Main Pakavenue Road, Sahiwal, 57000, Pakistan",
  hours: "Available 24/7",
};

export const footerLinks = {
  company: [
    { label: "About", href: "/about" },
    { label: "Our Team", href: "/team" },
    { label: "Careers", href: "/careers" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    { label: "Web Development", href: "/services" },
    { label: "Mobile Development", href: "/services" },
    { label: "Cloud Solutions", href: "/services" },
    { label: "AI & Machine Learning", href: "/services" },
    { label: "UI/UX Design", href: "/services" },
    { label: "DevOps", href: "/services" },
    { label: "Custom Software", href: "/services" },
  ],
  resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Case Studies", href: "/projects" },
    { label: "FAQs", href: "/faqs" },
    { label: "Support", href: "/support" },
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
};

export const footerTech = [
  "react", "nextdotjs", "nodedotjs", "laravel", "python", "aws", "docker", "kubernetes",
];

export const aboutStory = {
  eyebrow: "About Us",
  heading: "Empowering business growth through innovative technology",
  paragraphs: [
    "With extensive, proven expertise in software development, our team excels in delivering high-performance web applications, IoT solutions, and seamless API integrations for clients across the globe. At our core, we prioritize innovation, scalability, and user-focused design — ensuring every digital product we create drives measurable results and long-term success for our partners.",
    "We stand firmly against complacency and compromise, driven by the belief that true progress emerges from clarity, integrity, and purpose. In a world often distracted by short-term gains, we remain focused on creating lasting impact through dedication, innovation, and thoughtful execution. Our vision isn't built on convenience — it's built on commitment: a commitment to excellence, continuous growth, and doing what's right, even when it's not easy.",
  ],
};

export const values = [
  {
    title: "Innovation",
    description: "We build with modern tools and forward-looking architecture, never settling for the easy, outdated way.",
  },
  {
    title: "Integrity",
    description: "Clarity, honesty, and purpose guide every client relationship — even when the easy path would be simpler.",
  },
  {
    title: "Excellence",
    description: "Every product we ship is judged against one standard: measurable, long-term results for the business behind it.",
  },
  {
    title: "Growth",
    description: "We treat every engagement as a partnership, committed to continuous improvement long after launch day.",
  },
];

export const team = [
  { name: "M Awais", role: "Founder & Chief Executive Officer (CEO)", image: "/team/awais.jpeg" },
  // { name: "Saggar Farid", role: "Chief Operations Officer (COO)", image: "/team/saggar.png" },
  { name: "Maroof Sultan", role: "Software Engineer", image: "/team/maroof.jpg" },
  { name: "Muhammad Shahbaz", role: "Software Engineer", image: "/team/shahbaz.jpg" },
  { name: "Muazam Mughal", role: "Software Engineer", image: "/team/muazam.jpg" },
];

export const socials = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "GitHub", href: "#", icon: "github" },
  { label: "X (Twitter)", href: "#", icon: "x" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
  { label: "YouTube", href: "#", icon: "youtube" },
];
