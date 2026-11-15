import Layout, { PageHero } from '@/components/Layout';
import Explore from '@/components/Explore';
import { IconClock, IconHeart, IconShield } from '@/components/Icons';

const GOALS = [
  {
    icon: <IconHeart />,
    title: 'Improve the patient experience and reduce waiting times',
    text: 'Empower patients with a seamless, stress-free hospital experience. By reducing the time spent navigating the hospital, we create an environment that is supportive and welcoming, focused on comfort and satisfaction.',
  },
  {
    icon: <IconClock />,
    title: 'Increase hospital efficiency and reputation',
    text: 'Hospitals that run smoothly deliver better outcomes. Real-time navigation assistance reduces wait times and streamlines every visit, so patients get the care they need as quickly and easily as possible.',
  },
  {
    icon: <IconShield />,
    title: 'Ensure trust and security in healthcare',
    text: 'Every patient has the right to privacy, and personal data must be protected. Robust security measures build trust with patients and providers, and a more transparent healthcare system for all.',
  },
];

export default function Mission() {
  return (
    <Layout path="/mission/" title="Mission" description="The XΞDΞUM mission: waiting is over. Technology that streamlines healthcare for everyone.">
      <PageHero
        eyebrow="Our mission"
        title={<>Waiting is over. <span className="grad">Care should be simple.</span></>}
        lead="Our technology streamlines healthcare for everyone. Here is the passion and purpose that drives us, and our commitment to simplifying your health journey."
      />
      <section className="section section--tight">
        <div className="container">
          <div className="grid grid--3">
            {GOALS.map((g, i) => (
              <article key={g.title} className="card card--tall">
                <div className="card__icon">{g.icon}</div>
                <span className="card__kicker">Goal {i + 1}</span>
                <h3>{g.title}</h3>
                <p>{g.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section section--alt">
        <div className="container quote">
          <p>&ldquo;Together we build a better future, one where nobody gets lost on the way to care.&rdquo;</p>
          <span>The XΞDΞUM team</span>
        </div>
      </section>
      <Explore exclude="/mission/" />
    </Layout>
  );
}
