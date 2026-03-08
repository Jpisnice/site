import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/demo')({
  component: Demo,
})

function Demo() {
  return (
    <main className="page-wrap flex min-h-[60vh] flex-col items-center justify-center px-4 py-16">
      <h1 className="display-title text-2xl font-semibold text-foreground">
        Demo
      </h1>
      <p className="mt-2 text-sm text-muted-foreground">
        This page is intentionally left blank.
      </p>
    </main>
  )
}
