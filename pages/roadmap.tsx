import Layout, { PageHero } from '@/components/Layout';
import Explore from '@/components/Explore';

const PHASES = [
  {
    name: 'Phase 1',
    title: 'Pre-development',
    when: 'Months 1–3',
    items: ['Assemble a core team of developers and designers', 'Train the team', 'Research user needs and the competition', 'Detailed plan with milestones', 'Secure funding and resources'],
  },
  {
    name: 'Phase 2',
    title: 'Development',
    when: 'Months 4–18',
    items: ['Build the core navigation app', 'Apply AI, cloud, and IoT to the experience', 'Rigorous testing for reliability and security', 'Improve continuously from user feedback', 'Integrate with partner hospitals'],
  },
  {
    name: 'Phase 3',
    title: 'Launch and growth',
    when: 'Months 19–24',
    items: ['Public launch of X-MED', 'Marketing campaign to drive adoption', 'Monitor feedback and iterate', 'Expand to healthcare institutions globally', 'Explore new technologies'],
  },
];

const MILESTONES = [
  { stage: 'Stage I', date: '15 April 2023', text: 'Assemble the core team of great developers and designers.' },
  { stage: 'Stage II', date: '30 April 2023', text: 'Develop and run a comprehensive training program for the team.' },
  { stage: 'Stage III', date: '15 May 2023', text: 'Create a detailed project plan, including timelines and milestones.' },
  { stage: 'Stage IV', date: '31 May 2023', text: 'Conduct market research to identify user needs and the competition.' },
  { stage: 'Stage V', date: '15 June 2023', text: 'Secure the necessary funding and resources.' },
  { stage: 'Stage VI', date: '30 June 2023', text: "Finalize the app's design and development plan." },
  { stage: 'Stage VII', date: '15 July 2023', text: 'Begin executing the plan with the best team ever.' },
];

export default function Roadmap() {
  return (
    <Layout path="/roadmap/" title="Roadmap" description="The X-MED roadmap: pre-development, development, and launch of a medical system navigation app.">
      <PageHero
        eyebrow="Roadmap"
        title={<>From idea to <span className="grad">every hospital.</span></>}
        lead="Three phases over 24 months, and the milestones that get us there."
      />
      <section className="section section--tight">
        <div className="container grid grid--3">
          {PHASES.map((p) => (
            <article key={p.name} className="card phase">
              <div className="phase__head">
                <span className="pill">{p.name}</span>
                <span className="phase__when">{p.when}</span>
              </div>
              <h3>{p.title}</h3>
              <ul className="ticks">
                {p.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">Milestones</p>
          <h2 className="section__title">Phase 1, stage by stage</h2>
          <ol className="timeline">
            {MILESTONES.map((m) => (
              <li key={m.stage} className="timeline__item">
                <div className="timeline__dot" aria-hidden="true" />
                <div className="timeline__card">
                  <div className="timeline__meta">
                    <span className="pill">{m.stage}</span>
                    <time>{m.date}</time>
                  </div>
                  <p>{m.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <Explore exclude="/roadmap/" />
    </Layout>
  );
}
