import Link from 'next/link';
import Layout from '@/components/Layout';
import Explore from '@/components/Explore';
import { IconArrow, IconClock, IconHeart, IconRoute, IconShield } from '@/components/Icons';

const GOALS = [
  {
    icon: <IconHeart />,
    title: 'A calmer patient journey',
    text: 'Less time lost in corridors and queues. Patients know where to go and how long it will take.',
  },
  {
    icon: <IconClock />,
    title: 'More efficient hospitals',
    text: 'Real-time guidance smooths patient flow, so staff spend their time on care instead of directions.',
  },
  {
    icon: <IconShield />,
    title: 'Trust and privacy by design',
    text: 'Every patient has the right to privacy. Security is built in from the first line of code.',
  },
];

const STEPS = [
  { n: '01', title: 'Arrive', text: 'Open SmartMed® at the entrance. It knows the building and your appointment.' },
  { n: '02', title: 'Get guided', text: 'Step-by-step directions to the right desk, lab, or room, with live wait times.' },
  { n: '03', title: 'Get care', text: 'Spend your visit with doctors, not looking for them. Follow-ups arrive as reminders.' },
];

export default function Home() {
  return (
    <Layout
      path="/"
      title="Home"
      description="X-MED by XΞDΞUM: effortless medical system navigation and care. Find your way through any hospital, with real-time guidance and privacy by design."
    >
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <p className="eyebrow reveal">X-MED · Medical system navigation</p>
            <h1 className="reveal" style={{ animationDelay: '60ms' }}>
              Healthcare, <span className="grad">without the maze.</span>
            </h1>
            <p className="lead reveal" style={{ animationDelay: '120ms' }}>
              Revolutionize healthcare with effortless medical system navigation and care. X-MED guides patients from
              the front door to the right room, and gives hospitals a smoother day.
            </p>
            <div className="actions reveal" style={{ animationDelay: '180ms' }}>
              <Link href="/smartmed/" className="btn btn--primary">
                Explore SmartMed® <IconArrow />
              </Link>
              <Link href="/roadmap/" className="btn btn--ghost">
                See the roadmap
              </Link>
            </div>
          </div>

          <div className="orb reveal" style={{ animationDelay: '120ms' }} aria-hidden="true">
            <div className="orb__ring orb__ring--1" />
            <div className="orb__ring orb__ring--2" />
            <div className="orb__ring orb__ring--3" />
            <div className="orb__core" />
            <div className="chip chip--a"><IconRoute size={16} /> Room 2.14 · 3 min</div>
            <div className="chip chip--b"><IconClock size={16} /> Live wait times</div>
            <div className="chip chip--c"><IconShield size={16} /> Private by design</div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Why X-MED</p>
          <h2 className="section__title">Three goals, one simple experience</h2>
          <div className="grid grid--3">
            {GOALS.map((g) => (
              <article key={g.title} className="card">
                <div className="card__icon">{g.icon}</div>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">How it works</p>
          <h2 className="section__title">From the entrance to the right room</h2>
          <ol className="steps">
            {STEPS.map((s) => (
              <li key={s.n} className="step">
                <span className="step__n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Explore exclude="/smartmed/" />

      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Building the future of care navigation</h2>
              <p>We are looking for hospitals, clinics, and technology partners who want to shape X-MED with us.</p>
            </div>
            <Link href="/partners/" className="btn btn--primary">
              Become a partner <IconArrow />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
