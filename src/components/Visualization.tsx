import React from 'react';
import { Activity } from 'lucide-react';

export function Visualization() {
  return (
    <div className="bg-black py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-white mb-6">
              Advanced Genetic Visualization
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Watch in real-time as our AI systems analyze and model genetic sequences,
              creating sophisticated neural patterns that mirror human consciousness.
            </p>
            <div className="flex items-center gap-4 text-blue-400">
              <Activity className="w-6 h-6 animate-pulse" />
              <span>Live Processing Visualization</span>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative rounded-xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1633166536750-21e7ad6e76f5?auto=format&fit=crop&q=80"
                alt="AI Visualization"
                className="w-full rounded-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}