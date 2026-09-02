import Link from 'next/link';
import { HandHeart } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Inicio' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/cadastro', label: 'Cadastro' },
];

export function Header() {
  return (
    <header className="site-header">
      <nav className="container nav" aria-label="Navegacao principal">
        <Link className="brand" href="/">
          <HandHeart aria-hidden="true" />
          <span>Rede Esperanca Viva</span>
        </Link>
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
