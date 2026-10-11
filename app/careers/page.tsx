'use client'

import {
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    ChevronDown,
    Cloud,
    Code2,
    Lightbulb,
    Palette,
    Rocket,
    Server,
    ShieldCheck,
    Smartphone,
    Sparkles,
    Users,
    Bot,
    BriefcaseBusiness,
    TrendingUp,
    Mail,
} from 'lucide-react'

const jobs = [
    {
        id: 'android-developer',
        title: 'Android App Developer',
        department: 'Mobile Development',
        icon: Smartphone,
        summary:
            'Develop native Android applications from initial design and development through testing and Google Play deployment.',
        skills: ['Kotlin / Java', 'Android Studio', 'REST APIs', 'Google Play Console'],
        responsibilities: [
            'Develop Android applications using Kotlin or Java and Android Studio.',
            'Build interfaces using Jetpack Compose or XML layouts.',
            'Integrate APIs, authentication, databases, notifications, and third-party services.',
            'Test applications on emulators and physical devices and resolve performance issues.',
            'Prepare signed APK/AAB builds and manage release versions.',
            'Publish applications through Google Play Console and maintain production releases.',
        ],
        requirements: [
            'Practical knowledge of Kotlin or Java and the Android SDK.',
            'Experience with Android Studio, Gradle, Git, and debugging.',
            'Understanding of REST APIs, JSON, authentication, and local data storage.',
            'Knowledge of application architecture, testing, and performance optimisation.',
            'Ability to configure signing, prepare production builds, and deploy through Google Play Console.',
            'Understanding of Play Store submission requirements and post-deployment troubleshooting.',
        ],
        preferred:
            'Jetpack Compose, Firebase, automated testing, CI/CD, and previously published Android applications.',
    },
    {
        id: 'ios-developer',
        title: 'iOS App Developer',
        department: 'Mobile Development',
        icon: Smartphone,
        summary:
            'Build, test, and publish iOS applications, managing the process from development to App Store release.',
        skills: ['Swift', 'Xcode', 'SwiftUI / UIKit', 'App Store Connect'],
        responsibilities: [
            'Develop native iOS applications using Swift, Xcode, and SwiftUI or UIKit.',
            'Build responsive interfaces and implement application navigation and data persistence.',
            'Integrate REST APIs, authentication, notifications, and third-party services.',
            'Test applications using simulators and physical Apple devices.',
            'Configure bundle identifiers, signing certificates, provisioning profiles, and release builds.',
            'Manage TestFlight distribution, App Store Connect submissions, review feedback, and production updates.',
        ],
        requirements: [
            'Practical knowledge of Swift and native iOS development.',
            'Experience with Xcode, Git, debugging, and application lifecycle management.',
            'Understanding of SwiftUI or UIKit, REST APIs, JSON, and data persistence.',
            'Knowledge of signing certificates, provisioning profiles, and release configuration.',
            'Ability to prepare production builds, configure TestFlight, and deploy through App Store Connect.',
            'Understanding of App Store guidelines, testing, and post-release maintenance.',
        ],
        preferred:
            'Firebase, Swift Package Manager, automated testing, CI/CD, and previously published iOS applications.',
    },
    {
        id: 'flutter-developer',
        title: 'Flutter Developer',
        department: 'Mobile Development',
        icon: Code2,
        summary:
            'Create cross-platform Android and iOS applications with consistent interfaces and reliable backend integrations.',
        skills: ['Flutter', 'Dart', 'API Integration', 'Mobile Deployment'],
        responsibilities: [
            'Develop applications using Flutter and Dart.',
            'Implement navigation, reusable widgets, and state management.',
            'Integrate APIs, authentication, databases, and third-party services.',
            'Test and optimise applications across Android and iOS devices.',
            'Prepare signed Android releases and manage Google Play submissions.',
            'Configure iOS builds, signing, TestFlight, and App Store submissions.',
        ],
        requirements: [
            'Knowledge of Flutter, Dart, and mobile application architecture.',
            'Experience with state management, REST APIs, and Git.',
            'Understanding of Android Studio, Xcode, and platform-specific configuration.',
            'Ability to build, test, sign, and deploy applications to Google Play and the Apple App Store.',
            'Knowledge of debugging, performance optimisation, and release workflows.',
        ],
        preferred:
            'Firebase, mobile CI/CD, automated testing, and experience maintaining published applications.',
    },
    {
        id: 'full-stack-developer',
        title: 'Full-Stack Web Developer',
        department: 'Software & Web Development',
        icon: Code2,
        summary:
            'Build responsive websites, web applications, dashboards, and business platforms using modern frontend and backend technologies.',
        skills: ['React', 'Next.js', 'TypeScript', 'Backend APIs'],
        responsibilities: [
            'Build interfaces using React, Next.js, TypeScript, and Tailwind CSS.',
            'Develop backend services, authentication, APIs, and database integrations.',
            'Integrate third-party platforms and business tools.',
            'Write maintainable code and test application functionality and security.',
            'Deploy applications using Vercel or suitable cloud and server environments.',
            'Configure domains, DNS, SSL, environment variables, and production integrations.',
        ],
        requirements: [
            'Knowledge of JavaScript or TypeScript, React, and modern web development.',
            'Experience with Next.js or a comparable web framework.',
            'Understanding of backend development, REST APIs, and SQL or NoSQL databases.',
            'Knowledge of Git, responsive design, debugging, and web security.',
            'Ability to deploy production applications and troubleshoot hosting issues.',
            'Understanding of domains, DNS, SSL certificates, and environment configuration.',
        ],
        preferred:
            'Authentication systems, payment integrations, CI/CD, cloud hosting, and performance optimisation.',
    },
    {
        id: 'ai-developer',
        title: 'AI & Automation Developer',
        department: 'AI & Automation',
        icon: Bot,
        summary:
            'Create AI-powered applications, intelligent assistants, and automation workflows that solve real business problems.',
        skills: ['Python / JavaScript', 'LLM APIs', 'Automation', 'AI Integration'],
        responsibilities: [
            'Develop AI-powered applications, chatbots, assistants, and workflow automations.',
            'Integrate language model APIs and third-party business applications.',
            'Build backend logic, data processing, and API integrations.',
            'Test AI outputs for reliability, accuracy, latency, and cost.',
            'Implement validation, secure credentials, and appropriate error handling.',
            'Deploy, monitor, document, and maintain AI applications.',
        ],
        requirements: [
            'Knowledge of Python or JavaScript/TypeScript.',
            'Experience with REST APIs, JSON, authentication, and backend integrations.',
            'Understanding of LLM APIs, prompt engineering, and AI application development.',
            'Ability to troubleshoot workflows and unreliable model outputs.',
            'Understanding of deployment, environment configuration, logging, and monitoring.',
            'Awareness of data privacy and secure API key management.',
        ],
        preferred:
            'RAG, vector databases, AI agents, LangChain, and workflow automation platforms.',
    },
    {
        id: 'backend-developer',
        title: 'Backend Developer',
        department: 'Software Engineering',
        icon: Server,
        summary:
            'Develop secure APIs, database systems, and backend services for web applications, mobile products, and business platforms.',
        skills: ['Node.js / Python', 'REST APIs', 'Databases', 'Security'],
        responsibilities: [
            'Develop backend services using Node.js or Python.',
            'Design REST APIs, database schemas, queries, and data models.',
            'Implement authentication, authorisation, validation, and access controls.',
            'Integrate external APIs, payment gateways, and third-party services.',
            'Write tests and improve performance, reliability, and error handling.',
            'Deploy backend services and maintain production environments.',
        ],
        requirements: [
            'Knowledge of Node.js or Python and a relevant backend framework.',
            'Experience with REST APIs and SQL or NoSQL databases.',
            'Understanding of authentication, API security, and data validation.',
            'Knowledge of Git, testing, debugging, and software architecture.',
            'Ability to deploy backend applications and configure production environments.',
            'Understanding of logging, environment variables, backups, and monitoring.',
        ],
        preferred:
            'Docker, Redis, automated testing, CI/CD, and cloud infrastructure.',
    },
    {
        id: 'ui-ux-designer',
        title: 'UI/UX Designer',
        department: 'Digital Products',
        icon: Palette,
        summary:
            'Design clear, accessible, and visually consistent experiences for websites, mobile applications, and business software.',
        skills: ['Figma', 'Wireframes', 'Prototyping', 'Design Systems'],
        responsibilities: [
            'Create user flows, wireframes, prototypes, and polished interface designs.',
            'Design responsive experiences for desktop, tablet, and mobile.',
            'Develop reusable components and consistent design systems.',
            'Translate business requirements into user-centred solutions.',
            'Review usability, accessibility, and visual consistency.',
            'Collaborate with developers and prepare design handoff documentation.',
        ],
        requirements: [
            'Knowledge of Figma or comparable design tools.',
            'Understanding of UX principles, information architecture, and interaction design.',
            'Knowledge of responsive layouts, typography, accessibility, and design systems.',
            'Ability to create interactive prototypes and developer-ready specifications.',
            'A portfolio demonstrating website or mobile application design.',
            'Good communication and collaboration skills.',
        ],
        preferred:
            'Usability testing, design systems, interactive prototyping, and launched digital products.',
    },
    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps Engineer',
        department: 'Cloud & Infrastructure',
        icon: Cloud,
        summary:
            'Deploy, secure, and maintain applications and infrastructure while improving release automation and reliability.',
        skills: ['Linux', 'Cloud Hosting', 'CI/CD', 'Docker'],
        responsibilities: [
            'Configure and maintain Linux servers, cloud resources, and hosting environments.',
            'Build deployment workflows and CI/CD pipelines.',
            'Manage containerised applications using Docker where appropriate.',
            'Configure DNS, SSL certificates, networking, and environment variables.',
            'Monitor service availability, logs, and system health.',
            'Implement backups, recovery procedures, access controls, and security practices.',
        ],
        requirements: [
            'Knowledge of Linux administration, networking, and server fundamentals.',
            'Experience with cloud platforms, VPS environments, or managed hosting.',
            'Understanding of Git, CI/CD, and deployment workflows.',
            'Knowledge of Docker, monitoring, and troubleshooting.',
            'Understanding of DNS, SSL/TLS, access controls, and backups.',
            'Ability to deploy and maintain production applications securely.',
        ],
        preferred:
            'AWS, Azure, Google Cloud, infrastructure as code, and automated monitoring.',
    },
    {
        id: 'hr-manager',
        title: 'HR Manager',
        department: 'Human Resources',
        icon: Users,
        summary:
            'Manage recruitment, employee relations, onboarding, HR policies, and people operations to support an effective and productive team.',
        skills: ['Recruitment', 'HR Operations', 'Employee Relations', 'HR Policies'],
        responsibilities: [
            'Manage recruitment activities, job postings, candidate screening, and interview coordination.',
            'Coordinate onboarding, employee documentation, attendance, and HR records.',
            'Develop and maintain HR policies, procedures, and employee guidelines.',
            'Support performance reviews, employee engagement, and professional development.',
            'Handle employee queries and support the resolution of workplace concerns.',
            'Maintain confidential employee records and prepare HR reports.',
        ],
        requirements: [
            'Bachelor’s degree in Human Resources, Business Administration, or a related field.',
            'Practical knowledge of recruitment, onboarding, and general HR operations.',
            'Good communication, organisation, and interpersonal skills.',
            'Understanding of employee records, HR policies, and confidentiality.',
            'Ability to manage multiple responsibilities and meet deadlines.',
            'Proficiency in Microsoft Office or Google Workspace.',
        ],
        preferred:
            'Experience with HR management systems, recruitment platforms, performance management, and employee engagement initiatives.',
    },
    {
        id: 'marketing-specialist',
        title: 'Digital Marketing Specialist',
        department: 'Marketing & Growth',
        icon: TrendingUp,
        summary:
            'Plan and execute digital marketing activities to strengthen brand awareness, generate leads, and grow EZAC Technologies’ online presence.',
        skills: ['SEO', 'Social Media', 'Content Marketing', 'Analytics'],
        responsibilities: [
            'Develop and implement digital marketing plans aligned with business goals.',
            'Manage company social media accounts and prepare engaging content.',
            'Conduct keyword research and implement on-page SEO improvements.',
            'Write and coordinate website content, service pages, and marketing campaigns.',
            'Monitor website traffic, engagement, and campaign performance.',
            'Research competitors, identify marketing opportunities, and recommend improvements.',
        ],
        requirements: [
            'Bachelor’s degree in Marketing, Business, Communications, or a related field.',
            'Knowledge of digital marketing, social media management, and content creation.',
            'Understanding of SEO, keyword research, and website optimisation.',
            'Ability to write clear, professional marketing copy.',
            'Familiarity with Google Analytics, Search Console, or similar reporting tools.',
            'Strong communication, creativity, and analytical skills.',
        ],
        preferred:
            'Experience with paid advertising, email marketing, Canva, marketing automation, and lead-generation campaigns.',
    },
]

const values = [
    {
        icon: Lightbulb,
        title: 'Innovation',
        description: 'Turn new ideas into practical digital solutions.',
    },
    {
        icon: Users,
        title: 'Collaboration',
        description: 'Share knowledge and work together to solve problems.',
    },
    {
        icon: Rocket,
        title: 'Growth',
        description: 'Build skills through meaningful technical work.',
    },
]

export default function CareersPage() {
    const applicationEmail = 'info@ezactechnologies.com'

    return (
        <main className="min-h-screen overflow-hidden bg-[#020817] text-white">
            {/* Hero */}
            <section className="relative px-6 pb-20 pt-36 sm:px-10 sm:pt-40 lg:px-16">
                {/* Soft ambient glows */}
                <div className="pointer-events-none absolute left-1/2 top-16 -z-0 size-[28rem] -translate-x-1/2 rounded-full bg-blue-600/20 blur-[140px]" />
                <div className="pointer-events-none absolute -left-20 top-40 -z-0 size-64 rounded-full bg-sky-500/10 blur-[100px]" />
                <div className="pointer-events-none absolute -right-16 bottom-10 -z-0 size-72 rounded-full bg-blue-500/10 blur-[110px]" />

                <div className="relative mx-auto max-w-5xl text-center">
                    <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/[0.1] px-4 py-2 text-sm text-blue-300 shadow-[0_0_20px_-6px_rgba(59,130,246,0.35)]">
                        <Sparkles className="size-4" />
                        Careers at EZAC Technologies
                    </div>

                    <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
                        Build Your Future.
                        <span className="mt-2 block bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                            Create What&apos;s Next.
                        </span>
                    </h1>

                    <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
                        Help us build smarter digital products, mobile
                        applications, AI-powered solutions, and modern software
                        for businesses.
                    </p>

                    <a
                        href="#open-positions"
                        className="mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#078cff] px-7 text-sm font-semibold shadow-[0_8px_30px_-8px_rgba(7,140,255,0.55)] transition hover:bg-[#159cff] hover:shadow-[0_10px_36px_-8px_rgba(21,156,255,0.6)]"
                    >
                        Explore Job Openings
                        <ArrowRight className="size-4" />
                    </a>

                    {/* Values */}
                    <div className="mt-16 grid gap-4 text-left sm:grid-cols-3">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-blue-400/30 hover:bg-white/[0.045]"
                            >
                                <div className="mb-3 flex size-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] transition group-hover:border-blue-400/25 group-hover:bg-blue-500/[0.12]">
                                    <value.icon className="size-5 text-blue-400" />
                                </div>
                                <h2 className="font-semibold">{value.title}</h2>
                                <p className="mt-2 text-sm leading-6 text-slate-400">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why EZAC */}
            <section
                id="why-ezac"
                className="border-y border-white/[0.07] bg-white/[0.02] px-6 py-16 sm:px-10 lg:px-16"
            >
                <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 md:items-center">
                    <div>
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                            Grow With Us
                        </p>
                        <h2 className="text-2xl font-semibold leading-snug sm:text-3xl">
                            Good ideas deserve great execution.
                        </h2>
                        <div className="mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-sky-400" />
                    </div>

                    <p className="text-sm leading-7 text-slate-400 sm:text-base">
                        At EZAC Technologies, our work spans web development,
                        mobile applications, AI, automation, and cloud
                        infrastructure. We value practical problem-solving,
                        technical ownership, clear communication, and reliable
                        delivery from development through deployment.
                    </p>
                </div>
            </section>

            {/* Open Positions — layout kept the same */}
            <section
                id="open-positions"
                className="scroll-mt-24 px-6 py-20 sm:px-10 lg:px-16"
            >
                <div className="mx-auto max-w-5xl">
                    <div className="mb-10">
                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">
                            Career Opportunities
                        </p>

                        <h2 className="text-3xl font-semibold sm:text-4xl">
                            Explore Our Job Roles
                        </h2>

                        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                            Find a role that matches your skills. Expand a job to
                            view its responsibilities and requirements.
                        </p>

                        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-sm text-slate-400">
                            <BriefcaseBusiness className="size-4 text-blue-400" />
                            {jobs.length} career roles
                        </div>
                    </div>

                    <div className="space-y-4">
                        {jobs.map((job) => {
                            const Icon = job.icon
                            const subject = `Application - ${job.title}`
                            const applicationLink =
                                `mailto:${applicationEmail}` +
                                `?subject=${encodeURIComponent(subject)}`

                            return (
                                <article
                                    key={job.id}
                                    className="group overflow-hidden rounded-2xl border border-white/[0.09] bg-[#071225] transition-all duration-300 hover:border-blue-400/30 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.08),0_12px_40px_-16px_rgba(7,140,255,0.15)]"
                                >
                                    <div className="p-5 sm:p-6">
                                        <div className="flex items-start gap-4">
                                            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.08] transition group-hover:border-blue-400/25 group-hover:bg-blue-500/[0.12]">
                                                <Icon className="size-5 text-blue-400" />
                                            </div>

                                            <div className="min-w-0 flex-1">
                                                <h3 className="text-lg font-semibold leading-snug sm:text-xl">
                                                    {job.title}
                                                </h3>
                                                <p className="mt-1.5 text-sm text-slate-400">
                                                    {job.department}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mt-4 text-sm leading-6 text-slate-400">
                                            {job.summary}
                                        </p>

                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {job.skills.map((skill) => (
                                                <span
                                                    key={skill}
                                                    className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 text-xs text-slate-300 transition group-hover:border-white/[0.12]"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-5 flex flex-col gap-3 border-t border-white/[0.07] pt-5 sm:flex-row sm:items-center sm:justify-between">
                                            <details className="group/details">
                                                <summary className="flex cursor-pointer list-none items-center gap-2 py-2 text-sm font-medium text-blue-300 transition hover:text-blue-200 [&::-webkit-details-marker]:hidden">
                                                    View Job Details
                                                    <ChevronDown className="size-4 transition-transform group-open/details:rotate-180" />
                                                </summary>

                                                <div className="mt-5 space-y-6 border-t border-white/[0.07] pt-5 sm:pr-4">
                                                    <div>
                                                        <h4 className="mb-3 text-sm font-semibold text-white">
                                                            Responsibilities
                                                        </h4>
                                                        <ul className="space-y-2.5">
                                                            {job.responsibilities.map((item) => (
                                                                <li
                                                                    key={item}
                                                                    className="flex gap-2.5 text-sm leading-6 text-slate-400"
                                                                >
                                                                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-blue-400" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="mb-3 text-sm font-semibold text-white">
                                                            Requirements
                                                        </h4>
                                                        <ul className="space-y-2.5">
                                                            {job.requirements.map((item) => (
                                                                <li
                                                                    key={item}
                                                                    className="flex gap-2.5 text-sm leading-6 text-slate-400"
                                                                >
                                                                    <CheckCircle2 className="mt-1 size-4 shrink-0 text-blue-400" />
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                                                        <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-300">
                                                            Preferred Experience
                                                        </h4>
                                                        <p className="mt-2 text-sm leading-6 text-slate-400">
                                                            {job.preferred}
                                                        </p>
                                                    </div>
                                                </div>
                                            </details>

                                            <a
                                                href={applicationLink}
                                                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg bg-[#078cff] px-4 text-sm font-semibold transition hover:bg-[#159cff] sm:shrink-0"
                                            >
                                                Apply for This Role
                                                <ArrowRight className="size-4" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            )
                        })}
                    </div>

                   
                </div>
            </section>
        </main>
    )
}