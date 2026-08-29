// src/pages/AiAutomation.tsx

import ServicesNavbar from '../components/services-navbar';
import Footer from '../components/footer';
import SEO from '../components/SEO';
import AiAutomationPage from '../Sections/AiAutomationpage';
import { useScrollContainer } from '../contexts/ScrollContext';

export default function AiAutomation() {
  const { mainRef } = useScrollContainer();
  return (
    <>
      <SEO
        title="AI & Automation"
        description="AI and business process automation from TelDev Technologies — automation opportunity assessment, workflow automation, system integration and AI-assisted systems, with every automation given a defined boundary, owner and failure alert."
        path="/AiAutomation"
      />
      <ServicesNavbar />
      <main ref={mainRef}>
        <AiAutomationPage />
      </main>
      <Footer />
    </>
  );
}
