import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold text-purple-400">Arsh's Portfolio</h1>
        <div className="space-x-6">
          <Link href="#about" className="hover:text-purple-400">About</Link>
          <Link href="#projects" className="hover:text-purple-400">Projects</Link>
          <Link href="#contact" className="hover:text-purple-400">Contact</Link>
        </div>
      </div>
    </nav>
  )
}