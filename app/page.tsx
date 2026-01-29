import Link from 'next-progressbar-link';

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-purple-950 to-slate-900">
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          ></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    next-progressbar-link
                  </h1>
                  <p className="text-sm text-slate-400 mt-1">
                    Interactive Demo & Playground
                  </p>
                </div>
                <a
                  href="https://github.com/yourusername/next-progressbar-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-105"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="max-w-7xl mx-auto px-6 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-purple-300 font-medium">
                  Try navigating between pages
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Experience the
                <br />
                <span className="bg-linear-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Progress Magic
                </span>
              </h2>
              <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                Click on any link below to see the progress bar in action. Each
                page has a simulated loading delay.
              </p>
            </div>

            {/* Navigation Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {[
                {
                  href: '/about',
                  title: 'About',
                  desc: 'Learn more about this package',
                  emoji: '📖',
                  gradient: 'from-purple-500 to-pink-500',
                },
                {
                  href: '/features',
                  title: 'Features',
                  desc: 'Explore all capabilities',
                  emoji: '✨',
                  gradient: 'from-pink-500 to-rose-500',
                },
                {
                  href: '/docs',
                  title: 'Documentation',
                  desc: 'Read the full docs',
                  emoji: '📚',
                  gradient: 'from-rose-500 to-orange-500',
                },
                {
                  href: '/examples',
                  title: 'Examples',
                  desc: 'See code examples',
                  emoji: '💻',
                  gradient: 'from-orange-500 to-yellow-500',
                },
                {
                  href: '/customization',
                  title: 'Customization',
                  desc: 'Customize your progress bar',
                  emoji: '🎨',
                  gradient: 'from-yellow-500 to-green-500',
                },
                {
                  href: '/installation',
                  title: 'Installation',
                  desc: 'Get started quickly',
                  emoji: '🚀',
                  gradient: 'from-green-500 to-blue-500',
                },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative overflow-hidden rounded-2xl bg-linear-to-br from-white/5 to-white/0 border border-white/10 p-6 transition-all duration-500 hover:scale-105 hover:border-white/30 hover:shadow-2xl hover:shadow-purple-500/20"
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${link.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {link.emoji}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {link.title}
                    </h3>
                    <p className="text-sm text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                      {link.desc}
                    </p>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-2">
                      <span>Explore</span>
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Control Panel - Link to settings */}
            <div className="mt-20">
              <Link
                href="/settings"
                className="block group relative overflow-hidden rounded-2xl bg-linear-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 p-8 transition-all duration-500 hover:scale-[1.02] hover:border-purple-400/50 hover:shadow-2xl hover:shadow-purple-500/30"
              >
                <div className="absolute inset-0 bg-linear-to-br from-purple-600 to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

                <div className="relative flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      🎛️ Control Panel
                    </h3>
                    <p className="text-slate-300">
                      Customize direction, color, and see live preview
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 group-hover:text-purple-300 transition-colors">
                    <span className="text-sm font-medium">Open Settings</span>
                    <svg
                      className="w-6 h-6 transform group-hover:translate-x-2 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              {[
                { label: 'Directions', value: '8', icon: '🧭' },
                { label: 'Zero Config', value: '✓', icon: '⚡' },
                { label: 'Bundle Size', value: '~5KB', icon: '📦' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </main>

          {/* Footer */}
          <footer className="border-t border-white/10 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-8 text-center">
              <p className="text-slate-400 text-sm">
                Built with ❤️ for the Next.js community
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
