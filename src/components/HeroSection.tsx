import React from 'react';
import { Dna } from 'lucide-react';
import { SocialButtons } from './SocialButtons';

export function HeroSection() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated background effect */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-800 animate-pulse" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80')] bg-cover opacity-30 mix-blend-overlay" />
      </div>

      <div className="relative container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="relative">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Genevra
            </h1>
            <Dna className="absolute -top-12 left-1/2 -translate-x-1/2 w-8 h-8 text-blue-400 animate-pulse" />
          </div>
          
          <p className="text-2xl max-w-3xl text-gray-300 leading-relaxed">
            Exploring the simulation of human consciousness in machines
          </p>

          <SocialButtons />
        </div>
      </div>
    </div>
  );
}