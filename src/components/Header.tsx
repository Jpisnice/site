import { useState } from 'react'
import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'
import { Logo } from './Logo'

export default function Header() {
  const [logoHovered, setLogoHovered] = useState(false)

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 px-4 backdrop-blur-md"
      role="banner"
    >
      <nav className="page-wrap flex items-center justify-between gap-4 py-3 sm:py-3.5">
        <Link
          to="/"
          aria-label="Ulaita – Home"
          className="inline-flex items-center text-foreground no-underline hover:text-primary"
          onMouseEnter={() => setLogoHovered(true)}
          onMouseLeave={() => setLogoHovered(false)}
        >
          <Logo
            isHovered={logoHovered}
            className="h-6 w-auto sm:h-7"
          />
        </Link>
        <div className="flex items-center gap-3">
          <Link
            to="/demo"
            className="nav-link text-sm font-medium"
            activeProps={{ className: 'nav-link is-active text-sm font-medium' }}
          >
            Demo
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
