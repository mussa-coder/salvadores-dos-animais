'use client';

import { usePathname } from 'next/navigation';
import { HandHeart, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/cadastro', label: 'Cadastro' },
  { href: '/feedback', label: 'Feedback' },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegacao principal">
        <a className="brand" href="/" onClick={() => setMenuOpen(false)}>
          <HandHeart aria-hidden="true" />
          <span>Salvadores dos Animais</span>
        </a>
        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
        <ul className={menuOpen ? 'is-open' : undefined} id="primary-navigation">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                aria-current={pathname === item.href ? 'page' : undefined}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
