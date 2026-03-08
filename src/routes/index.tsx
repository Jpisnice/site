import { Link } from '@tanstack/react-router'
import { createFileRoute } from '@tanstack/react-router'
import { Badge } from '#/components/ui/badge'
import { buttonVariants } from '#/components/ui/button'
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '#/components/ui/card'
import { Separator } from '#/components/ui/separator'
import { cn } from '#/lib/utils'

export const Route = createFileRoute('/')({ component: Landing })

const KEY_FEATURES = [
  {
    title: 'Konkani only',
    description:
      'Every conversation stays in Konkani. No language switching — built for Konkani-speaking customers and teams.',
  },
  {
    title: '24/7 availability',
    description:
      'Automated voice agents answer calls anytime. Scale support without adding headcount or overtime.',
  },
  {
    title: 'No-code & API',
    description:
      'Configure flows in the dashboard or integrate live voice into your apps and CRMs via API.',
  },
  {
    title: 'Deploy in minutes',
    description:
      'Go live quickly. Pre-built Konkani flows and templates so you can launch without lengthy setup.',
  },
]

const BUSINESS_OUTCOMES = [
  {
    index: '01',
    title: 'Reduce wait times',
    description:
      'Handle more calls simultaneously. Customers get answers immediately instead of waiting in queue.',
  },
  {
    index: '02',
    title: 'Scale without hiring',
    description:
      'Grow call volume without proportional cost. One AI assistant can handle thousands of conversations.',
  },
  {
    index: '03',
    title: 'Reach Konkani speakers',
    description:
      'Serve a language-first experience. Build trust and accessibility for Konkani-speaking audiences.',
  },
  {
    index: '04',
    title: 'Faster time to value',
    description:
      'Launch in days, not months. No custom language models or long integration cycles.',
  },
]

const USE_CASES = [
  { title: 'Customer support', detail: 'Answer FAQs, triage issues, and escalate when needed.' },
  { title: 'Appointments & bookings', detail: 'Schedule and confirm appointments in Konkani.' },
  { title: 'Lead qualification', detail: 'Capture and qualify leads via natural conversation.' },
]

function Landing() {
  return (
    <main className="flex flex-col" role="main">
      {/* Hero */}
      <header
        className="section-bleed editorial-hero relative overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="pointer-events-none absolute -right-[10%] top-1/4 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,var(--hero-a),transparent_70%)]" />
        <div className="grain-overlay rounded-[2rem]" aria-hidden />

        <div className="rise-in relative mx-auto flex max-w-[1080px] flex-col gap-8 pt-10 pb-20 sm:pt-16">
          <div
            className="editorial-badge-strip rise-in"
            style={{ animationDelay: '80ms' }}
          >
            <Badge variant="secondary" className="font-medium">
              Konkani only
            </Badge>
            <Badge variant="outline">Live</Badge>
            <Badge variant="outline">AI</Badge>
          </div>

          <div
            className="rise-in flex flex-col gap-6"
            style={{ animationDelay: '160ms' }}
          >
            <p className="island-kicker mt-2">Voice assistants</p>
            <h1
              id="hero-heading"
              className="display-title editorial-headline text-foreground"
            >
              AI call assistants in{' '}
              <span className="editorial-headline-accent">Konkani.</span>
            </h1>
            <Separator className="decorative-rule" />
            <p className="editorial-lead">
              Live, automated voice agents that speak only Konkani. Deploy in
              minutes for support, bookings, and any call flow — no code required.
            </p>
          </div>

          <div
            className="rise-in flex flex-wrap gap-3"
            style={{ animationDelay: '280ms' }}
          >
            <Link
              to="/demo"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex'
              )}
            >
              Try demo
            </Link>
            <a
              href="#features"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'inline-flex'
              )}
            >
              Key features
            </a>
          </div>
        </div>
      </header>

      {/* Key features */}
      <section
        id="features"
        className="section-bleed py-16 sm:py-24"
        aria-labelledby="features-heading"
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="rise-in mb-10 flex flex-col gap-3 sm:mb-14">
            <h2 id="features-heading" className="section-title">
              Key features
            </h2>
            <p className="section-intro">
              Everything you need to run Konkani-first voice experiences at scale.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {KEY_FEATURES.map((item, i) => (
              <Card
                key={item.title}
                className="rise-in border-border/80 bg-card/90 backdrop-blur-sm"
                style={{ animationDelay: `${120 + i * 80}ms` }}
              >
                <CardHeader className="gap-2">
                  <CardTitle className="text-base font-semibold text-foreground">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Business improvements */}
      <section
        id="business"
        className="section-bleed border-t border-border bg-muted/30 py-16 sm:py-24"
        aria-labelledby="business-heading"
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="rise-in mb-10 flex flex-col gap-3 sm:mb-14">
            <h2 id="business-heading" className="section-title">
              Built for business
            </h2>
            <p className="section-intro">
              Real outcomes: lower cost, better reach, and faster deployment.
            </p>
          </div>

          <ul className="outcome-list rise-in" style={{ animationDelay: '120ms' }}>
            {BUSINESS_OUTCOMES.map((item) => (
              <li key={item.index} className="outcome-item" data-index={item.index}>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Use cases */}
      <section
        id="use-cases"
        className="section-bleed py-16 sm:py-24"
        aria-labelledby="use-cases-heading"
      >
        <div className="mx-auto max-w-[1080px]">
          <div className="rise-in mb-10 flex flex-col gap-3 sm:mb-14">
            <h2 id="use-cases-heading" className="section-title">
              Use cases
            </h2>
            <p className="section-intro">
              From support to sales — one platform, multiple workflows.
            </p>
          </div>

          <div className="use-case-grid rise-in" style={{ animationDelay: '120ms' }}>
            {USE_CASES.map((item) => (
              <article
                key={item.title}
                className="use-case-card"
              >
                <h3 className="mb-1.5 text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="m-0 text-sm text-muted-foreground">
                  {item.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-bleed cta-strip rise-in py-14 sm:py-16"
        aria-labelledby="cta-heading"
      >
        <div className="relative mx-auto flex max-w-[1080px] flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-1">
            <h2 id="cta-heading" className="cta-strip-heading display-title text-2xl font-semibold sm:text-3xl">
              Try the demo
            </h2>
            <p className="cta-strip-muted text-sm">
              Sample Konkani AI call assistant — no sign-up required.
            </p>
          </div>
          <Link
            to="/demo"
            className={cn(buttonVariants({ size: 'lg' }), 'cta-strip-btn inline-flex shadow-md')}
          >
            Open demo
          </Link>
        </div>
      </section>
    </main>
  )
}
