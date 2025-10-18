// Enhanced Project Data with Features and Stats
export const ProjectData = [
  {
    id: 0,
    title: "Movie Booking App",
    link: "https://movie-boooking-front.vercel.app/",
    github: "https://github.com/nitesh8877/movie-booking",
    image: "/images/movie.png",
    reverse: false,
    latest: true,
    description:
      "A comprehensive movie booking platform with real-time seat selection, payment integration, and user authentication. Built with React and Node.js, featuring a responsive design and smooth user experience.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    features: [
      "Real-time seat availability & booking",
      "Secure payment gateway integration",
      "User authentication & profiles",
      "Movie ratings & reviews",
      "Email notifications",
      "Admin dashboard for movie management",
    ],
    stats: [
      { value: "1000+", label: "Users" },
      { value: "500+", label: "Movies" },
      { value: "99%", label: "Uptime" },
    ],
  },
  {
    id: 1,
    title: "Quiz Application",
    link: "https://quiz-app-gules-eta.vercel.app/",
    github: "https://github.com/nitesh8877/quiz-app",
    image: "/images/quiz.png",
    reverse: true,
    latest: true,
    description:
      "An interactive quiz platform with multiple categories, difficulty levels, and real-time scoring. Features a leaderboard system, timed questions, and detailed result analytics to track learning progress.",
    technologies: ["React", "Firebase", "Tailwind CSS", "JavaScript ES6+"],
    features: [
      "Multiple quiz categories",
      "Difficulty levels",
      "Real-time scoring",
      "Leaderboard rankings",
      "Instant result feedback",
      "Progress tracking",
    ],
    stats: [
      { value: "50+", label: "Quizzes" },
      { value: "5000+", label: "Questions" },
      { value: "8.5/10", label: "Rating" },
    ],
  },
  {
    id: 2,
    title: "Chat Application",
    link: "https://chat-sandy-one.vercel.app/",
    github: "https://github.com/nitesh8877/chat-app",
    image: "/images/chat.png",
    reverse: false,
    latest: true,
    description:
      "A real-time messaging platform with user authentication, group chats, and online status indicators. Built with Socket.io for instant message delivery and Express.js backend with MongoDB database.",
    technologies: ["React", "Socket.io", "Express", "MongoDB", "Tailwind CSS"],
    features: [
      "Real-time messaging",
      "Group chat support",
      "User online status",
      "Message history",
      "User profiles",
      "Typing indicators",
    ],
    stats: [
      { value: "500+", label: "Active Users" },
      { value: "100+", label: "Groups" },
      { value: "< 100ms", label: "Latency" },
    ],
  },
  {
    id: 3,
    title: "Certificate Verification",
    link: "https://create-verify-certificate-frontend.vercel.app/",
    github: "https://github.com/nitesh8877/certificate-system",
    image: "/images/certificate.png",
    reverse: true,
    latest: true,
    description:
      "A blockchain-based certificate creation and verification system. Allows institutions to issue tamper-proof certificates and users to verify their authenticity instantly with QR code support.",
    technologies: ["React", "Blockchain", "Node.js", "QR Code", "MongoDB"],
    features: [
      "Certificate generation",
      "QR code scanning",
      "Blockchain verification",
      "Digital signatures",
      "Certificate templates",
      "Download as PDF",
    ],
    stats: [
      { value: "10000+", label: "Certificates" },
      { value: "100%", label: "Verified" },
      { value: "999+", label: "Institutions" },
    ],
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    link: "https://charts-ruby.vercel.app/",
    github: "https://github.com/nitesh8877/analytics-dashboard",
    image: "/images/charts.png",
    reverse: false,
    latest: true,
    description:
      "A comprehensive data visualization dashboard with interactive charts, graphs, and real-time analytics. Perfect for tracking metrics, sales, and performance data with exportable reports.",
    technologies: ["React", "Chart.js", "D3.js", "Node.js", "MongoDB"],
    features: [
      "Interactive charts & graphs",
      "Real-time data updates",
      "Custom date ranges",
      "Export to PDF/CSV",
      "Multiple chart types",
      "Dark mode support",
    ],
    stats: [
      { value: "15+", label: "Chart Types" },
      { value: "1000+", label: "Data Points" },
      { value: "4.9/5", label: "Rating" },
    ],
  },
];

// Additional project showcase data
export const FeaturedProjects = {
  total: 5,
  completed: 5,
  inProgress: 2,
  technologies: [
    "React",
    "Node.js",
    "MongoDB",
    "Firebase",
    "Socket.io",
    "Chart.js",
    "Tailwind CSS",
    "Express",
    "Blockchain",
    "D3.js",
  ],
};

// Project categories for filtering
export const ProjectCategories = [
  { id: "all", name: "All Projects", icon: "📁" },
  { id: "web", name: "Web Apps", icon: "🌐" },
  { id: "fullstack", name: "Full Stack", icon: "⚙️" },
  { id: "frontend", name: "Frontend", icon: "🎨" },
  { id: "mobile", name: "Mobile", icon: "📱" },
];

// Skills by project
export const SkillsByProject = {
  0: ["React", "Node.js", "MongoDB", "Stripe API", "REST API"],
  1: ["React Hooks", "Firebase", "State Management", "Form Validation"],
  2: ["Real-time Sockets", "Backend Architecture", "Database Design"],
  3: ["Blockchain", "Cryptography", "QR Code Generation", "PDF Export"],
  4: ["Data Visualization", "Chart Libraries", "Performance Optimization"],
};

// Project timelines
export const ProjectTimelines = [
  {
    id: 0,
    title: "Movie Booking",
    startDate: "Jan 2023",
    endDate: "Mar 2023",
    duration: "3 months",
  },
  {
    id: 1,
    title: "Quiz App",
    startDate: "Apr 2023",
    endDate: "May 2023",
    duration: "2 months",
  },
  {
    id: 2,
    title: "Chat App",
    startDate: "Jun 2023",
    endDate: "Aug 2023",
    duration: "3 months",
  },
  {
    id: 3,
    title: "Certificate System",
    startDate: "Sep 2023",
    endDate: "Nov 2023",
    duration: "3 months",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    startDate: "Dec 2023",
    endDate: "Jan 2024",
    duration: "2 months",
  },
];

// Project metrics
export const ProjectMetrics = {
  avgRating: 4.7,
  totalUsers: 7000,
  totalDownloads: 5000,
  totalStars: 250,
  avgLoadTime: "1.2s",
  avgPerformance: 94,
  totalCodeLines: 150000,
  averageProjectSize: "5MB",
};