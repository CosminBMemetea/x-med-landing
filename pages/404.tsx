import Link from 'next/link';
import Layout, { PageHero } from '@/components/Layout';

export default function NotFound() {
  return (
    <Layout path="/404/" title="Page not found" description="This page could not be found.">
      <PageHero eyebrow="404" title="Looks like you took a wrong turn." lead="Even the best navigation app needs a valid destination." />
      <div className="container" style={{ paddingBottom: '6rem' }}>
        <Link href="/" className="btn btn--primary">Back to the start</Link>
      </div>
    </Layout>
  );
}
