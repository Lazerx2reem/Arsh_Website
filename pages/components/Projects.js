export default function Projects() {
  return (
    <section className="px-4 py-16 max-w-5xl mx-auto" id="projects">
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
      </ul>
    </section>
  )
}