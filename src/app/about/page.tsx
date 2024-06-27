import Button from '@/components/Button'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">Welcome to Best Boilerplate in 2024</h1>
          <p className="text-lg text-center">A Next.js boilerplate with Shadcn, TypeScript, Tailwind and more!</p>
          <Link href={'/'}>
            <Button variant={'default'}>Home</Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
