import Layout, { PageHero } from './Layout';
import Explore from './Explore';

// Initials avatars only: no photos of real people on this site.
const TEAM = [
  { name: 'Xshann', role: 'The Powerhouse Pathfinder', focus: 'Vision and strategy', hue: 200 },
  { name: 'Daos', role: 'The Techno Titan', focus: 'Engineering and platform', hue: 230 },
  { name: 'Sun', role: 'The Design Dominator', focus: 'Product and experience design', hue: 185 },
  { name: 'Bogh', role: 'The Cyber Conqueror', focus: 'Security and data protection', hue: 255 },
];

export default function Team({ path }: { path: string }) {
  return (
    <Layout path={path} title="Core team" description="Meet the XΞDΞUM core team: where passion meets innovation.">
      <PageHero
        eyebrow="XΞDΞUM Core"
        title={<>Where passion <span className="grad">meets innovation.</span></>}
        lead="A small team with complementary strengths. Learn, create, and innovate with us."
      />
      <section className="section section--tight">
        <div className="container">
          <div className="grid grid--4">
            {TEAM.map((m) => (
              <article key={m.name} className="card member">
                <div
                  className="avatar"
                  style={{ background: `linear-gradient(135deg, hsl(${m.hue} 90% 60%), hsl(${m.hue + 30} 80% 40%))` }}
                  aria-hidden="true"
                >
                  {m.name[0]}
                </div>
                <h3>{m.name}</h3>
                <p className="member__role">{m.role}</p>
                <p>{m.focus}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Explore exclude="/core/" />
    </Layout>
  );
}
