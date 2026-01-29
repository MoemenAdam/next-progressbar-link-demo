/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useState } from 'react';
import Link from 'next-progressbar-link';

const directions: { value: any; label: string; position: string }[] = [
  { value: 'top-to-right', label: 'Top → Right', position: 'Top' },
  { value: 'top-to-left', label: 'Top ← Left', position: 'Top' },
  { value: 'bottom-to-right', label: 'Bottom → Right', position: 'Bottom' },
  { value: 'bottom-to-left', label: 'Bottom ← Left', position: 'Bottom' },
  { value: 'left-to-bottom', label: 'Left ↓ Bottom', position: 'Left' },
  { value: 'left-to-top', label: 'Left ↑ Top', position: 'Left' },
  { value: 'right-to-bottom', label: 'Right ↓ Bottom', position: 'Right' },
  { value: 'right-to-top', label: 'Right ↑ Top', position: 'Right' },
];

const presetColors = [
  { name: 'Purple', value: '#a855f7' },
  { name: 'Pink', value: '#ec4899' },
  { name: 'Blue', value: '#3b82f6' },
  { name: 'Green', value: '#10b981' },
  { name: 'Orange', value: '#f97316' },
  { name: 'Red', value: '#ef4444' },
  { name: 'Yellow', value: '#eab308' },
  { name: 'Teal', value: '#14b8a6' },
];

export default function SettingsPage() {
  const [direction, setDirection] = useState<any>('top-to-right');
  const [color, setColor] = useState('#a855f7');

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-950 via-indigo-950 to-slate-900">
        {/* Animated background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/3 -left-64 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/3 -right-64 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1.5s' }}
          ></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <header className="border-b border-white/10 backdrop-blur-xl bg-white/5">
            <div className="max-w-7xl mx-auto px-6 py-6">
              <div className="flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 group">
                  <svg
                    className="w-6 h-6 text-purple-400 transform group-hover:-translate-x-1 transition-transform duration-300"
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
                  <div>
                    <h1 className="text-xl font-bold text-white">
                      Control Panel
                    </h1>
                    <p className="text-xs text-slate-400">
                      Customize your progress bar
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </header>

          <main className="max-w-6xl mx-auto px-6 py-12">
            {/* Preview Section */}
            <div className="mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full mb-6">
                <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
                <span className="text-sm text-indigo-300 font-medium">
                  Click any link below to see changes
                </span>
              </div>

              <h2 className="text-4xl font-bold text-white mb-4">
                Live Preview
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl">
                Adjust the settings below and click on any navigation link to
                see your progress bar in action.
              </p>
            </div>

            {/* Test Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
              {[
                { href: '/about', label: 'About', emoji: '📖' },
                { href: '/features', label: 'Features', emoji: '✨' },
                { href: '/docs', label: 'Docs', emoji: '📚' },
                { href: '/', label: 'Home', emoji: '🏠' },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/10 p-6 text-center transition-all duration-300 hover:scale-105 hover:border-white/30 hover:bg-white/10"
                >
                  <div className="text-3xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                    {link.emoji}
                  </div>
                  <div className="text-sm font-medium text-white">
                    {link.label}
                  </div>
                </Link>
              ))}
            </div>

            {/* Controls Grid */}
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Direction Control */}
              <div className="rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                    🧭
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Direction</h3>
                    <p className="text-sm text-slate-400">
                      Choose position and animation
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {directions.map((dir) => (
                    <button
                      key={dir.value}
                      onClick={() => setDirection(dir.value)}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                        direction === dir.value
                          ? 'bg-linear-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/30 scale-[1.02]'
                          : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:scale-[1.01]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-medium">{dir.label}</div>
                          <div className="text-xs opacity-75 mt-0.5">
                            {dir.position} position
                          </div>
                        </div>
                        {direction === dir.value && (
                          <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Control */}
              <div className="rounded-2xl bg-linear-to-br from-white/10 to-white/5 border border-white/20 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-linear-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-2xl">
                    🎨
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">Color</h3>
                    <p className="text-sm text-slate-400">
                      Pick your favorite color
                    </p>
                  </div>
                </div>

                {/* Custom Color Picker */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    Custom Color
                  </label>
                  <div className="relative">
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    />
                    <div
                      className="h-16 rounded-xl border-2 border-white/20 cursor-pointer hover:scale-105 transition-transform duration-300 shadow-lg"
                      style={{ backgroundColor: color }}
                    >
                      <div className="h-full flex items-center justify-center">
                        <span className="text-white font-mono text-sm font-bold drop-shadow-lg">
                          {color.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preset Colors */}
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-3">
                    Preset Colors
                  </label>
                  <div className="grid grid-cols-4 gap-3">
                    {presetColors.map((preset) => (
                      <button
                        key={preset.value}
                        onClick={() => setColor(preset.value)}
                        className={`relative group h-16 rounded-lg transition-all duration-300 hover:scale-110 ${
                          color === preset.value
                            ? 'ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-105'
                            : ''
                        }`}
                        style={{ backgroundColor: preset.value }}
                        title={preset.name}
                      >
                        {color === preset.value && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-6 h-6 text-white drop-shadow-lg"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                        )}
                        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                          <span className="text-xs text-slate-400">
                            {preset.name}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Code Preview */}
            <div className="mt-12 rounded-2xl bg-linear-to-br from-slate-900 to-slate-800 border border-slate-700 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-linear-to-br from-green-500 to-emerald-500 flex items-center justify-center text-xl">
                  💻
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    Current Configuration
                  </h3>
                  <p className="text-sm text-slate-400">
                    Copy this code to use in your app
                  </p>
                </div>
              </div>

              <div className="relative">
                <pre className="bg-slate-950 rounded-lg p-6 overflow-x-auto">
                  <code className="text-sm text-slate-300 font-mono">
                    {`<NavigationProgress
  direction="${direction}"
  color="${color}"
/>`}
                  </code>
                </pre>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(
                      `<NavigationProgress\n  direction="${direction}"\n  color="${color}"\n/>`
                    );
                  }}
                  className="absolute top-4 right-4 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-xs text-white transition-all duration-300 hover:scale-105"
                >
                  Copy
                </button>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <div className="rounded-xl bg-linear-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 p-6">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="text-lg font-bold text-white mb-2">Pro Tip</h4>
                <p className="text-sm text-slate-300">
                  Try different combinations of directions and colors to find
                  the perfect match for your website&apos;s design.
                </p>
              </div>
              <div className="rounded-xl bg-linear-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 p-6">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="text-lg font-bold text-white mb-2">
                  Performance
                </h4>
                <p className="text-sm text-slate-300">
                  The progress bar is optimized and lightweight. It won&apos;t affect
                  your app&apos;s performance.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
