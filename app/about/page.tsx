import Link from 'next-progressbar-link';
export const dynamic = 'force-dynamic';
// Simulate loading delay
async function getData() {
  const delay = Math.floor(Math.random() * 1500) + 500; // 500ms to 2000ms
  await new Promise((resolve) => setTimeout(resolve, delay));
  return { loadTime: delay };
}

export default async function AboutPage() {
  const data = await getData();

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-5xl mx-auto px-6 py-6">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group"
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
              <div className="text-6xl mb-6 animate-bounce">📖</div>
              <h1 className="text-5xl font-bold text-white mb-4">About</h1>
              <p className="text-lg text-slate-300">
                Learn more about next-progressbar-link
              </p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full">
                <span className="text-sm text-blue-300">
                  Loaded in {data.loadTime}ms
                </span>
              </div>
            </div>

            <div className="prose prose-invert prose-lg max-w-none">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  What is next-progressbar-link?
                </h2>
                <p className="text-slate-300 leading-relaxed">
                  next-progressbar-link is a lightweight wrapper around
                  Next.js&apos;s native Link component that adds visual feedback
                  during page navigation. It solves the common problem where
                  users click a link but don&apos;t know if the page is loading,
                  especially in App Router with Server Components where
                  navigation can take a moment.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Why was it created?
                </h2>
                <p className="text-slate-300 leading-relaxed mb-4">
                  In modern web applications, especially those using Next.js App
                  Router with Server Components, navigation can sometimes take a
                  few moments. During this time, users often wonder if their
                  click registered or if the page is actually loading.
                </p>
                <p className="text-slate-300 leading-relaxed">
                  This package provides a simple, elegant solution by showing a
                  customizable progress bar that gives users clear visual
                  feedback that something is happening.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">
                  Key Features
                </h2>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🚀</span>
                    <span>Lightweight and minimal overhead</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🎨</span>
                    <span>Fully customizable with 8 direction options</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">⚡</span>
                    <span>
                      Zero configuration required - works out of the box
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">🔄</span>
                    <span>
                      Perfect wrapper around next/link - all props work as
                      expected
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Navigation */}
            <div className="grid md:grid-cols-2 gap-4 mt-12">
              <Link
                href="/features"
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-2">✨</div>
                <h3 className="text-lg font-bold text-white mb-1">Features</h3>
                <p className="text-sm text-slate-400">
                  Explore all capabilities
                </p>
              </Link>
              <Link
                href="/installation"
                className="group p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-3xl mb-2">🚀</div>
                <h3 className="text-lg font-bold text-white mb-1">
                  Installation
                </h3>
                <p className="text-sm text-slate-400">Get started quickly</p>
              </Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
