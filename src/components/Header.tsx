import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [
    { to: '/event', label: 'ステージ企画' },
    { to: '/navigation', label: '場所' },
    { to: '/exhibits', label: '展示' },
    { to: '/bushi', label: '部誌' },
  ];

  return (
    <>
      <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-3">
        <img src="/logo.png" alt="ロゴ" className="h-10 w-10 object-contain" />
        <img src="/npca_1_0.png" alt="NPCA" className="h-8 w-auto object-contain" />
      </div>

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-ink-200">
        <nav className="max-w-3xl mx-auto px-6 py-3 flex flex-wrap items-center justify-between">
          <div className="flex w-full items-center justify-between gap-4">
            <Link to="/" className="text-ink-900 font-bold text-sm hover:no-underline">
              灘校パソコン研究部 文化祭2027特設サイト
            </Link>

            <button
              type="button"
              className="md:hidden shrink-0 p-2 text-ink-700"
              aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setIsMenuOpen((open) => !open)}
            >
              <span className="flex h-5 w-6 flex-col justify-between">
                <span className={`h-0.5 w-full rounded bg-current transition-transform duration-200 ${isMenuOpen ? 'translate-y-[9px] rotate-45' : ''}`} />
                <span className={`h-0.5 w-full rounded bg-current transition-opacity duration-200 ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`h-0.5 w-full rounded bg-current transition-transform duration-200 ${isMenuOpen ? '-translate-y-[9px] -rotate-45' : ''}`} />
              </span>
            </button>

            <ul className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-ink-600 hover:text-ink-900 text-sm hover:no-underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <ul
            id="mobile-navigation"
            aria-hidden={!isMenuOpen}
            className={`w-full overflow-hidden border-t md:hidden transition-[max-height,opacity,transform,margin,padding] duration-300 ease-in-out ${
              isMenuOpen
                ? 'max-h-60 border-ink-200 pt-2 mt-3 opacity-100 translate-y-0'
                : 'max-h-0 border-transparent pt-0 mt-0 opacity-0 -translate-y-2 pointer-events-none'
            }`}
          >
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  tabIndex={isMenuOpen ? undefined : -1}
                  className="block py-2 text-ink-600 hover:text-ink-900 text-sm hover:no-underline"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
