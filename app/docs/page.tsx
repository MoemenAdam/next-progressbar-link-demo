import Link from 'next-progressbar-link';

async function getData() {
  const delay = Math.floor(Math.random() * 1500) + 500;
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { loadTime: delay };
}

export default async function DocsPage() {
  const data = await getData();

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-emerald-950 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-5xl mx-auto px-6 py-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors group"
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

          <main className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <div className="text-6xl mb-6">📚</div>
              <h1 className="text-5xl font-bold text-white mb-4">
                Documentation
              </h1>
              <p className="text-lg text-slate-300">
                Complete guide to using next-progressbar-link
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full">
                <span className="text-sm text-emerald-300">
                  Loaded in {data.loadTime}ms
                </span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Installation */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">📦</span>
                  Installation
                </h2>
                <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                  <code className="text-emerald-400 text-sm font-mono">
                    npm install next-progressbar-link
                  </code>
                </div>
              </div>

              {/* Quick Start */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🚀</span>
                  Quick Start
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      1. Add to your root layout
                    </h3>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`// app/layout.tsx
import { NavigationProgress } from 'next-progressbar-link';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <NavigationProgress />
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
                      2. Use the Link component
                    </h3>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-slate-300 font-mono">
                        {`import Link from 'next-progressbar-link';

export default function MyPage() {
  return <Link href="/about">About</Link>;
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Props */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">⚙️</span>
                  Props
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-white/10">
                        <th className="py-3 px-4 text-emerald-400 font-semibold">
                          Prop
                        </th>
                        <th className="py-3 px-4 text-emerald-400 font-semibold">
                          Type
                        </th>
                        <th className="py-3 px-4 text-emerald-400 font-semibold">
                          Default
                        </th>
                      </tr>
                    </thead>
                    <tbody className="text-slate-300">
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4 font-mono text-sm">
                          direction
                        </td>
                        <td className="py-3 px-4 text-sm">ProgressDirection</td>
                        <td className="py-3 px-4 font-mono text-sm">
                          &quot;top-to-right&quot;
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4 font-mono text-sm">color</td>
                        <td className="py-3 px-4 text-sm">string</td>
                        <td className="py-3 px-4 font-mono text-sm">
                          &quot;#00b207&quot;
                        </td>
                      </tr>
                      <tr className="border-b border-white/5">
                        <td className="py-3 px-4 font-mono text-sm">
                          containerClassName
                        </td>
                        <td className="py-3 px-4 text-sm">string</td>
                        <td className="py-3 px-4 font-mono text-sm">
                          &quot;&quot;
                        </td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-mono text-sm">
                          progressClassName
                        </td>
                        <td className="py-3 px-4 text-sm">string</td>
                        <td className="py-3 px-4 font-mono text-sm">
                          &quot;&quot;
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Examples */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">💡</span>
                  Examples
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Custom Color
                    </h3>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-slate-300 font-mono">
                        {`<NavigationProgress color="#ec4899" />`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Bottom Position
                    </h3>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-slate-300 font-mono">
                        {`<NavigationProgress direction="bottom-to-right" color="#10b981" />`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Vertical Bar
                    </h3>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-slate-300 font-mono">
                        {`<NavigationProgress direction="left-to-bottom" containerClassName="w-2" />`}
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Try it */}
              <div className="rounded-2xl bg-linear-to-br from-emerald-600/20 to-teal-600/20 border border-emerald-500/30 p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Try it yourself!
                </h2>
                <p className="text-slate-300 mb-6">
                  Head to the control panel to experiment with all the options
                </p>
                <Link
                  href="/settings"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-emerald-600 to-teal-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300"
                >
                  <span>Control Panel</span>
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
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
