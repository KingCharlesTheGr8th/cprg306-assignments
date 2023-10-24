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
        <p><Link href="/week2">Week 2: Literally Just An Import</Link></p>
        <p><Link href="/week3">Week 3: The Shopping List Adventure Begins</Link></p>
        <p><Link href="/week4">Week 4: Put It On The List</Link></p>
        <p><Link href="/week5">Week 5: Sorting Out the Sorts</Link></p>
		<p><Link href="/week6">Week 6: To State Or Not To State</Link></p>
        </div>
    </main>
  )
}
