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
    slug: "shoe-store",
    name: "Shoeto",
    category: "E-Commerce",
    description: "A stylish, comfortable footwear shopping destination for every occasion.",
    image: "/projects/shoeto.png",
    featured: true,
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    duration: "7 months",
  },
  {
    slug: "ecommerce-platform",
    name: "Aura Cart Store",
    category: "E-Commerce",
    description: "Premium multi-category storefront with fast shipping and easy returns.",
    image: "/projects/auracart.png",
    techStack: ["React", "Node.js", "MongoDB"],
    duration: "4 months",
  },
  {
    slug: "task-management-app",
    name: "Shop 'N Hop App",
    category: "Mobile App",
    description: "Discover deals and track purchases with a personalized shopping experience.",
    image: "/projects/pop.png",
    techStack: ["Vue.js", "Express", "PostgreSQL"],
    duration: "3 months",
  },
  {
    slug: "home-accessories",
    name: "Find-Here App",
    category: "Web Application",
    description: "Fast, reliable location search for businesses, services, and places nearby.",
    image: "/projects/findhere.png",
    techStack: ["React", "D3.js", "Node.js"],
    duration: "5 months",
  },
  {
    slug: "learning-management-system",
    name: "Skill Orbit",
    category: "Education",
    description: "Personalized learning paths with expert-led courses and resources.",
    image: "/projects/skillorbit.png",
    techStack: ["Angular", "Spring Boot", "AWS"],
    duration: "6 months",
  },
  {
    slug: "IsStartup-app",
    name: "Is Startup",
    category: "Startup Platform",
    description: "Discover, track, and connect with innovative startups and funding trends.",
    image: "/projects/isstartup.png",
    techStack: ["React Native", "Firebase", "Node.js"],
    duration: "4 months",
  },
  {
    slug: "Kids-item-platform",
    name: "Kidezz",
    category: "E-Commerce",
    description: "A fun, safe platform for kids to learn, play, and grow.",
    image: "/projects/kidezz.png",
    techStack: ["Next.js", "Prisma", "PostgreSQL"],
    duration: "7 months",
  },
  {
    slug: "Jewelry-store",
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
  {
    quote: "AlphaSoft delivered our enterprise SaaS platform 3 weeks ahead of schedule. Their mastery of microservices and real-time data pipelines turned a complex migration into a massive success.",
    name: "Marcus Thorne",
    role: "VP of Engineering, CloudScale Systems (Austin, TX)",
  },
  {
    quote: "Working with AlphaSoft was a game changer for our mobile app. Their technical rigor, intuitive UI/UX design, and 24/7 responsiveness exceeded every expectation.",
    name: "Elena Rostova",
    role: "Chief Technology Officer, Veloce Digital (London, UK)",
  },
  {
    quote: "AlphaSoft's data analytics & cloud migration expertise allowed us to scale to over 2 million active users seamlessly without a single millisecond of downtime.",
    name: "David Miller",
    role: "Director of Product, NexaSphere Technologies (San Francisco, CA)",
  },
  {
    quote: "The custom e-commerce architecture AlphaSoft built tripled our checkout speed and boosted conversion rates by 38%. Their engineering standards are world-class.",
    name: "Sophia Van Der Berg",
    role: "Head of Innovation, Artisan Commerce (Amsterdam, Netherlands)",
  },
  {
    quote: "From API integrations to automated CI/CD pipelines, AlphaSoft's senior developers operate with exceptional precision and transparency. A trusted global partner.",
    name: "James Harrison",
    role: "VP of Technology, FinEdge Solutions (Sydney, Australia)",
  },
  {
    quote: "AlphaSoft's team transformed our legacy platform into a high-performance, modern web application. Client satisfaction and engagement soared overnight.",
    name: "Claire Dubois",
    role: "VP of Marketing & Brand, Omnia Group (Toronto, Canada)",
  },
  {
    quote: "AlphaSoft's cybersecurity and enterprise cloud infrastructure setup passed our strict compliance audits with flying colors. Truly elite technical talent.",
    name: "Liam O'Connor",
    role: "Head of Infrastructure, Apex Global Financial (Dublin, Ireland)",
  },
  {
    quote: "The IoT dashboard AlphaSoft built handles tens of thousands of telemetry data points per second with zero lag. Highly recommended for real-time engineering.",
    name: "Kenji Takahashi",
    role: "Lead Architect, Horizon Robotics (Tokyo, Japan)",
  },
  {
    quote: "AlphaSoft transformed our patient management app into an intuitive, ultra-fast platform. Their UI/UX team is exceptionally creative.",
    name: "Freja Lindqvist",
    role: "Product Director, Nordic HealthTech (Stockholm, Sweden)",
  },
  {
    quote: "We hired AlphaSoft for a full ERP & CRM modernization. Their team worked tirelessly to deliver an impeccably crafted platform on tight deadlines.",
    name: "Tariq Al-Mansoor",
    role: "Chief Information Officer, Falcon Ventures (Dubai, UAE)",
  },
  {
    quote: "AlphaSoft's AI & Machine Learning models automated our document processing pipeline, reducing manual overhead by over 70%.",
    name: "Chloe Zhang",
    role: "Senior Engineering Manager, CloudMatrix (Singapore)",
  },
  {
    quote: "From initial consultation to global deployment, AlphaSoft360 demonstrated incredible technical competence and total dedication to our vision.",
    name: "Beat Niederhauser",
    role: "Founder & CEO, Alpine Logistics (Zurich, Switzerland)",
  },
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
    "With extensive, proven expertise in software development, our team excels in delivering high-performance web applications, IoT solutions, and seamless API integrations for clients across the globe. At our core, we prioritize innovation, scalability, and user-focused design ensuring every digital product we create drives measurable results and long-term success for our partners.",
    "We stand firmly against complacency and compromise, driven by the belief that true progress emerges from clarity, integrity, and purpose. In a world often distracted by short-term gains, we remain focused on creating lasting impact through dedication, innovation, and thoughtful execution. Our vision isn't built on convenience it's built on commitment: a commitment to excellence, continuous growth, and doing what's right, even when it's not easy.",
  ],
};

export const values = [
  {
    title: "Innovation",
    description: "We build with modern tools and forward-looking architecture, never settling for the easy, outdated way.",
  },
  {
    title: "Integrity",
    description: "Clarity, honesty, and purpose guide every client relationship even when the easy path would be simpler.",
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
  { label: "LinkedIn", href: "https://www.linkedin.com/company/alphasoft360", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/alphasoft360", icon: "github" },
  { label: "X (Twitter)", href: "https://twitter.com/alphasoft360", icon: "x" },
];
