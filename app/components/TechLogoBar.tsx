'use client';

import Image from 'next/image';
import { InfiniteSlider } from './InfiniteSlider';

const TOOLS = [
  { name: 'ChatGPT',          src: '/logos/ChatGPT.png'          },
  { name: 'Claude',           src: '/logos/Claude.png'           },
  { name: 'Gemini',           src: '/logos/Gemini.png'           },
  { name: 'Gmail',            src: '/logos/Gmail.png'            },
  { name: 'Google Kalender',  src: '/logos/Google Kalender.png'  },
  { name: 'Google Workspace', src: '/logos/Google Workspace.png' },
  { name: 'n8n',              src: '/logos/n8n.png'              },
  { name: 'Notion',           src: '/logos/Notion.png'           },
];

export function TechLogoBar() {
  return (
    <section className="py-14 border-y" style={{ borderColor: 'rgba(255,255,255,0.06)' }}>

      <p className="text-center text-[11px] font-semibold tracking-[0.2em] uppercase text-white mb-8">
        Integriert mit den Tools, die du bereits kennst
      </p>

      <div className="[mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <InfiniteSlider gap={120} duration={40} durationOnHover={80}>
          {TOOLS.map(({ name, src }) => (
            <div key={name} className="flex items-center gap-2 select-none">
              <Image
                src={src}
                alt={name}
                width={28}
                height={28}
                className="object-contain flex-shrink-0"
                style={{ width: 28, height: 28 }}
              />
              <span className="text-sm text-white/60 whitespace-nowrap">{name}</span>
            </div>
          ))}
        </InfiniteSlider>
      </div>

    </section>
  );
}
