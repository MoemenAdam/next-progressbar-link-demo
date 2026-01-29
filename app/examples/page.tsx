import Link from 'next-progressbar-link';

async function getData() {
  const delay = Math.floor(Math.random() * 1500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { loadTime: delay };
}

export default async function ExamplesPage() {
  const data = await getData();

  const examples = [
    {
      title: 'Top Progress Bar',
      description: 'Classic top bar, animating left to right',
      code: '<NavigationProgress direction="top-to-right" color="#3b82f6" />',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Bottom Progress Bar',
      description: 'Bottom positioned, right to left animation',
      code: '<NavigationProgress direction="bottom-to-left" color="#ec4899" />',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      title: 'Left Vertical Bar',
      description: 'Vertical bar on the left side',
      code: '<NavigationProgress direction="left-to-bottom" color="#10b981" containerClassName="w-1" />',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      title: 'Right Vertical Bar',
      description: 'Vertical bar on the right side',
      code: '<NavigationProgress direction="right-to-top" color="#f59e0b" containerClassName="w-1" />',
      gradient: 'from-orange-500 to-amber-500',
    },
    {
      title: 'Thick Progress Bar',
      description: 'Thicker bar with custom styling',
      code: '<NavigationProgress color="#8b5cf6" containerClassName="h-2" />',
      gradient: 'from-purple-500 to-violet-500',
    },
    {
      title: 'Gradient Effect',
      description: 'Using Tailwind for gradient effects',
      code: '<NavigationProgress color="transparent" progressClassName="bg-linear-to-r from-purple-500 to-pink-500" />',
      gradient: 'from-fuchsia-500 to-pink-500',
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-violet-950 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-violet-400 hover:text-violet-300 transition-colors group"
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
              <div className="text-6xl mb-6">💻</div>
              <h1 className="text-5xl font-bold text-white mb-4">
                Code Examples
              </h1>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                Copy and paste these examples to get started quickly
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-violet-500/20 border border-violet-500/30 rounded-full">
                <span className="text-sm text-violet-300">
                  Loaded in {data.loadTime}ms
                </span>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-16">
              {examples.map((example, index) => (
                <div
                  key={example.title}
                  className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 transition-all duration-300 hover:border-white/30"
                  style={{ animationDelay: `${index * 75}ms` }}
                >
                  <div
                    className={`absolute inset-0 bg-linear-to-br ${example.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>

                  <div className="relative">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {example.title}
                    </h3>
                    <p className="text-sm text-slate-400 mb-4">
                      {example.description}
                    </p>

                    <div className="relative">
                      <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                        <code className="text-sm text-slate-300 font-mono break-all">
                          {example.code}
                        </code>
                      </div>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(example.code)
                        }
                        className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300 hover:scale-105 group/btn"
                        title="Copy code"
                      >
                        <svg
                          className="w-4 h-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Full Example */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="text-3xl">📝</span>
                Complete Example
              </h2>
              <p className="text-slate-300 mb-6">
                Here&apos;s a complete example showing how to set up the package in
                your Next.js app
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    app/layout.tsx
                  </h3>
                  <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm text-slate-300 font-mono">
                      {`import { NavigationProgress } from 'next-progressbar-link';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavigationProgress 
          direction="top-to-right"
          color="#8b5cf6"
        />
        {children}
      </body>
    </html>
  );
}`}
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    app/page.tsx
                  </h3>
                  <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
                    <pre className="text-sm text-slate-300 font-mono">
                      {`import Link from 'next-progressbar-link';

export default function Home() {
  return (
    <main>
      <h1>Welcome!</h1>
      <nav>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}`}
                    </pre>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 rounded-2xl bg-linear-to-br from-violet-600/20 to-purple-600/20 border border-violet-500/30 p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4">
                Want to experiment?
              </h2>
              <p className="text-slate-300 mb-6">
                Try different configurations in the interactive control panel
              </p>
              <Link
                href="/settings"
                className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-violet-600 to-purple-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-violet-500/30"
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
