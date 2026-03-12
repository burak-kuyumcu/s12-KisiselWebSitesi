import Hero from '../sections/Hero';
import Skills from '../sections/Skills';
import Projects from '../sections/Projects';
import Profile from '../sections/Profile';
import Footer from '../sections/Footer';

import ModeSwitch from '../ui/ModeSwitch';
import PageDecorations from '../ui/PageDecorations';

export default function HomePage() {
  return (
    <div>
      <ModeSwitch />
      <PageDecorations />

      <Hero />
      <Skills />
      <Projects />
      <Profile />
      <Footer />
    </div>
  );
}