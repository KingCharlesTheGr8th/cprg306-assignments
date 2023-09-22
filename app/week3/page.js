import ItemList from "./item-list";
import Link from "next/link";

export default function Main() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between flex-col font-mono text-sm lg:flex">
          <h1>My Shopping List!</h1>
          </div>
          <div>
          <ItemList />
          </div>
          <div className="z-10 max-w-5xl w-full items-center justify-between flex-col font-mono text-sm lg:flex">
            
            </div>
            <div>
            <Link href="./">Back</Link>
          </div>
      </main>
    )
  }
  