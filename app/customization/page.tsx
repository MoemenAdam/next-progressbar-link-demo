import Link from 'next-progressbar-link';
import { NavigationProgress } from 'next-progressbar-link';

async function getData() {
  const delay = Math.floor(Math.random() * 1500) + 500;
  await new Promise(resolve => setTimeout(resolve, delay));
  return { loadTime: delay };
}

export default async function CustomizationPage() {
  const data = await getData();

  return (
    <>
      <NavigationProgress />
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-orange-950 to-slate-900">
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-48 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="relative z-10">
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-5xl mx-auto px-6 py-6">
              <Link href="/" className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors group">
                <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-medium">Back to Home</span>
              </Link>
            </div>
          </header>

          <main className="max-w-5xl mx-auto px-6 py-16">
            <div className="text-center mb-12">
              <div className="text-6xl mb-6">🎨</div>
              <h1 className="text-5xl font-bold text-white mb-4">Customization</h1>
              <p className="text-lg text-slate-300">Make it yours with endless possibilities</p>
              <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 border border-orange-500/30 rounded-full">
                <span className="text-sm text-orange-300">Loaded in {data.loadTime}ms</span>
              </div>
            </div>

            <div className="space-y-8">
              {/* Direction Customization */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🧭</span>
                  Direction Options
                </h2>
                <p className="text-slate-300 mb-6">
                  Choose from 8 different directions to match your design
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { direction: 'top-to-right', desc: 'Top bar, left to right' },
                    { direction: 'top-to-left', desc: 'Top bar, right to left' },
                    { direction: 'bottom-to-right', desc: 'Bottom bar, left to right' },
                    { direction: 'bottom-to-left', desc: 'Bottom bar, right to left' },
                    { direction: 'left-to-bottom', desc: 'Left bar, top to bottom' },
                    { direction: 'left-to-top', desc: 'Left bar, bottom to top' },
                    { direction: 'right-to-bottom', desc: 'Right bar, top to bottom' },
                    { direction: 'right-to-top', desc: 'Right bar, bottom to top' },
                  ].map((item) => (
                    <div key={item.direction} className="bg-slate-950/50 rounded-lg p-4">
                      <div className="font-mono text-sm text-orange-400 mb-1">{item.direction}</div>
                      <div className="text-xs text-slate-400">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Color Customization */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">🌈</span>
                  Color Customization
                </h2>
                <p className="text-slate-300 mb-6">
                  Use any valid CSS color value
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">Hex Colors</h3>
                    <div className="bg-slate-950 rounded-lg p-4">
                      <code className="text-sm text-slate-300 font-mono">
                        color="#ec4899"
                      </code>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">RGB/RGBA</h3>
                    <div className="bg-slate-950 rounded-lg p-4">
                      <code className="text-sm text-slate-300 font-mono">
                        color="rgb(236, 72, 153)"
                      </code>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-2">HSL</h3>
                    <div className="bg-slate-950 rounded-lg p-4">
                      <code className="text-sm text-slate-300 font-mono">
                        color="hsl(330, 81%, 60%)"
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Styling */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <span className="text-3xl">✨</span>
                  Advanced Styling
                </h2>
                <p className="text-slate-300 mb-6">
                  Use Tailwind CSS classes for advanced customization
                </p>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Container Classes</h3>
                    <p className="text-sm text-slate-400 mb-3">
                      Control the size and positioning of the progress bar container
                    </p>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-slate-300 font-mono">
                        containerClassName="h-2 shadow-lg"
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Progress Classes</h3>
                    <p className="text-sm text-slate-400 mb-3">
                      Apply Tailwind classes directly to the progress element
                    </p>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <code className="text-sm text-slate-300 font-mono">
                        progressClassName="bg-gradient-to-r from-purple-500 to-pink-500"
                      </code>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Combined Example</h3>
                    <div className="bg-slate-950 rounded-lg p-4 overflow-x-auto">
                      <pre className="text-sm text-slate-300 font-mono">
{`<NavigationProgress 
  direction="top-to-right"
  color="transparent"
  containerClassName="h-2"
  progressClassName="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 shadow-xl"
/>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Demo */}
              <div className="rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-600/20 border border-orange-500/30 p-8 text-center">
                <h2 className="text-2xl font-bold text-white mb-4">🎮 Try It Live</h2>
                <p className="text-slate-300 mb-6">
                  Head to the control panel to test all customization options in real-time
                </p>
                <Link
                  href="/settings"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 text-white font-medium rounded-xl hover:scale-105 transition-all duration-300 shadow-lg shadow-orange-500/30"
                >
                  <span>Open Control Panel</span>
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
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