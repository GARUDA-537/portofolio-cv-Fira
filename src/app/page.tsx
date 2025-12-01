import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import ProfileSection from '@/components/ProfileSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import SkillsSection from '@/components/SkillsSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fee5c8] text-[#2C2416] font-sans selection:bg-[#D97706] selection:text-white">
      <Navbar />
      <Hero />
      <Projects />
      <ProfileSection />
      <EducationSection />
      <ExperienceSection />
      <SkillsSection />
      <ContactSection />

      <footer className="py-12 text-center text-[#6B5844] text-sm border-t border-[#E7DED0] bg-[#FEFCF9]">
        <p className="font-medium">© {new Date().getFullYear()} Nayla Syafira. All rights reserved.</p>
      </footer>
    </main>
  );
}
