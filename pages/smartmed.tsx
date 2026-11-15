import Layout, { PageHero } from '@/components/Layout';
import Explore from '@/components/Explore';
import { IconAccess, IconBell, IconChip, IconClock, IconRoute, IconShield } from '@/components/Icons';

const FEATURES = [
  { icon: <IconRoute />, title: 'Step-by-step indoor navigation', text: 'Turn-by-turn directions inside the hospital, from the entrance to the exact desk, lab, or room.' },
  { icon: <IconClock />, title: 'Live queues and wait times', text: 'See how long each department will take before you get there, and get told when it is your turn.' },
  { icon: <IconBell />, title: 'Appointment reminders', text: 'Gentle reminders for visits, tests, and follow-ups, with directions ready when you arrive.' },
  { icon: <IconAccess />, title: 'Accessible routes', text: 'Step-free paths, elevators, and quieter corridors for patients who need them.' },
  { icon: <IconChip />, title: 'AI, cloud, and IoT', text: 'Indoor positioning and smart routing that adapt to how the hospital is running right now.' },
  { icon: <IconShield />, title: 'Private by design', text: 'Minimal data, strong encryption, and nothing sold. Patients stay in control.' },
];

export default function SmartMed() {
  return (
    <Layout path="/smartmed/" title="SmartMed®" description="SmartMed® by XΞDΞUM: indoor hospital navigation with live wait times, reminders, and accessible routes. Private by design.">
      <PageHero
        eyebrow="SmartMed®"
        title={<>Your guide through <span className="grad">every hospital.</span></>}
        lead="SmartMed® is the X-MED app: it knows the building, your appointment, and the fastest way there."
      />
      <section className="section section--tight">
        <div className="container split">
          <div className="phone" aria-hidden="true">
            <div className="phone__notch" />
            <div className="phone__screen">
              <div className="phone__bar"><span>SmartMed®</span><span>9:41</span></div>
              <div className="phone__card phone__card--hl">
                <small>Next appointment</small>
                <strong>Cardiology · Room 2.14</strong>
                <span>Floor 2 · East wing</span>
              </div>
              <div className="phone__map">
                <svg viewBox="0 0 200 140" width="100%" height="100%">
                  <rect x="8" y="8" width="184" height="124" rx="12" fill="none" stroke="rgba(141,235,246,.25)" />
                  <path d="M30 120 V70 H110 V30 H170" fill="none" stroke="#21A8F4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="8 8" className="route" />
                  <circle cx="30" cy="120" r="7" fill="#8DEBF6" />
                  <circle cx="170" cy="30" r="9" fill="#21A8F4" stroke="#fff" strokeWidth="3" />
                </svg>
              </div>
              <div className="phone__row"><span>Walk</span><strong>3 min</strong></div>
              <div className="phone__row"><span>Queue</span><strong>2 people ahead</strong></div>
            </div>
          </div>
          <div className="grid grid--2">
            {FEATURES.map((f) => (
              <article key={f.title} className="feature">
                <div className="card__icon">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Explore exclude="/smartmed/" />
    </Layout>
  );
}
