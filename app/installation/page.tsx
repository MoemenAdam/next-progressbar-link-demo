'use client';
import Link from 'next-progressbar-link';

export default function InstallationPage() {
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-teal-950 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-teal-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-5xl mx-auto px-6 py-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 transition-colors group"
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
              <div className="text-6xl mb-6">🚀</div>
              <h1 className="text-5xl font-bold text-white mb-4">
                Installation
              </h1>
              <p className="text-lg text-slate-300">
                Get up and running in under 2 minutes
              </p>
            </div>

            <div className="space-y-8">
              {/* Requirements */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">📋</span>
                  Requirements
                </h2>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-teal-400 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Next.js with App Router (required)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 text-teal-400 mt-0.5 shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>Tailwind CSS (optional - for advanced styling)</span>
                  </li>
                </ul>
              </div>

              {/* Install */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">📦</span>
                  Step 1: Install the Package
                </h2>
                <p className="text-slate-300 mb-6">
                  Choose your preferred package manager:
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-teal-400">
                        npm
                      </h3>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            'npm install next-progressbar-link'
                          )
                        }
                        className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="bg-slate-950 rounded-lg p-4">
                      <code className="text-sm text-slate-300 font-mono">
                        npm install next-progressbar-link
                      </code>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-teal-400">
                        yarn
                      </h3>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            'yarn add next-progressbar-link'
                          )
                        }
                        className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="bg-slate-950 rounded-lg p-4">
                      <code className="text-sm text-slate-300 font-mono">
                        yarn add next-progressbar-link
                      </code>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-semibold text-teal-400">
                        pnpm
                      </h3>
                      <button
                        onClick={() =>
                          navigator.clipboard.writeText(
                            'pnpm add next-progressbar-link'
                          )
                        }
                        className="text-xs px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg transition-all duration-300"
                      >
                        Copy
                      </button>
                    </div>
                    <div className="bg-slate-950 rounded-lg p-4">
                      <code className="text-sm text-slate-300 font-mono">
                        pnpm add next-progressbar-link
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Setup */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">⚙️</span>
                  Step 2: Add to Root Layout
                </h2>
                <p className="text-slate-300 mb-6">
                  Import and add the NavigationProgress component to your root
                  layout:
                </p>
                <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-slate-300 font-mono">
                    {`// app/layout.tsx
import { NavigationProgress } from 'next-progressbar-link';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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

              {/* Usage */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🎯</span>
                  Step 3: Use the Link Component
                </h2>
                <p className="text-slate-300 mb-6">
                  Replace your next/link imports:
                </p>
                <div className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
                  <pre className="text-sm text-slate-300 font-mono">
                    {`import Link from 'next-progressbar-link';

export default function Page() {
  return (
    <nav>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}`}
                  </pre>
                </div>
              </div>

              {/* Done */}
              <div className="rounded-2xl bg-linear-to-br from-teal-600/20 to-cyan-600/20 border border-teal-500/30 p-8 text-center">
                <div className="text-5xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  That&apos;s It!
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
                  Your app now has a beautiful progress bar during navigation.
                  Want to customize it?
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/customization"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300"
                  >
                    <span>Customization Guide</span>
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
                  <Link
                    href="/settings"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-linear-to-r from-teal-600 to-cyan-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-teal-500/30"
                  >
                    <span>Try Control Panel</span>
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

              {/* Troubleshooting */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">💡</span>
                  Troubleshooting
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Progress bar not showing?
                    </h3>
                    <p className="text-sm text-slate-400">
                      Make sure you&apos;re using Next.js App Router (not Pages
                      Router) and that NavigationProgress is added to your root
                      layout inside the body tag.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Links not working?
                    </h3>
                    <p className="text-sm text-slate-400">
                      The Link component is a wrapper around next/link, so all
                      props work the same. Make sure your href paths are
                      correct.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
