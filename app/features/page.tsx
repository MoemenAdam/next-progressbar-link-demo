import Link from 'next-progressbar-link';
export const dynamic = 'force-dynamic';
async function getData() {
  const delay = Math.floor(Math.random() * 1500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { loadTime: delay };
}

export default async function FeaturesPage() {
  const data = await getData();

  const features = [
    {
      icon: '🎯',
      title: '8 Direction Options',
      description:
        'Choose from 8 different directions and positions for your progress bar',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: '🎨',
      title: 'Full Color Control',
      description:
        'Use any color you want with simple hex, rgb, or CSS color values',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: '⚡',
      title: 'Zero Configuration',
      description:
        'Works out of the box with sensible defaults - customize only if needed',
      gradient: 'from-rose-500 to-orange-500',
    },
    {
      icon: '🔄',
      title: 'Next.js Native',
      description:
        'Perfect wrapper around next/link - all props and features work exactly as expected',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      icon: '💨',
      title: 'Smooth Animations',
      description:
        'Built-in progress simulation with smooth, natural-feeling transitions',
      gradient: 'from-yellow-500 to-green-500',
    },
    {
      icon: '📦',
      title: 'Lightweight',
      description: "Tiny bundle size that won't slow down your application",
      gradient: 'from-green-500 to-blue-500',
    },
    {
      icon: '🎭',
      title: 'Portal Rendering',
      description:
        'Uses React portals for proper z-index layering and positioning',
      gradient: 'from-blue-500 to-indigo-500',
    },
    {
      icon: '🧩',
      title: 'Tailwind Support',
      description: 'Optional Tailwind CSS classes for advanced customization',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-pink-950 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors group"
              >
                <svg
                  className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
          </header>

          <main className="max-w-7xl mx-auto px-6 py-16">
            <div className="text-center mb-16">
              <div className="text-6xl mb-6">✨</div>
              <h1 className="text-5xl font-bold text-white mb-4">Features</h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Everything you need for the perfect navigation experience
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-pink-500/20 border border-pink-500/30 rounded-full">
                <span className="text-sm text-pink-300">
                  Loaded in {data.loadTime}ms
                </span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 transition-all duration-500 hover:scale-105 hover:border-white/30"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="rounded-2xl bg-linear-to-br from-pink-600/20 to-purple-600/20 border border-pink-500/30 p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to try it?
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                Head over to the control panel to customize and see all features
                in action
              </p>
              <Link
                href="/settings"
                className="inline-flex items-center gap-2 px-8 py-4 bg-linear-to-r from-pink-600 to-purple-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/30"
              >
                <span>Open Control Panel</span>
                <svg
                  className="w-5 h-5"
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
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
