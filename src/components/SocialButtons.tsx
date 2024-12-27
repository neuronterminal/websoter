import React from 'react';
import { Github, Twitter } from 'lucide-react';
import { DexScreenerLogo } from './icons/DexScreenerLogo';

const socialLinks = [
  {
    href: 'https://github.com/genevra-ai/genevra',
    label: 'GitHub',
    icon: Github
  },
  {
    href: 'https://x.com/genevrasol',
    label: 'X (Twitter)',
    icon: Twitter
  },
  {
    href: 'https://dexscreener.com',
    label: 'DEXScreener',
    icon: DexScreenerLogo
  }
];

export function SocialButtons() {
  return (
    <div className="flex gap-6">
      {socialLinks.map(({ href, label, icon: Icon }) => (
        <a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 bg-blue-600 hover:bg-blue-700 rounded-full transition-all group"
          aria-label={label}
        >
          <Icon className="w-7 h-7 group-hover:scale-110 transition-transform" />
        </a>
      ))}
    </div>
  );
}