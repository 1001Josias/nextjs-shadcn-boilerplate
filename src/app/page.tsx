import Button from '@/components/Button'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <main className="flex flex-col items-center justify-between p-24">
        <div className="flex flex-col items-center space-y-8">
          <h1 className="text-4xl font-bold tracking-tight text-center">Welcome to Best Boilerplate in 2024</h1>
          <Link href={'/about'}>
            <Button variant={'default'}>See more</Button>
          </Link>
        </div>
      </main>
    </>
  )
}
