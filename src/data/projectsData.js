const projectsData = [
  // project 1
  {
    id: "ecommerce-platform",
    slug: "ecommerce-platform",
    title: "Aura Cart Store",
    description: "Aura Cart Store is your ultimate destination for premium, high-quality products, offering a seamless online shopping experience. With fast shipping, easy returns, and an intuitive interface, we aim to deliver a hassle-free shopping journey.",
    image: "/projects/auracart.png",
    techStack: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "TailwindCSS"],
    features: [
      "User authentication and authorization",
      "Product catalog with advanced search and filters",
      "Shopping cart and wishlist functionality",
      "Secure payment processing with Stripe",
      "Real-time order tracking and management",
      "Admin dashboard with full control over products and orders",
      "Real-time inventory updates",
      "Automated email notifications for users"
    ],
    overview: [
      "Aura Cart Store is a cutting-edge e-commerce platform built with modern web technologies. The platform provides a seamless and secure shopping experience for customers, while offering powerful tools for administrators to manage products, orders, and customers efficiently.",
      "Responsive Design: The platform is designed to provide a flawless shopping experience across all devices",
      "Performance & Security: Optimized for fast load times and built with robust security measures to protect user data and transactions.",
      "Scalable Architecture: The system is built to handle thousands of concurrent users, with efficient order processing and real-time inventory updates."
    ],
    challenges: [
      "Ensuring real-time inventory synchronization across multiple devices",
      "Optimizing database queries for fast, efficient product searches",
      "Maintaining PCI compliance for secure payment processing",
      "Designing a responsive and mobile-friendly user interface for all screen sizes"
    ],
    solutions: [
      "Real-time updates: Utilized WebSocket connections to keep inventory and order data synchronized across devices.",
      "Database Optimization: Implemented indexing and caching strategies to optimize search speed and system performance.",
      "PCI Compliance: Integrated Stripe as the payment processor, ensuring secure and compliant transactions.",
      "Responsive Design: Applied mobile-first design principles using TailwindCSS to ensure a seamless experience on all screen sizes."
    ],
    duration: "4 months",
    category: "E-Commerce"
  },
  // project 2
  {
    id: "task-management-app",
    slug: "task-management-app",
    title: "Shop 'N Hop App",
    description: "Shop 'N Hop App: Discover amazing deals, track your purchases, and shop effortlessly on-the-go. Your personalized shopping experience, anytime, anywhere!",
    image: "/projects/pop.png",
    techStack: ["Vue.js", "Express", "PostgreSQL", "Socket.io", "JWT", "Vuex"],
    features: [
      "Real-time collaboration",
      "Drag-and-drop task boards",
      "Team member assignments",
      "File attachments",
      "Time tracking",
      "Progress analytics",
      "Notifications and reminders",
      "Calendar integration"
    ],
    overview: [
      "A powerful task management tool designed for teams to collaborate seamlessly on projects with real-time updates and detailed tracking.",
      "The app features an intuitive interface with Kanban boards, Gantt charts, and comprehensive analytics to monitor project progress.",
      "Optimized for team productivity, the app includes automated workflows, custom fields, and integration with popular tools."
    ],
    challenges: [
      "Implementing real-time synchronization across multiple users",
      "Handling complex permission systems",
      "Optimizing performance for large datasets",
      "Creating an intuitive drag-and-drop interface"
    ],
    solutions: [
      "Implemented WebSocket connections with Socket.io for real-time synchronization",
      "Created a role-based access control (RBAC) system to manage user permissions",
      "Used virtual scrolling and lazy loading to optimize performance for large datasets",
      "Utilized HTML5 drag-and-drop API with custom enhancements for a smooth user interface"
    ],
    duration: "3 months",
    category: "Mobile App"
  },
  // project 3
  {
    id: "home-accessories",
    slug: "home-accessories",
    title: "Find-Here App",
    description: "Find-Here App is your ultimate tool for locating businesses, services, and places near you. Fast, reliable, and user-friendly location search to meet all your needs.",
    image: "/projects/findhere.png",
    techStack: ["React", "D3.js", "Node.js", "MySQL", "Chart.js", "Material-UI"],
    features: [
      "Multi-platform integration",
      "Real-time analytics",
      "Scheduled posting",
      "Engagement tracking",
      "Competitor analysis",
      "Custom reports",
      "Team collaboration",
      "API integrations"
    ],
    overview: [
      "Find-Here App consolidates data from various platforms into a unified dashboard, helping users to easily locate businesses and services near them.",
      "With detailed analytics, content scheduling, and engagement tracking, users can enhance their social media presence effectively.",
      "AI-driven insights and customizable reports allow businesses to make data-driven decisions, improving their overall strategy."
    ],
    challenges: [
      "Integrating multiple social media APIs",
      "Processing large volumes of data",
      "Creating responsive data visualizations",
      "Implementing secure authentication with third-party services"
    ],
    solutions: [
      "Built modular API integration system",
      "Implemented data processing pipelines",
      "Used D3.js for custom visualizations",
      "Created OAuth 2.0 authentication flow"
    ],
    duration: "5 months",
    category: "Web Application"
  },
  // project 4
  {
    id: "learning-management-system",
    slug: "learning-management-system",
    title: "Skill Orbit",
    description: "Skill Orbit: Unlock your potential with personalized learning paths. Enhance your skills and grow professionally with expert-led courses and resources!",
    image: "/projects/skillorbit.png",
    techStack: ["Angular", "Spring Boot", "AWS", "MySQL", "WebRTC", "Bootstrap"],
    features: [
      "Video streaming platform",
      "Interactive quizzes and assignments",
      "Progress tracking",
      "Discussion forums",
      "Live video classes",
      "Certificate generation",
      "Mobile app support",
      "Payment integration"
    ],
    overview: [
      "Skill Orbit is a robust learning management system designed for educational institutions to effectively deliver online courses.",
      "The platform supports various content types, including video lectures, interactive quizzes, and live streaming sessions to engage learners.",
      "Built with scalability in mind, Skill Orbit ensures reliable performance and accessibility for thousands of students across devices."
    ],
    challenges: [
      "Implementing smooth video streaming",
      "Handling concurrent users during live sessions",
      "Designing an accessible and user-friendly interface",
      "Ensuring data security and compliance with privacy regulations"
    ],
    solutions: [
      "Utilized adaptive bitrate streaming via AWS to ensure smooth video playback",
      "Leveraged WebRTC technology to enable low-latency, real-time video sessions",
      "Adhered to WCAG 2.1 accessibility guidelines to provide a seamless experience for all users",
      "Implemented GDPR and FERPA compliance to ensure user data privacy and security"
    ],
    duration: "6 months",
    category: "Education"
  },
  // project 5
  {
    id: "IsStartup-app",
    slug: "IsStartup-app",
    title: "Is Startup",
    description: "Is Startup: Discover, track, and connect with innovative startups. Stay updated on trends, funding, and opportunities in the startup ecosystem!",
    image: "/projects/isstartup.png",
    techStack: ["React Native", "Firebase", "Node.js", "MongoDB", "Redux", "Expo"],
    features: [
      "Workout planning",
      "Nutrition tracking",
      "Progress analytics",
      "Social features",
      "Wearable integration",
      "Personalized recommendations",
      "Video exercise library",
      "Achievement system"
    ],
    overview: [
      "Is Startup is a comprehensive fitness tracking app that helps users achieve their health goals with personalized workout plans and nutrition guidance.",
      "Integrated with wearable devices, the app tracks activity levels and provides detailed analytics to monitor progress.",
      "Featuring social tools and gamification, the app ensures users stay motivated and engaged throughout their fitness journey."
    ],
    challenges: [
      "Integrating with various wearable devices",
      "Creating accurate calorie calculation algorithms",
      "Implementing offline functionality",
      "Ensuring data privacy and security"
    ],
    solutions: [
      "Developed a universal device integration layer to support various wearable technologies",
      "Collaborated with nutritionists to create accurate and reliable calorie calculation algorithms",
      "Implemented local data storage with sync capabilities for offline functionality",
      "Used end-to-end encryption to ensure data privacy and security for user information"
    ],
    duration: "4 months",
    category: "Startup Platform"
  },
  // project 6 
  {
    id: "Kids-Items-platform",
    slug: "Kids-item-platform",
    title: "Kidezz",
    description: "Kidezz: A fun, safe platform for kids to learn, play, and grow. Engaging activities, educational games, and interactive content for young minds!",
    image: "/projects/kidezz.png",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe", "TypeScript"],
    features: [
      "Property listings with advanced search",
      "Virtual property tours",
      "Mortgage calculator",
      "Agent matching system",
      "Document management",
      "Appointment scheduling",
      "Neighborhood insights",
      "Market analytics"
    ],
    overview: [
      "Kidezz is an all-in-one footwear shopping platform that seamlessly connects customers to a vast range of stylish, comfortable shoes.",
      "With advanced features like virtual try-ons, personalized shoe recommendations, and detailed product insights, Kidezz offers an unparalleled shopping experience.",
      "Built with modern web technologies for fast performance, a responsive interface, and a seamless experience across all devices."
    ],
    challenges: [
      "Creating a smooth virtual try-on experience",
      "Handling high-resolution image and video product displays",
      "Integrating payment processing securely",
      "Building a scalable system to manage large product catalogs"
    ],
    solutions: [
      "Implemented augmented reality (AR) for virtual try-ons",
      "Optimized image delivery with a content delivery network (CDN) for faster load times",
      "Integrated Stripe for secure payment processing",
      "Designed a scalable database with Prisma and PostgreSQL to handle extensive product catalogs"
    ],
    duration: "7 months",
    category: "E-Commerce"
  },
  // project 7
  {
    id: "Jewelry-store",
    slug: "Jewelry-store",
    title: "Dhahween",
    description: "Dhahween: An innovative platform connecting talents and opportunities. Discover, learn, and engage with a community that values creativity and innovation!",
    image: "/projects/dhahween.png",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "Google Maps", "Stripe"],
    features: [
      "Multi-restaurant support",
      "Real-time order tracking",
      "Driver management",
      "Route optimization",
      "Customer reviews",
      "Loyalty programs",
      "Push notifications",
      "Analytics dashboard"
    ],
    overview: [
      "Dhahween is a comprehensive food delivery platform that seamlessly connects restaurants, drivers, and customers in an efficient system.",
      "It features real-time order tracking, smart route optimization, and a streamlined ordering experience for customers.",
      "Built for scalability, Dhahween can manage thousands of orders simultaneously and offers powerful analytics to drive business growth."
    ],
    challenges: [
      "Implementing real-time order tracking",
      "Optimizing delivery routes for efficiency",
      "Managing high traffic during peak hours",
      "Ensuring food quality is maintained during delivery"
    ],
    solutions: [
      "Used WebSocket technology for real-time updates on order status",
      "Integrated Google Maps API for dynamic route optimization",
      "Built auto-scaling infrastructure to handle peak loads",
      "Developed a temperature tracking system to monitor food quality during transit"
    ],
    duration: "5 months",
    category: "Food Delivery"
  },
  // project 8
  {
    id: "Shoe-Store",
    slug: "shoe-store",
    title: "Shoeto",
    description: "Shoeto: Your ultimate shoe shopping destination. Explore a wide range of stylish, comfortable, and trendy footwear for every occasion!",
    image: "/projects/shoeto.png",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Mapbox", "Stripe", "TypeScript"],
    features: [
      "Property listings with advanced search",
      "Virtual property tours",
      "Mortgage calculator",
      "Agent matching system",
      "Document management",
      "Appointment scheduling",
      "Neighborhood insights",
      "Market analytics"
    ],
    overview: [
      "Shoeto is an all-in-one footwear shopping platform that seamlessly connects customers to a vast range of stylish, comfortable shoes.",
      "With advanced features like virtual try-ons, personalized shoe recommendations, and detailed product insights, Shoeto offers an unparalleled shopping experience.",
      "Built with modern web technologies for fast performance, a responsive interface, and a seamless experience across all devices."
    ],
    challenges: [
      "Creating a smooth virtual try-on experience",
      "Handling high-resolution image and video product displays",
      "Integrating payment processing securely",
      "Building a scalable system to manage large product catalogs"
    ],
    solutions: [
      "Implemented augmented reality (AR) for virtual try-ons",
      "Optimized image delivery with a content delivery network (CDN) for faster load times",
      "Integrated Stripe for secure payment processing",
      "Designed a scalable database with Prisma and PostgreSQL to handle extensive product catalogs"
    ],
    duration: "7 months",
    category: "E-Commerce"
  },
  {
  id: "rams-2-0-cmms",
  slug: "rams-2-0-cmms",
  title: "RAMS 2.0 – CMMS",
  description: "RAMS 2.0 is a specialized Computerized Maintenance Management System (CMMS) designed for industrial asset monitoring, maintenance management, and predictive maintenance. The platform combines asset hierarchy management, IoT sensor monitoring, work order automation, inventory management, and intelligent health analysis to help organizations improve equipment reliability and operational efficiency.",
  image: "/projects/rams2.png",
  techStack: [
    "Angular",
    "RxJS",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "MSSQL",
    "Knex.js",
    "JWT",
    "Passport.js",
    "Chart.js",
    "SCSS",
    "AWS",
    "Twilio"
  ],
  features: [
    "Hierarchical management of projects, plants, locations, assets, and components",
    "Work order creation, assignment, tracking, and completion",
    "Preventive maintenance scheduling based on intervals and sensor triggers",
    "Work request submission and conversion into maintenance work orders",
    "Historical tracking of completed maintenance tasks for auditing and reporting",
    "IoT sensor management for vibration, temperature, and RPM monitoring",
    "Real-time asset health monitoring through the CMMS dashboard",
    "Sensor data comparison across different time periods and assets",
    "Facility mapping for visualizing assets and sensor locations",
    "Spare parts inventory and stock-level management",
    "Vendor and external service provider management",
    "Maintenance part requisition and procurement workflows",
    "FFT-based vibration analysis for advanced equipment diagnostics",
    "Asset health scoring using combined sensor data",
    "Automated vibration and temperature threshold alerts",
    "IoT gateway battery and signal monitoring",
    "Multi-channel notifications through SMS and email",
    "Integration with specialized IoT servers for high-frequency sensor data processing"
  ],
  overview: [
    "RAMS 2.0 is a comprehensive industrial CMMS platform built to manage the complete lifecycle of industrial assets and maintenance operations. It provides a structured hierarchy from projects and plants down to individual assets and components, allowing maintenance teams to monitor equipment at a highly granular level.",
    "Operations & Maintenance: The platform centralizes work orders, preventive maintenance, work requests, and completed tasks, enabling teams to efficiently plan, assign, execute, and track maintenance activities.",
    "Intelligent IoT Monitoring: RAMS 2.0 integrates with specialized IoT servers to process vibration, temperature, and RPM sensor data. The platform transforms raw sensor readings into meaningful health insights and visual analytics.",
    "Predictive Maintenance: Advanced FFT vibration analysis and asset health scoring help identify abnormal equipment behavior and potential failures before they become major operational issues.",
    "Inventory & Supply Chain: Maintenance teams can manage spare parts, monitor stock levels, maintain vendor information, and submit requisitions for required components directly through the platform.",
    "Automated Alerting: Background monitoring services continuously evaluate sensor and gateway conditions. Threshold-based alerts can trigger immediate SMS and email notifications to maintenance teams.",
    "Scalable Architecture: High-frequency IoT data is processed through dedicated Node.js services before reaching the central backend, helping separate sensor processing workloads from the main application and reducing performance bottlenecks."
  ],
  challenges: [
    "Managing a complex industrial asset hierarchy across projects, plants, locations, assets, and components",
    "Processing and handling high-frequency IoT sensor data without impacting the performance of the main application",
    "Performing meaningful vibration analysis from raw sensor data for predictive maintenance",
    "Providing real-time monitoring and alerting for vibration, temperature, battery, and signal conditions",
    "Synchronizing and managing data across MongoDB and MSSQL databases",
    "Building dashboards capable of presenting large amounts of sensor and maintenance data in an understandable format",
    "Designing reliable maintenance workflows covering work requests, work orders, preventive maintenance, and completed tasks",
    "Maintaining accurate spare-parts inventory and procurement information across maintenance operations"
  ],
  solutions: [
    "Hierarchical Asset Management: Implemented a structured Project → Plant → Location → Asset → Component hierarchy to maintain clear relationships between industrial equipment and maintenance activities.",
    "IoT Data Processing: Introduced dedicated RioServer and TreonServer services to process high-frequency sensor data before forwarding relevant information to the central backend.",
    "Advanced Vibration Analysis: Integrated FFT data processing and analytical charts to help maintenance teams identify abnormal vibration patterns and potential equipment failures.",
    "Automated Monitoring: Developed background alerting processes that continuously monitor sensor thresholds, IoT gateway battery levels, and signal health.",
    "Multi-Channel Notifications: Integrated Twilio for SMS notifications and Nodemailer for email alerts, allowing maintenance teams to respond quickly to critical conditions.",
    "Data Management: Utilized MongoDB with Mongoose for application and IoT data while using MSSQL with Knex.js for enterprise-level data requirements.",
    "Visual Analytics: Implemented Chart.js-based dashboards and health charts to transform complex sensor readings into clear and actionable maintenance insights.",
    "Maintenance Automation: Built preventive maintenance workflows that support recurring schedules and sensor-triggered maintenance activities."
  ],
  duration: "Ongoing",
  category: "Industrial CMMS"
},
{
  id: "bulk-tshirts-ecommerce",
  slug: "bulk-tshirts-ecommerce",
  title: "BulkTshirtsSite.com",
  description: "BulkTshirtsSite.com is a wholesale e-commerce platform designed for bulk apparel distribution, offering products such as t-shirts, hoodies, caps, and workwear. The platform provides SKU-driven inventory management, wholesale pricing, category-based browsing, and streamlined cart and checkout workflows for high-volume apparel buyers.",
  image: "/projects/bulktshirt.png",
  techStack: [
    "PHP",
    "MySQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "Apache",
    "CMS"
  ],
  features: [
    "Wholesale and bulk pricing management",
    "SKU-driven product and inventory management",
    "Large-scale apparel product catalog",
    "Category-based product browsing and filtering",
    "Responsive product grid and catalog interface",
    "Product detail pages with SKU, images, sizes, and colors",
    "Session-based shopping cart functionality",
    "Automatic bulk pricing recalculation",
    "Customer billing and shipping checkout workflow",
    "Payment processing integration layer",
    "Order confirmation and checkout management",
    "Product search with SKU and product-based discovery",
    "Related product recommendations",
    "Contact and customer support inquiry system",
    "SEO-friendly category and product URL structure",
    "Metadata-driven product architecture",
    "GZIP compression and browser caching",
    "Optimized product image delivery",
    "HTTPS encryption across the platform",
    "Cookie-based cart persistence",
    "Server-level security and firewall protection"
  ],
  overview: [
    "BulkTshirtsSite.com is a traditional PHP-based wholesale e-commerce platform built specifically for bulk apparel distribution. The system supports a large product catalog containing t-shirts, hoodies, caps, workwear, and other wholesale clothing products.",
    "Wholesale E-Commerce: The platform is optimized for bulk purchasing workflows, allowing customers to browse products, select variations, manage quantities, and complete wholesale orders through a streamlined shopping experience.",
    "Product & Inventory Management: Products are organized around SKU-based identifiers and category structures, providing a consistent approach to inventory availability, product discovery, and catalog management.",
    "Catalog Experience: The frontend uses a lightweight HTML, CSS, and jQuery architecture to provide responsive product grids, category navigation, image-based browsing, filtering, and interactive shopping functionality.",
    "Cart & Checkout: Customers can add products to a session-based cart, update quantities, receive bulk pricing calculations, and proceed through billing, shipping, payment, and order confirmation workflows.",
    "SEO & Performance: The platform uses category-driven routing, product indexing, metadata-based product structures, GZIP compression, browser caching, optimized images, and lightweight JavaScript execution to support fast product discovery and page performance.",
    "Security & Infrastructure: The system operates over HTTPS with session-based authentication, cookie-managed cart persistence, server-level firewall protection, and standard input validation for customer-facing forms."
  ],
  challenges: [
    "Managing a large apparel catalog with SKU-based product identification and inventory availability",
    "Supporting wholesale customers with bulk quantities and tier-based pricing calculations",
    "Providing fast and intuitive product discovery across a large number of categories and products",
    "Maintaining a lightweight frontend architecture while supporting interactive shopping functionality",
    "Ensuring cart and pricing information remains consistent throughout the shopping session",
    "Optimizing product images and catalog pages for faster loading and improved user experience",
    "Maintaining reliable checkout and order processing within a traditional monolithic PHP architecture",
    "Creating an SEO-friendly product and category structure suitable for a wholesale e-commerce catalog"
  ],
  solutions: [
    "SKU-Based Catalog Management: Implemented a structured SKU-driven product architecture to organize apparel products, variations, and inventory availability efficiently.",
    "Wholesale Pricing: Integrated bulk pricing logic into the product and cart workflows so order quantities can be reflected in wholesale pricing calculations.",
    "Category-Based Discovery: Organized the catalog into dedicated product categories with filtering, pagination, navigation menus, and grid-based product displays.",
    "Lightweight Frontend: Utilized HTML5, CSS3, and jQuery to deliver interactive shopping functionality without the overhead of a large frontend framework.",
    "Session-Based Cart: Implemented PHP session and cookie-based mechanisms to maintain cart contents and customer shopping state during the browsing and checkout process.",
    "Performance Optimization: Applied GZIP compression, browser caching, optimized image delivery, and lightweight JavaScript execution to improve overall page performance.",
    "SEO Optimization: Structured category and product URLs with product-focused metadata and indexing mechanisms to improve search engine discoverability.",
    "Secure Transactions: Enabled HTTPS across the platform and implemented session handling, server-level protection, and standard form validation for customer interactions.",
    "Monolithic Architecture: Maintained a centralized PHP-based application architecture that handles routing, catalog logic, cart processing, checkout workflows, and database interactions within a unified system."
  ],
  duration: "Ongoing",
  category: "Wholesale E-Commerce"
},
{
  "id": "covid-19-virtual-check-in",
  "slug": "covid-19-virtual-check-in",
  "title": "COVID-19 Virtual Check-In",
  "description": "COVID-19 Virtual Check-In is a full-stack healthcare workflow management platform designed to streamline COVID-19 testing from patient registration and appointment scheduling to sample processing, result management, and secure result delivery. The system provides patients with a simple public-facing check-in experience while giving staff and administrators a centralized dashboard for managing registrations, testing locations, screening workflows, and results.",
  "image": "/projects/covid.png",
  "techStack": [
    "Angular 12",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "Passport.js",
    "JWT",
    "Socket.io",
    "Angular Material",
    "TailwindCSS",
    "SCSS",
    "Fuse Template",
    "Helmet",
    "CORS"
  ],
  "features": [
    "Multi-step COVID-19 patient registration workflow",
    "Patient personal information and contact management",
    "Insurance information and uninsured patient disclaimer handling",
    "COVID-19 test selection and symptom collection",
    "Sample collection date and time scheduling",
    "Secure patient result portal using unique result IDs",
    "JWT-based authentication for staff and administrators",
    "Real-time patient registration updates using Socket.io",
    "Centralized admin dashboard for patient management",
    "Patient search, filtering, editing, and status management",
    "COVID-19 test result entry and status updates",
    "Patient result notification workflow",
    "Patient data and result export functionality",
    "Staff account creation and user management",
    "Role-based access and permission management",
    "Testing location and laboratory configuration",
    "Dynamic screening question and question-group management",
    "Responsive administrative dashboard",
    "Modular backend architecture with dynamically loaded routes",
    "Secure API communication using JWT authentication",
    "Security middleware with Helmet and CORS",
    "Response compression for improved API performance"
  ],
  "overview": [
    "COVID-19 Virtual Check-In is a full-stack application built to manage the complete COVID-19 testing lifecycle. The platform connects patients, testing staff, administrators, and laboratories through a centralized digital workflow.",
    "Patient Registration: Patients can access a public registration page and complete a guided multi-step form containing personal information, insurance details, symptoms, test selection, and sample collection scheduling.",
    "Secure Result Access: After testing and processing, patients can access their laboratory results through a dedicated result portal using a unique identifier, eliminating the need for direct access to the administrative system.",
    "Administrative Dashboard: Authorized staff can manage patient registrations, verify check-ins, update test results, monitor testing activity, and export operational data from a centralized dashboard.",
    "System Administration: Administrators can manage staff accounts, roles, permissions, testing locations, laboratories, screening questions, and configurable question groups.",
    "Real-Time Operations: Socket.io provides real-time synchronization between the backend and administrative dashboard, allowing new patient registrations and system updates to appear without requiring manual page refreshes.",
    "Modular Architecture: The application is organized as a monorepo containing separate Angular frontend and Express backend applications. Backend business logic is divided into modules such as users, patients, results, and configuration."
  ],
  "challenges": [
    "Designing a complete patient testing workflow that is simple enough for public users while capturing all required registration and screening information",
    "Protecting sensitive patient and test-result information through secure authentication and controlled access",
    "Providing real-time visibility of new patient registrations to staff without requiring manual dashboard refreshes",
    "Managing multiple testing locations and configurable screening questions through an administrative interface",
    "Creating a flexible backend architecture capable of supporting multiple business modules and dynamically loaded routes",
    "Maintaining consistent patient status and result information throughout the testing lifecycle",
    "Building a responsive and professional administrative interface for staff working across different devices",
    "Handling secure result delivery while allowing patients to access their information without administrative credentials"
  ],
  "solutions": [
    "Guided Registration Workflow: Implemented an Angular Material stepper-based registration process that divides patient onboarding into clear stages for personal details, insurance, symptoms, testing, and scheduling.",
    "Secure Authentication: Integrated Passport.js and JWT-based authentication to protect administrative routes and ensure that only authorized staff can access sensitive patient information.",
    "Real-Time Synchronization: Implemented Socket.io to push new registration and system updates to the administrative dashboard immediately.",
    "Modular Backend: Structured the Express application into independent business modules with dedicated application logic, models, configurations, and routes, making the system easier to maintain and extend.",
    "Secure Result Portal: Created a dedicated public result endpoint that allows patients to retrieve their test status through a unique result identifier without exposing the administrative dashboard.",
    "Role-Based Administration: Added user management and permission controls so administrators can create staff accounts and control access to system functionality.",
    "Configurable Screening System: Developed question-group and screening configuration modules so administrators can customize the questions presented during patient registration.",
    "Location Management: Added dedicated location management functionality for configuring testing sites and laboratories involved in sample collection and processing.",
    "Performance & Security: Applied Helmet, CORS, compression, JWT authentication, and structured API communication to improve application security and backend performance.",
    "Responsive Dashboard: Utilized the Fuse Material Design template together with TailwindCSS, SCSS, and Angular Material to provide a clean and responsive administrative experience."
  ],
  "duration": "Ongoing",
  "category": "Healthcare Management"
},
{
  "id": "direct-wholesale-apparel",
  "slug": "direct-wholesale-apparel",
  "title": "DirectWholesaleApparel.com",
  "description": "DirectWholesaleApparel.com is a wholesale e-commerce platform focused on apparel distribution, offering products such as t-shirts, sweatshirts, caps, workwear, and branded clothing. The platform is built around a traditional PHP-based CMS architecture and is optimized for bulk ordering, SKU-driven catalog management, brand-based product discovery, and quantity-based wholesale pricing.",
  "image": "/projects/appearel.png",
  "techStack": [
    "PHP 7.x",
    "MySQL",
    "HTML5",
    "CSS3",
    "JavaScript",
    "jQuery",
    "Apache",
    "CMS",
    "InMotion Hosting"
  ],
  "features": [
    "Wholesale apparel product catalog",
    "SKU and Style Number-based product management",
    "Brand-driven product organization",
    "Category-based product browsing",
    "Quantity-based wholesale pricing",
    "Bulk ordering workflow",
    "Responsive product grid interface",
    "Image-based product catalog",
    "Product filtering and navigation",
    "Add-to-cart functionality",
    "Session-based user handling",
    "Cookie-based language and currency preferences",
    "Customer account and order data management",
    "Product, order, and customer database management",
    "HTTPS-secured e-commerce experience",
    "GZIP compression and browser caching",
    "Optimized product image delivery",
    "Lightweight jQuery-based frontend interactions",
    "CMS-driven product and storefront management",
    "Apache-based hosting infrastructure"
  ],
  "overview": [
    "DirectWholesaleApparel.com is a traditional PHP-based wholesale e-commerce platform designed for apparel distribution and bulk purchasing. The system provides a catalog-heavy shopping experience for products including t-shirts, sweatshirts, caps, workwear, and branded clothing.",
    "Wholesale Commerce: The platform is optimized for wholesale buyers with quantity-based pricing and streamlined bulk ordering workflows designed to support high-volume apparel purchases.",
    "Product Catalog: Products are organized using SKU and Style Number identifiers combined with category and brand taxonomies, making it easier for customers to discover and purchase specific apparel products.",
    "Shopping Experience: The frontend uses HTML5, CSS3, and jQuery to provide product grids, category navigation, image-based listings, filtering, and interactive add-to-cart functionality.",
    "Session Management: PHP sessions and cookies are used to maintain customer-related state, including user sessions and language or currency preferences throughout the shopping experience.",
    "Performance: The platform uses GZIP compression, browser caching, optimized static assets, and a lightweight frontend architecture to improve page loading speed and catalog browsing performance.",
    "Infrastructure: The application runs on an Apache-based hosting environment provided through InMotion Hosting, with HTTPS encryption enabled across the storefront."
  ],
  "challenges": [
    "Managing a large apparel catalog using SKU, Style Number, category, and brand-based structures",
    "Supporting wholesale customers with quantity-based pricing and bulk purchasing workflows",
    "Providing fast product discovery across a catalog containing multiple apparel categories and brands",
    "Maintaining a lightweight storefront without relying on modern frontend frameworks",
    "Keeping customer sessions, cart information, language preferences, and currency preferences consistent across the shopping experience",
    "Optimizing product images and static assets for faster catalog browsing",
    "Maintaining reliable e-commerce functionality within a traditional PHP and CMS-based architecture",
    "Providing secure customer and order handling through HTTPS and session-based authentication"
  ],
  "solutions": [
    "SKU-Based Catalog Architecture: Implemented a structured product system based on SKU and Style Number identifiers to provide consistent product organization and inventory references.",
    "Brand & Category Taxonomy: Organized products through brand and category structures to simplify navigation and improve product discovery across the wholesale catalog.",
    "Wholesale Pricing Logic: Integrated quantity-based pricing functionality to support bulk purchasing and wholesale order requirements.",
    "Lightweight Frontend: Utilized HTML5, CSS3, and jQuery to provide interactive product browsing and shopping functionality without the overhead of a large frontend framework.",
    "Session Management: Used PHP session handling and cookies to maintain customer state and preserve language, currency, and shopping-related preferences.",
    "Performance Optimization: Enabled GZIP compression, browser caching, optimized static assets, and product image optimization to improve storefront performance.",
    "Secure E-Commerce Infrastructure: Enforced HTTPS throughout the platform and implemented standard session and form-based data handling for customer and order workflows.",
    "CMS-Based Architecture: Maintained a centralized PHP CMS and e-commerce engine capable of handling product catalog management, customer data, orders, routing, and storefront rendering.",
    "Scalable Hosting: Deployed the application on Apache-based InMotion Hosting infrastructure to support the storefront and its database-driven catalog."
  ],
  "duration": "Ongoing",
  "category": "Wholesale E-Commerce"
},
{
  "id": "institutional-student-management-portal",
  "slug": "institutional-student-management-portal",
  "title": "Institutional & Student Management Portal",
  "description": "Institutional & Student Management Portal is a centralized Laravel-based management platform built for educational consultancies to manage the complete student application lifecycle, from registration and document collection to institutional selection and placement. The platform brings students, branch administrators, managers, staff, accountants, institutions, and external vendors into a secure, role-based ecosystem. It provides centralized student management, multi-branch administration, institutional and vendor management, secure document storage, financial tracking, real-time communication, notifications, dashboards, reporting, and operational monitoring.",
  "image": "/projects/ismp.png",
  "techStack": [
    "Laravel 11.9",
    "PHP 8.2+",
    "MySQL",
    "SQLite",
    "Blade",
    "Alpine.js",
    "Tailwind CSS",
    "Laravel Reverb",
    "Pusher",
    "WebSockets",
    "Vite",
    "Spatie Laravel Permission",
    "ApexCharts",
    "Flatpickr"
  ],
  "features": [
    "Centralized student registration and application management",
    "End-to-end student lifecycle and application tracking",
    "Multi-branch management and branch-specific operations",
    "Hierarchical role-based access control",
    "Super Admin, Branch Admin, Branch Manager, Accountant, Staff, and Student roles",
    "Branch-specific student and staff assignment",
    "Student profile and application information management",
    "Institution and university directory management",
    "Country-based institution filtering",
    "Student interest and institutional lead tracking",
    "Vendor and external partner management",
    "Secure private document storage",
    "Academic, financial, and general document categorization",
    "Document verification and management workflow",
    "Document and media sharing through real-time chat",
    "Real-time student and staff messaging",
    "WebSocket-powered instant communication",
    "Real-time system notifications",
    "Financial document and payment-status management",
    "Operational dashboards with KPIs and activity metrics",
    "Interactive charts and data visualization",
    "Advanced date filtering and reporting",
    "Global system configuration and application branding",
    "User and role management",
    "Branch configuration and staff assignment",
    "Search, filtering, and data management across major modules",
    "Secure authorization for sensitive student information",
    "Responsive administrative and student interfaces"
  ],
  "overview": [
    "Institutional & Student Management Portal is an enterprise-oriented educational consultancy platform designed to centralize student operations, institutional partnerships, communication, document management, financial activities, and branch operations within a single digital ecosystem.",
    "Student Management: Staff can register students, manage detailed profiles, assign students to branches and responsible team members, track application progress, manage required documentation, and monitor each student's journey through the consultancy workflow.",
    "Application Lifecycle: The system provides a structured workflow for managing students from initial registration and document collection through document verification, institutional selection, application progress, and placement activities.",
    "Institution Management: Staff can maintain a centralized directory of educational institutions and universities, organize institutions by country, and track student interest and potential placement opportunities.",
    "Vendor Management: The platform maintains a centralized vendor and partner directory, allowing consultancy teams to manage external partners and associate them with relevant operational activities.",
    "Multi-Branch Management: Organizations with multiple offices can manage branches, assign employees and students to specific branches, configure branch-level operations, and maintain centralized visibility for authorized administrators.",
    "Role-Based Access: A hierarchical permission model ensures that users can only access the information and functionality relevant to their responsibilities. Global administrators retain system-wide control while branch-level users operate within their assigned scope.",
    "Secure Document Management: Sensitive student documents are stored in protected private directories and are served only to authorized users. Documents can be categorized into academic, financial, and general records for easier organization and retrieval.",
    "Real-Time Communication: Students and staff can communicate through an integrated real-time chat system. Laravel Reverb/Pusher and WebSockets enable instant messaging, media sharing, and notifications without requiring page refreshes.",
    "Financial Operations: Accountants and authorized staff can manage financial documents, monitor payment-related information, and maintain financial records associated with student applications.",
    "Operational Dashboard: Management users receive centralized dashboards containing KPIs, activity feeds, charts, application statistics, and operational information to support faster decision-making.",
    "System Administration: Administrators can manage users, roles, branches, permissions, institutions, vendors, application configuration, branding, and other global settings from centralized administration interfaces."
  ],
  "challenges": [
    "Designing a centralized system capable of supporting multiple branches while maintaining proper data isolation and access boundaries",
    "Implementing a hierarchical permission model for administrators, managers, staff, accountants, and students",
    "Protecting sensitive student profiles, academic records, financial information, and uploaded documents",
    "Designing a complete student application lifecycle covering registration, document collection, verification, institutional selection, and placement",
    "Providing real-time communication between students and staff without requiring manual page refreshes",
    "Supporting secure document and media sharing through the integrated communication system",
    "Managing complex relationships between students, branches, staff members, institutions, and external vendors",
    "Maintaining accurate application statuses and operational information across different workflow stages",
    "Providing management with meaningful KPIs, reports, charts, and activity information",
    "Creating an architecture that can support additional consultancy workflows and future business modules",
    "Maintaining a responsive and intuitive user experience for both administrative users and students"
  ],
  "solutions": [
    "Role-Based Access Control: Implemented Spatie Laravel Permission to provide granular role and permission management, ensuring each user receives access based on their responsibilities and organizational scope.",
    "Multi-Branch Architecture: Developed branch management functionality that allows organizations to create branches, assign staff and students, manage branch-specific operations, and maintain centralized oversight.",
    "Student Lifecycle Management: Structured the application workflow around student registration, staff assignment, document collection, document verification, institutional interest, application progress, and placement tracking.",
    "Secure Document Repository: Implemented private document storage with authorization-based access controls to protect sensitive academic, financial, and general student documents.",
    "Integrated Document Communication: Connected document management with the real-time chat system, allowing staff and students to securely share relevant files within conversations.",
    "Real-Time Communication: Integrated Laravel Reverb/Pusher and WebSockets to provide instant messaging and real-time notifications between students and staff without requiring page reloads.",
    "Institution & Vendor Management: Created centralized institution and vendor directories with filtering and relationship tracking to help staff manage educational partnerships and placement opportunities.",
    "Operational Dashboards: Implemented dashboards containing KPIs, activity feeds, charts, statistics, and date-based filtering using ApexCharts and Flatpickr.",
    "Secure Authorization: Applied Laravel authentication and authorization mechanisms across student records, documents, financial information, user management, and administrative functionality.",
    "Responsive User Interface: Combined Blade, Alpine.js, and Tailwind CSS to build a modern, lightweight, and responsive interface for administrative and student workflows.",
    "Scalable Laravel Architecture: Utilized Laravel's routing, events, authorization, database abstraction, storage, and application services to establish a maintainable foundation for future modules.",
    "Centralized Configuration: Added global settings and branding management, allowing administrators to control application configuration and presentation without requiring direct code-level changes."
  ],
  "duration": "Ongoing",
  "category": "Education & Student Management"
},
{
  "id": "rams-telarus-enterprise-platform",
  "slug": "rams-telarus-enterprise-platform",
  "title": "RAMS (Telarus) Enterprise Platform",
  "description": "RAMS (Remote Asset Monitoring & Survey System) is a full-stack enterprise platform designed to combine structured field assessments, real-time asset monitoring, automated safety alerts, and operational reporting within a centralized digital ecosystem. The platform enables administrators to configure dynamic surveys, manage users and permissions, monitor sensor-driven environmental conditions, capture field data, preserve historical submission snapshots, and automatically generate reports and notifications. It is designed for high-stakes operational environments where data accuracy, traceability, automation, and real-time visibility are critical.",
  "image": "/projects/rams1.png",
  "techStack": [
    "Angular 12+",
    "Node.js 20",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "RxJS",
    "Angular Material",
    "Fuse Framework",
    "Babel",
    "AWS SNS",
    "Nodemailer",
    "PDFKit",
    "Excel Export",
    "REST APIs"
  ],
  "features": [
    "Enterprise-grade user authentication and account management",
    "Administrative user approval workflow",
    "Role-based access control and granular permissions",
    "Custom role-based menu and interface configuration",
    "Dynamic question bank management",
    "Multiple question types including text, dropdown, and checkbox",
    "Custom question options and configurable response structures",
    "Question group management for organizing assessment sections",
    "Drag-and-order style survey structure configuration",
    "Dynamic survey creation and configuration",
    "Survey estimated completion time and completion messaging",
    "Survey publishing and activation workflow",
    "Active survey portal for field users",
    "Interactive survey execution and data collection",
    "Real-time operational dashboard",
    "Advanced submission filtering",
    "Date-range and status-based record filtering",
    "Large-volume assessment record management",
    "Bulk data export functionality",
    "Immutable survey result snapshots",
    "Historical preservation of survey configuration and user information",
    "Automated PDF report generation",
    "Excel-based data exporting",
    "Submission history and archive management",
    "Centralized PDF download and reporting center",
    "Automated result notifications",
    "Email notification with generated reports",
    "Dynamic notification templates with placeholders",
    "Automated sensor monitoring",
    "Vibration threshold monitoring",
    "Temperature threshold monitoring",
    "Battery status monitoring",
    "Automated safety threshold detection",
    "Email and SMS alerting through AWS SNS and Nodemailer",
    "Background monitoring and notification services",
    "Operational intelligence through centralized dashboards",
    "Real-time monitoring and automated alert workflows"
  ],
  "overview": [
    "RAMS (Remote Asset Monitoring & Survey System) is an enterprise operational intelligence platform that brings together human-driven field assessments and automated asset monitoring within a single system. The platform is designed to transform raw survey and sensor data into actionable operational insights.",
    "User & Access Management: Administrators can create, approve, manage, and configure user accounts while assigning roles and granular permissions. New accounts remain restricted until they are explicitly approved by an authorized administrator.",
    "Dynamic Survey Framework: The platform uses a flexible three-level survey architecture consisting of Questions, Question Groups, and Surveys. Administrators can create reusable questions, organize them into logical groups, and combine those groups into complete assessment workflows.",
    "Question Management: The Question Bank provides centralized management of individual assessment questions. Questions support different input types and configurable options, allowing the system to support a wide range of inspection and assessment scenarios.",
    "Survey Configuration: Administrators can configure complete surveys by combining question groups, controlling their order, defining estimated completion time, and configuring completion messaging.",
    "Field Assessment Portal: Published surveys become available through the Active Portal, where authorized users can execute assessments, enter responses, and submit completed data from a structured interface.",
    "Historical Data Integrity: Every completed assessment is stored as a complete state snapshot. The result preserves the survey structure, questions, responses, and relevant user information exactly as they existed at the time of submission, protecting historical records from future configuration changes.",
    "Operational Dashboard: The dashboard provides management with centralized visibility into submitted assessments, operational activity, completion status, user activity, filtering, and export capabilities.",
    "Automated Reporting: Once an assessment is completed, the system automatically processes the result and generates a PDF report. The generated report is associated with the submission and made available through the archive and reporting interfaces.",
    "Real-Time Monitoring: The backend includes automated monitoring services that process incoming vibration, temperature, and battery-related sensor data and compare readings against predefined safety thresholds.",
    "Safety Alert Intelligence: When monitored sensor values exceed configured thresholds, the system automatically triggers notification workflows to alert relevant personnel through email or SMS channels.",
    "Notification Automation: Notification templates support dynamic placeholders such as user names, dates, and other contextual information, allowing the system to generate personalized operational alerts automatically.",
    "Compliance & Archive: Historical submissions, generated reports, and assessment records are preserved in a centralized archive, providing organizations with an auditable record of completed field activities."
  ],
  "challenges": [
    "Designing a flexible survey architecture capable of supporting different assessment types without hardcoding individual survey structures",
    "Maintaining historical data integrity when questions, groups, surveys, or user information change after an assessment has been completed",
    "Supporting granular user roles and permissions while allowing administrators to customize the user interface according to access levels",
    "Building a scalable system capable of processing large volumes of survey submissions and operational records",
    "Providing real-time visibility into operational data through dashboards and advanced filtering",
    "Automating report generation immediately after survey completion without disrupting the user workflow",
    "Monitoring multiple types of sensor data and identifying potentially dangerous threshold violations",
    "Triggering reliable email and SMS alerts when safety-related sensor conditions are detected",
    "Maintaining an auditable archive of completed assessments and generated reports",
    "Supporting both human-generated assessment data and machine-generated monitoring data within one operational ecosystem",
    "Providing flexible exporting capabilities for stakeholders requiring PDF reports or spreadsheet-based operational data",
    "Creating a maintainable enterprise architecture capable of supporting future monitoring devices, assessment types, and automation workflows"
  ],
  "solutions": [
    "Dynamic Survey Architecture: Implemented a reusable Question → Question Group → Survey hierarchy that allows administrators to build complex assessment workflows from configurable components instead of hardcoded forms.",
    "Historical State Snapshots: Designed the Result model to store a complete snapshot of the survey configuration, questions, user context, and submitted responses at the time of completion, ensuring historical records remain accurate even when master configurations are later modified.",
    "Enterprise Access Control: Implemented structured user roles, approval workflows, granular permissions, and configurable menu items to ensure users only access authorized functionality.",
    "Modular Angular Architecture: Built the frontend using Angular, RxJS, Angular Material, and the Fuse framework to provide a structured enterprise interface with reusable components and reactive data handling.",
    "Scalable Node.js Backend: Developed the backend using Node.js and Express.js with a modular API architecture capable of supporting user management, survey configuration, result processing, monitoring, reporting, and notification services.",
    "Automated Result Processing: Connected survey submission workflows to backend result-processing services so completed assessments can automatically trigger report generation, dashboard updates, and notifications.",
    "Automated PDF Reporting: Integrated PDF generation to create standardized assessment reports immediately after submission and associate generated documents with their corresponding records.",
    "Excel Data Export: Implemented spreadsheet export capabilities to allow administrators and stakeholders to extract operational assessment data for analysis and external reporting.",
    "Advanced Record Filtering: Developed filtering capabilities for large datasets using date ranges, completion status, user information, and other operational criteria to help administrators locate relevant records efficiently.",
    "Safety Watchman Monitoring: Implemented background monitoring processes for vibration, temperature, and battery readings, continuously evaluating incoming sensor data against predefined thresholds.",
    "Automated Alert Engine: Developed notification workflows that trigger when monitored sensor values exceed defined safety limits, enabling rapid response to potentially critical environmental or asset conditions.",
    "Multi-Channel Notifications: Integrated AWS SNS and Nodemailer to support automated SMS and email communication for operational alerts and assessment notifications.",
    "Dynamic Notification Templates: Added placeholder-based notification templates that can dynamically inject contextual information such as user names, dates, and assessment details into automated messages.",
    "Centralized Archive: Created dedicated submission history and reporting interfaces to preserve completed assessments and provide authorized users with convenient access to historical records and generated PDF reports.",
    "Operational Intelligence Dashboard: Combined real-time data, filtering, status tracking, and export capabilities into a centralized dashboard to help management monitor field activity and identify operational trends."
  ],
  "duration": "Ongoing",
  "category": "IoT & Industrial Management"
}
];

export default projectsData;