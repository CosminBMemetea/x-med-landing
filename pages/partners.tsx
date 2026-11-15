import Layout, { PageHero } from '@/components/Layout';
import Explore from '@/components/Explore';
import { IconArrow, IconBuilding, IconChip, IconUsers } from '@/components/Icons';
import { REPO_URL } from '@/lib/site';

const TYPES = [
  { icon: <IconBuilding />, title: 'Hospitals and clinics', text: 'Pilot X-MED in your buildings. Shorter queues, calmer patients, and staff freed from giving directions.' },
  { icon: <IconUsers />, title: 'Healthcare networks', text: 'Bring one consistent navigation experience to every site in your network.' },
  { icon: <IconChip />, title: 'Technology partners', text: 'Indoor positioning, scheduling, and health IT providers who want to integrate with SmartMed®.' },
];

export default function Partners() {
  return (
    <Layout path="/partners/" title="Partners" description="Partner with XΞDΞUM: hospitals, clinics, healthcare networks, and technology partners shaping X-MED.">
      <PageHero
        eyebrow="Partners"
        title={<>Empower your <span className="grad">healthcare experience.</span></>}
        lead="Hospitals, clinics, and technology partners help shape X-MED. Here is how you can join."
      />
      <section className="section section--tight">
        <div className="container grid grid--3">
          {TYPES.map((t) => (
            <article key={t.title} className="card">
              <div className="card__icon">{t.icon}</div>
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="cta">
            <div>
              <h2>Interested in partnering?</h2>
              <p>Start a conversation on GitHub. This site has no contact forms and collects no data.</p>
            </div>
            <a className="btn btn--primary" href={`${REPO_URL}/issues`} target="_blank" rel="noopener noreferrer">
              Open a discussion <IconArrow />
            </a>
          </div>
        </div>
      </section>
      <Explore exclude="/partners/" />
    </Layout>
  );
}
