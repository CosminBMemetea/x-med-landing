import Link from 'next/link';
import { IconArrow } from './Icons';

const ITEMS = [
  { href: '/mission/', title: 'Mission', text: 'The purpose behind X-MED and the three goals that guide every decision.' },
  { href: '/smartmed/', title: 'SmartMed®', text: 'The navigation app: from the hospital entrance to the right room, step by step.' },
  { href: '/core/', title: 'Core team', text: 'The people building XΞDΞUM and what each of them brings.' },
  { href: '/roadmap/', title: 'Roadmap', text: 'Where we are, what comes next, and how we plan to launch.' },
  { href: '/partners/', title: 'Partners', text: 'How hospitals, clinics, and technology partners can join in.' },
];

export default function Explore({ exclude }: { exclude?: string }) {
  const items = ITEMS.filter((i) => i.href !== exclude).slice(0, 3);
  return (
    <section className="section">
      <div className="container">
        <h2 className="section__title">Keep exploring</h2>
        <div className="grid grid--3">
          {items.map((i) => (
            <Link key={i.href} href={i.href} className="card card--link">
              <h3>{i.title}</h3>
              <p>{i.text}</p>
              <span className="card__more">Learn more <IconArrow size={16} /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
