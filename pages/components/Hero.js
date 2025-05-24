'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center pt-20">
      <motion.h1 className="text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-purple-700 bg-clip-text text-transparent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi, I'm Arsh
      </motion.h1>
      <p className="mt-4 text-lg">Developer • Researcher • Innovator</p>
      <div className="mt-6 flex gap-4">
        <Link href="#projects" className="bg-purple-600 px-4 py-2 rounded-xl hover:bg-purple-700">Projects</Link>
        <Link href="#contact" className="border border-purple-500 px-4 py-2 rounded-xl hover:bg-purple-900">Contact</Link>
      </div>
    </section>
  )
}