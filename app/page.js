import Image from 'next/image'
import Link from "next/link";
import StudentInfo from "../app/studentinfo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between flex-col font-mono text-sm lg:flex">
        <h1>CPRG 306: Web Development 2 - Assignments</h1>
        <StudentInfo />
        </div>
        <div>
        <p><Link href="/week2">Week 2</Link></p>
        </div>
    </main>
  )
}
