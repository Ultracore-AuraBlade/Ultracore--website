/**
 * UltraCore Official Data Source
 * Easily editable configuration for updates, features, screenshots, and launch status.
 */

export interface UpdateEntry {
  id: string;
  version: string;
  date: string;
  title: string;
  description: string;
  changes: string[];
  status: 'CURRENT BUILD' | 'STABLE' | 'INTERNAL TEST' | 'PLANNED';
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  status: 'IN DEVELOPMENT' | 'COMING SOON' | 'AVAILABLE IN BUILD';
  icon: string;
  highlight?: string;
}

export interface ScreenshotCategory {
  id: string;
  label: string;
  title: string;
  description: string;
  imageUrl?: string | null; // Set to image path when real screenshot is available
  specs: string[];
}

export const ULTRACORE_BRAND = {
  name: 'ULTRACORE',
  tagline: 'Your AI. Your Bro.',
  revealLine: 'AURA__BLADE IS HERE.',
  heroSupportingLine: 'Meet the AI that feels less like a tool and more like your bro.',
  coreDescription: 'A next-generation companion intelligence built for Android, fusing deep conversational personality with adaptive system capabilities.',
};

export const LAUNCH_CONFIG = {
  // Official UltraCore APK Launch: 8 November 2026, 12:00 AM IST (Asia/Kolkata)
  targetEpochMs: new Date('2026-11-08T00:00:00+05:30').getTime(),
  launchDateISO: '2026-11-08T00:00:00+05:30',
  displayDate: '8 NOVEMBER 2026',
  heading: 'ULTRACORE APK LAUNCH',
  timezoneLabel: 'IST (Asia/Kolkata)',
  statusPreLaunch: 'COMING SOON',
  statusPostLaunch: 'ULTRACORE IS LIVE',
  liveHeadline: 'ULTRACORE IS LIVE.',
  liveSubline: 'THE CORE HAS AWAKENED.',
};

export const APK_CONFIG = {
  isAvailable: false,
  statusLabel: 'APK — COMING SOON',
  downloadUrl: null as string | null,
  targetAndroidVersion: 'Android 10.0+ (API Level 29+)',
  architecture: 'ARM64-v8a / 64-bit native',
  packageId: 'com.ultracore.assistant',
  releaseChannel: 'Phase 1 Closed Alpha',
};

export const DEVELOPMENT_STAGES = [
  {
    id: 'building',
    label: 'BUILDING',
    status: 'ACTIVE',
    description: 'Core runtime architecture, Baburao conversational engine & memory model grounding.',
  },
  {
    id: 'testing',
    label: 'TESTING',
    status: 'PENDING',
    description: 'On-device Android intent resolution, audio pipeline latency, and security validation.',
  },
  {
    id: 'polishing',
    label: 'POLISHING',
    status: 'PENDING',
    description: 'Orbital visual responsiveness, ambient haptic feedback, and audio resonance tuning.',
  },
  {
    id: 'coming_soon',
    label: 'COMING SOON',
    status: 'UPCOMING',
    description: 'Public APK signed artifact deployment and direct APK download mirror.',
  },
];

export const FEATURES_DATA: FeatureItem[] = [
  {
    id: 'voice-interaction',
    title: 'VOICE INTERACTION',
    description: 'Natural voice conversations with Baburao.',
    status: 'IN DEVELOPMENT',
    icon: 'Mic',
    highlight: 'Real-time conversational turn-taking with low-latency streaming speech.',
  },
  {
    id: 'memory',
    title: 'MEMORY',
    description: 'UltraCore can retain useful context and memories.',
    status: 'IN DEVELOPMENT',
    icon: 'Brain',
    highlight: 'Remembers project details, user preferences, and conversational callbacks naturally.',
  },
  {
    id: 'knowledge-vault',
    title: 'KNOWLEDGE VAULT',
    description: 'A dedicated place for stored knowledge and information.',
    status: 'COMING SOON',
    icon: 'Database',
    highlight: 'Encrypted on-device vault indexing notes, references, and key data points.',
  },
  {
    id: 'android-actions',
    title: 'ANDROID ACTIONS',
    description: 'Designed to interact with supported Android actions.',
    status: 'IN DEVELOPMENT',
    icon: 'Smartphone',
    highlight: 'Deep OS automation, app launching, reminders, and intent hooks.',
  },
  {
    id: 'ai-skills',
    title: 'AI SKILLS',
    description: 'Modular capabilities that can grow over time.',
    status: 'AVAILABLE IN BUILD',
    icon: 'Cpu',
    highlight: 'Extensible skill system enabling tool execution and dynamic plugin workflows.',
  },
  {
    id: 'privacy',
    title: 'PRIVACY',
    description: 'User-focused privacy and control settings.',
    status: 'IN DEVELOPMENT',
    icon: 'Shield',
    highlight: 'Full visibility over retained memories, with one-tap memory sanitization.',
  },
  {
    id: 'file-support',
    title: 'FILE SUPPORT',
    description: 'Support for working with user-provided files where available.',
    status: 'COMING SOON',
    icon: 'FileCode',
    highlight: 'Analyze local text files, documentation, code snippets, and structured exports.',
  },
  {
    id: 'smart-recovery',
    title: 'SMART RECOVERY',
    description: 'Designed to handle network and interaction failures gracefully.',
    status: 'AVAILABLE IN BUILD',
    icon: 'RefreshCw',
    highlight: 'Automatic state reconciliation prevents lost trains of thought during signal drops.',
  },
];

export const LATEST_UPDATES: UpdateEntry[] = [
  {
    id: 'build-0-0-x',
    version: 'BUILD 0.0.X',
    date: 'Autumn 2026',
    title: 'Voice System Improvements & Core Grounding',
    description: 'Refined voice pipeline for Baburao conversational synthesis, reduced silence overhead, and laid down the foundational memory schemas.',
    changes: [
      'Engineered low-latency audio response buffers for conversational turns',
      'Configured Baburao persona weights for authentic, natural banter',
      'Integrated resilient context reconnect hooks for intermittent networks',
      'Established on-device encrypted Memory Vault schema',
    ],
    status: 'CURRENT BUILD',
  },
  {
    id: 'build-0-0-9',
    version: 'BUILD 0.0.9',
    date: 'Late Summer 2026',
    title: 'Android Intent Protocol & Orbital Interface',
    description: 'Introduced direct action dispatchers for supported Android intents alongside the signature orbital UI prototype.',
    changes: [
      'Implemented native intent wrappers for notifications and reminders',
      'Crafted orbital ring dynamic feedback state machine',
      'Refined background process lifecycle handling',
    ],
    status: 'STABLE',
  },
  {
    id: 'build-0-0-8',
    version: 'BUILD 0.0.8',
    date: 'Mid Summer 2026',
    title: 'Aura Blade Architecture Initialization',
    description: 'First architectural milestone establishing the high-throughput reasoning framework code-named AURA__BLADE.',
    changes: [
      'Asynchronous task scheduling graph formulation',
      'Zero-leak memory hygiene subsystem',
      'Initial security boundary auditing and permission containment',
    ],
    status: 'INTERNAL TEST',
  },
];

export const SCREENSHOT_CATEGORIES: ScreenshotCategory[] = [
  {
    id: 'home',
    label: 'HOME',
    title: 'Central Command & Ambient Core',
    description: 'The minimalist primary dashboard presenting real-time orbital status, current contextual memory anchors, and immediate voice activation.',
    imageUrl: null,
    specs: ['Orbital status indicator', 'Active voice threshold', 'Dynamic quick-action dock'],
  },
  {
    id: 'chat',
    label: 'CHAT',
    title: 'Fluid Conversational Stream',
    description: 'Clean typographic layout with low-contrast speech bubbles and seamless code block rendering, preserving context across sessions.',
    imageUrl: null,
    specs: ['Bilateral turn-taking', 'Markdown and code rendering', 'Inline context references'],
  },
  {
    id: 'baburao',
    label: 'BABURAO',
    title: 'Persona Tuning & Vocal Cadence',
    description: 'Interactive persona dashboard where Baburao responds with his signature laid-back, witty, yet razor-sharp helpfulness.',
    imageUrl: null,
    specs: ['Banter & sincerity slider', 'Vocal pitch resonance', 'Conversation history depth'],
  },
  {
    id: 'memory',
    label: 'MEMORY',
    title: 'Adaptive Context Inspector',
    description: 'Inspect what UltraCore has learned about your workflow, preferences, and recurring tasks with granular delete and pin permissions.',
    imageUrl: null,
    specs: ['Context cluster browser', 'Single-tap memory purging', 'Timeline provenance'],
  },
  {
    id: 'knowledge-vault',
    label: 'KNOWLEDGE VAULT',
    title: 'Encrypted Knowledge Vault',
    description: 'A structured local vault for storing reference manuals, code snippets, project schemas, and custom user knowledge bases.',
    imageUrl: null,
    specs: ['On-device AES-256 storage', 'Semantic instant search', 'Category tagging'],
  },
  {
    id: 'settings',
    label: 'SETTINGS',
    title: 'System & Permission Governance',
    description: 'Fine-grained toggles for Android actions, offline mode, voice wake-word sensitivity, and telemetry zero-tolerance enforcement.',
    imageUrl: null,
    specs: ['Android permission matrix', 'Battery optimization profile', 'Crash telemetry kill-switch'],
  },
];

export const BABURAO_SAMPLE_TOPICS = [
  {
    title: '"Bro, check my late-night logic."',
    category: 'Late Night Debugging',
    description: 'Unfiltered code review, catching off-by-one errors and reminding you to get some sleep.',
  },
  {
    title: '"Remind me tomorrow without making it weird."',
    category: 'Everyday Android Actions',
    description: 'Hands-free task queuing that adapts to your actual routine rather than generic calendar alerts.',
  },
  {
    title: '"Give me the honest breakdown."',
    category: 'Direct Honest Advice',
    description: 'No robotic sugarcoating. Baburao gives you straight feedback on ideas, emails, and plans.',
  },
];
