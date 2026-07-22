export interface FeatureCard {
  title: string;
  description: string;
  iconName: "Brain" | "Cpu" | "Shield" | "Globe" | "Award" | "Zap" | "Terminal" | "Workflow" | "Database" | "Cloud" | "BarChart" | "Users" | "Share2" | "Layers";
}

export interface ProductNode {
  id: string;
  name: string;
  description: string;
  x: number; // percentage coordinate
  y: number; // percentage coordinate
  iconName: "Brain" | "Cpu" | "Workflow" | "BarChart" | "Cloud" | "Layers";
  connections: string[]; // ids of connected nodes
}

export interface IndustryItem {
  id: string;
  name: string;
  description: string;
  bgGradient: string;
  iconName: "HeartPulse" | "Factory" | "GraduationCap" | "Coins" | "Building" | "ShoppingBag" | "Truck" | "Trees";
}

export interface TechItem {
  name: string;
  category: "Languages & Frameworks" | "Data & Infrastructure" | "AI & ML";
  description: string;
}

export interface ResearchStep {
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export interface StatItem {
  value: string;
  numericValue: number;
  suffix: string;
  label: string;
}

export interface TestimonialItem {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatarUrl: string;
}

export interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
}

export interface BlogPost {
  title: string;
  category: "AI" | "Engineering" | "Research" | "Updates";
  date: string;
  readTime: string;
  snippet: string;
  author: string;
}

export const ABOUT_FEATURES: FeatureCard[] = [
  {
    title: "AI Research",
    description: "Developing custom neural architectures and cognitive architectures pushed beyond the state of the art.",
    iconName: "Brain",
  },
  {
    title: "Enterprise Software",
    description: "Building production-grade, highly secure automation suites engineered for massive concurrent workloads.",
    iconName: "Workflow",
  },
  {
    title: "Cloud Infrastructure",
    description: "Elastic, low-latency deployment vectors optimized for high-throughput machine learning inference.",
    iconName: "Cloud",
  },
  {
    title: "Digital Transformation",
    description: "Empowering traditional enterprises with intelligent automation agents to redefine industry models.",
    iconName: "Layers",
  },
];

export const VISION_MISSION = {
  vision: {
    title: "Our Vision",
    text: "Democratize Artificial Intelligence by making advanced AI systems practical, secure, scalable, ethical, and accessible to institutions worldwide.",
  },
  mission: [
    {
      title: "Build World-Class AI Products",
      description: "Design and implement bleeding-edge AI models that solve high-impact, real-world operational challenges."
    },
    {
      title: "Accelerate Digital Transformation",
      description: "Equip enterprises and governments with cognitive workflows to automate operations safely."
    },
    {
      title: "Responsible AI Development",
      description: "Establish robust transparency guidelines, safety checks, and alignment frameworks for all deployments."
    },
    {
      title: "Intelligent Automation Systems",
      description: "Construct autonomic architectures that learn, adapt, and scale to minimize computational waste."
    }
  ]
};

export const PRODUCT_ECOSYSTEM: ProductNode[] = [
  {
    id: "platform",
    name: "Enterprise AI Platform",
    description: "The core orchestration hub for enterprise agent networks and custom neural pipelines.",
    x: 50,
    y: 50,
    iconName: "Layers",
    connections: ["assistants", "automation", "analytics", "apis", "custom-models"],
  },
  {
    id: "assistants",
    name: "AI Assistants",
    description: "Context-aware, autonomous execution agents capable of reasoning, planning, and task fulfillment.",
    x: 25,
    y: 30,
    iconName: "Brain",
    connections: ["platform", "automation"],
  },
  {
    id: "automation",
    name: "Business Automation",
    description: "Zero-code robotic workflow automation integrated with legacy enterprise interfaces.",
    x: 75,
    y: 30,
    iconName: "Workflow",
    connections: ["platform", "assistants", "analytics"],
  },
  {
    id: "analytics",
    name: "Analytics Platform",
    description: "Real-time decision intelligence engine mapping operational telemetry into forecasting graphs.",
    x: 75,
    y: 70,
    iconName: "BarChart",
    connections: ["platform", "automation", "custom-models"],
  },
  {
    id: "apis",
    name: "Cloud AI APIs",
    description: "Sub-millisecond inference endpoints for standard text, image, and vision embedding models.",
    x: 25,
    y: 70,
    iconName: "Cloud",
    connections: ["platform", "custom-models"],
  },
  {
    id: "custom-models",
    name: "Custom AI Models",
    description: "Bespoke LLMs and diffusion models fine-tuned on proprietary industry datasets.",
    x: 50,
    y: 85,
    iconName: "Cpu",
    connections: ["platform", "apis", "analytics"],
  },
];

export const WHY_DISEC: FeatureCard[] = [
  {
    title: "AI First",
    description: "AI is not an add-on; it is the core architecture around which all our products are engineered.",
    iconName: "Brain",
  },
  {
    title: "In-house Research",
    description: "We publish proprietary research and construct bespoke weights, ensuring full IP ownership.",
    iconName: "Cpu",
  },
  {
    title: "Enterprise Ready",
    description: "SOC 2 Type II compliant pipelines engineered to support high concurrency with zero down-time.",
    iconName: "Shield",
  },
  {
    title: "Scalable Architecture",
    description: "Kubernetes-native deployments that scale from zero to thousands of TPU/GPU clusters elastically.",
    iconName: "Layers",
  },
  {
    title: "Secure by Design",
    description: "Strict air-gapped options, end-to-end data encryption, and local differential privacy protocols.",
    iconName: "Shield",
  },
  {
    title: "Open Innovation",
    description: "Supporting open-source research and contributing models back to the developer ecosystem.",
    iconName: "Globe",
  },
  {
    title: "Fast Deployment",
    description: "Pre-trained enterprise structures allow integration in days instead of quarters.",
    iconName: "Zap",
  },
  {
    title: "Global Vision",
    description: "Infrastructure built to serve multi-region requirements, supporting global language sets.",
    iconName: "Globe",
  },
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "healthcare",
    name: "Healthcare",
    description: "Accelerating clinical workflows, structuring diagnostic telemetry, and automating medical records.",
    bgGradient: "from-blue-950 via-slate-900 to-cyan-950",
    iconName: "HeartPulse",
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    description: "Predictive maintenance scheduling, computer-vision quality inspections, and supply chain routing.",
    bgGradient: "from-slate-950 via-blue-900 to-indigo-950",
    iconName: "Factory",
  },
  {
    id: "education",
    name: "Education",
    description: "Adaptive training curricula, automated grading assistance, and responsive virtual tutors.",
    bgGradient: "from-purple-950 via-slate-900 to-indigo-950",
    iconName: "GraduationCap",
  },
  {
    id: "finance",
    name: "Finance",
    description: "Real-time risk modeling, automated fraud detection, and algorithmic portfolio asset allocation.",
    bgGradient: "from-emerald-950 via-slate-900 to-cyan-950",
    iconName: "Coins",
  },
  {
    id: "government",
    name: "Government",
    description: "Public service agent portals, smart city telemetry interfaces, and secure document digitization.",
    bgGradient: "from-blue-950 via-slate-900 to-purple-950",
    iconName: "Building",
  },
  {
    id: "retail",
    name: "Retail",
    description: "Hyper-personalized recommendation vectors, automated virtual support, and inventory forecasting.",
    bgGradient: "from-pink-950 via-slate-900 to-rose-950",
    iconName: "ShoppingBag",
  },
  {
    id: "logistics",
    name: "Logistics",
    description: "Autonomous dispatch routing, dynamic warehouse load sorting, and global shipping tracking.",
    bgGradient: "from-cyan-950 via-slate-900 to-sky-950",
    iconName: "Truck",
  },
  {
    id: "smartcities",
    name: "Smart Cities",
    description: "Autonomic power grid distribution, intelligent traffic scheduling, and environmental sensing.",
    bgGradient: "from-teal-950 via-slate-900 to-emerald-950",
    iconName: "Trees",
  },
];

export const TECH_STACK: TechItem[] = [
  { name: "Python", category: "AI & ML", description: "Primary programming language for research and deep learning development." },
  { name: "Django", category: "Languages & Frameworks", description: "Secure, structured backend orchestrator for complex databases." },
  { name: "FastAPI", category: "Languages & Frameworks", description: "Ultra-fast asynchronous endpoints for low-latency AI inference." },
  { name: "React", category: "Languages & Frameworks", description: "Frontend foundation for modular, interactive user dashboards." },
  { name: "Next.js", category: "Languages & Frameworks", description: "Production React framework with server components and edge routing." },
  { name: "PostgreSQL", category: "Data & Infrastructure", description: "Primary relational database configured with pgvector for embeddings." },
  { name: "Docker", category: "Data & Infrastructure", description: "Containerized packaging for portable, reliable environment execution." },
  { name: "Kubernetes", category: "Data & Infrastructure", description: "Orchestration manager for autoscaling GPU workloads across cloud regions." },
  { name: "TensorFlow", category: "AI & ML", description: "End-to-end open source platform for machine learning model construction." },
  { name: "PyTorch", category: "AI & ML", description: "State-of-the-art framework for deep neural network research and training." },
  { name: "OpenAI", category: "AI & ML", description: "Integration API wrapper for foundational large language model access." },
  { name: "NVIDIA", category: "AI & ML", description: "CUDA acceleration layer driving extreme performance on AI chips." },
];

export const RESEARCH_TIMELINE: ResearchStep[] = [
  {
    phase: "Research",
    title: "01. Theoretical Formulation",
    description: "Formulating novel cognitive theories and mathematical loss targets in collaboration with partner research institutes.",
    details: ["Mathematical proof validation", "Loss function modeling", "Paper draft & verification"]
  },
  {
    phase: "Prototype",
    title: "02. Proof of Concept",
    description: "Validating theories by training micro-models on specialized sandbox clusters to evaluate convergence rates.",
    details: ["Hyperparameter sweep", "Synthetic data testing", "Convergence rate evaluation"]
  },
  {
    phase: "Training",
    title: "03. Large-Scale Training",
    description: "Scaling models across multi-node TPU and GPU architectures, utilizing mixed-precision custom training loops.",
    details: ["Distributed dataset tokenization", "GPU cluster orchestration", "Model alignment & safety tuning"]
  },
  {
    phase: "Deployment",
    title: "04. Production Gateway",
    description: "Publishing models into containerized, isolated sandbox instances with granular traffic routing gates.",
    details: ["Canary release gating", "API endpoint exposure", "Security auditing"]
  },
  {
    phase: "Optimization",
    title: "05. Inference Refinement",
    description: "Applying 4-bit quantization, compilation speed-ups (TensorRT), and speculative decoding for rapid execution.",
    details: ["Model quantization & pruning", "CUDA kernel acceleration", "Continuous monitoring & alignment"]
  },
];

export const STATS: StatItem[] = [
  { value: "20+", numericValue: 20, suffix: "+", label: "AI Projects" },
  { value: "10+", numericValue: 10, suffix: "+", label: "Products Built" },
  { value: "15+", numericValue: 15, suffix: "+", label: "Research Initiatives" },
  { value: "24/7", numericValue: 24, suffix: "/7", label: "Infrastructure" },
  { value: "99.9%", numericValue: 99.9, suffix: "%", label: "Uptime SLA" },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    quote: "DiSEC Solutions has re-engineered our logistics pipeline. Their Custom AI Models reduced shipping routing overheads by 24% in the first quarter of deployment.",
    author: "Elena Rostova",
    position: "Chief Operating Officer",
    company: "AeroGlobal Logistics",
    avatarUrl: "/avatars/avatar-1.jpg",
  },
  {
    quote: "The Enterprise AI Platform provided by DiSEC is incredibly robust. Security protocols are unmatched, and integration with our PostgreSQL systems was flawless.",
    author: "Marcus Vance",
    position: "Director of Enterprise Security",
    company: "ApexFin Corporation",
    avatarUrl: "/avatars/avatar-2.jpg",
  },
  {
    quote: "Partnering with DiSEC's research arm allowed us to prototype clinical decision tools in record time. Their commitment to responsible AI is evident throughout.",
    author: "Dr. Sarah Chen",
    position: "VP of Medical Informatics",
    company: "Vanguard Health Systems",
    avatarUrl: "/avatars/avatar-3.jpg",
  },
];

export const CAREERS: JobOpening[] = [
  { title: "Senior AI Researcher", department: "Research & Development", location: "Bengaluru, India / Hybrid", type: "Full-Time", experience: "5+ Years" },
  { title: "Lead Software Architect", department: "Engineering", location: "Remote (Global)", type: "Full-Time", experience: "7+ Years" },
  { title: "Machine Learning Engineer", department: "Engineering", location: "Bengaluru, India", type: "Full-Time", experience: "3+ Years" },
  { title: "Full-Stack Developer", department: "Product Development", location: "Bengaluru, India", type: "Full-Time", experience: "2+ Years" },
  { title: "AI Research Intern", department: "Research & Development", location: "Bengaluru, India / Remote", type: "Internship", experience: "Academic (MS/PhD)" },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    title: "Optimizing Transformer Inference: Speculative Decoding in Production",
    category: "Engineering",
    date: "July 12, 2026",
    readTime: "6 min read",
    snippet: "Discover how we implemented speculative decoding algorithms to reduce token generation latency by 45% on consumer-grade GPU instances.",
    author: "Gautham Krishna P"
  },
  {
    title: "Responsible Alignment: Bridging the Gap Between Enterprise Safety and Model Utility",
    category: "Research",
    date: "June 28, 2026",
    readTime: "8 min read",
    snippet: "This research paper outlines our novel feedback-alignment system, designed to guard against hallucination without impacting task execution metrics.",
    author: "DiSEC Research Team"
  },
  {
    title: "Announcing DiSEC Enterprise Platform v2.0: The Agent Network Orchestrator",
    category: "Updates",
    date: "May 15, 2026",
    readTime: "4 min read",
    snippet: "We are proud to release DiSEC Enterprise Platform v2.0. This release features native Kubernetes scaling and built-in vector memory clusters.",
    author: "Product Team"
  },
  {
    title: "Designing Reliable AI Workflows for High-Stakes Operations",
    category: "Research",
    date: "April 22, 2026",
    readTime: "7 min read",
    snippet: "A practical look at the evaluation loops, observability patterns, and human checkpoints that make autonomous enterprise workflows dependable.",
    author: "DiSEC Research Team"
  },
];
