import Section from '../components/Section.jsx';

export default function NotFound() {
  return (
    <Section title="404" lead="The page you’re looking for doesn’t exist.">
      <a className="btn" href="/">Go home</a>
    </Section>
  );
}
