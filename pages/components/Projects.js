export default function Projects() {
  return (
    <section className="px-4 py-24 max-w-5xl mx-auto" id="projects">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <ul className="space-y-8">
        <li className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-400">QLink: A Quantum-Safe Crypto Bridge</h3>
          <p className="mt-2">A Layer 3 bridge using post-quantum cryptography and quantum key distribution to secure cross-chain communication.</p>
        </li>
        <li className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-400">Blocksupply: Decentralized Supply Chain Verification</h3>
          <p className="mt-2">A blockchain-based app for verifying product authenticity using QR codes and decentralized storage.</p>
        </li>
        <li className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-400">Roguepy: Procedural Dungeon Game</h3>
          <p className="mt-2">A Python-based roguelike game with procedural generation and a save system, built using tcod and inspired by classic dungeon crawlers.</p>
        </li>
        <li className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-400">Schedulr: Smart Course Scheduler</h3>
          <p className="mt-2">A Java application that optimizes course planning for students by handling prerequisites, conflicts, and credit limits using constraint solving.</p>
        </li>
        <li className="bg-gray-900 p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold text-purple-400">FactCheckr: Fake News Detection System</h3>
          <p className="mt-2">A machine learning model trained to classify news as real or fake using NLP and vector space techniques, grounded in discrete math concepts.</p>
        </li>
      </ul>
    </section>
  )
}