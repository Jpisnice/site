import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 border-b border-border/60 bg-background/80 px-4 backdrop-blur-md"
      role="banner"
    >
      <nav className="page-wrap flex items-center justify-between gap-4 py-3 sm:py-3.5">
        <Link
          to="/"
          className="display-title text-lg font-semibold tracking-tight text-foreground no-underline hover:text-primary sm:text-xl"
        >
          Konkani AI
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
