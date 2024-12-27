import React from 'react';
import { Brain, Dna, Cpu, Network } from 'lucide-react';

const features = [
  {
    icon: <Dna className="w-6 h-6" />,
    title: 'DNA Sequence Modeling',
    description: 'Advanced AI algorithms simulate and analyze genetic sequences with unprecedented accuracy'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Neural Pattern Synthesis',
    description: 'Mapping consciousness patterns to create more human-like AI responses'
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Quantum Processing',
    description: 'Leveraging quantum computing principles for complex genetic computations'
  },
  {
    icon: <Network className="w-6 h-6" />,
    title: 'Neural Network Evolution',
    description: 'Self-improving AI systems that evolve based on genetic algorithms'
  }
];

export function Features() {
  return (
    <div className="bg-gray-900 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Core Technologies</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Pushing the boundaries of AI and genetic research through innovative technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-gray-800 hover:bg-gray-750 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-blue-600/20 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}