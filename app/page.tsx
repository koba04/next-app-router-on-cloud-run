import Image from 'next/image'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export default async function Home() {
  const todos = await prisma.todo.findMany()
  console.log(todos)
  return (
    <main className="flex flex-col items-center justify-between gap-4 p-24">
      <h1 className="text-6xl">Hello Cloud Run!</h1>
      <section>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} className="flex items-center space-x-4">
              {todo.text}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
