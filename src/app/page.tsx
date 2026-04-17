import SplashCursor from '@/components/ui/SplashCursor';
import PillNav from '@/components/ui/PillNav';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import AchievementsSection from '@/components/sections/AchievementsSection';
import CommunitySection from '@/components/sections/CommunitySection';
import TechStackSection from '@/components/sections/TechStackSection';
import ConnectSection from '@/components/sections/ConnectSection';
import {
  extractReadmeExcerpt,
  getFeaturedRepositories,
  getGitHubProfile,
  getProfileReadme
} from '@/lib/github';
import { featuredRepoNames, navItems, portfolio } from '@/lib/portfolio-data';

export const revalidate = 3600;

const Home = async () => {
  const [repos, profile, readme] = await Promise.all([
    getFeaturedRepositories(portfolio.githubUsername, featuredRepoNames),
    getGitHubProfile(portfolio.githubUsername),
    getProfileReadme(portfolio.githubUsername)
  ]);

  const githubReadmeExcerpt = extractReadmeExcerpt(readme);
  const avatarUrl = profile?.avatar_url ?? `https://github.com/${portfolio.githubUsername}.png`;

  return (
    <main className="min-h-screen">
      <SplashCursor
        RAINBOW_MODE={false}
        COLOR="#67e8f9"
        COLOR_INTENSITY={0.08}
        OVERLAY_OPACITY={0.14}
        SPLAT_FORCE={3200}
        SPLAT_RADIUS={0.14}
        DENSITY_DISSIPATION={4.5}
        VELOCITY_DISSIPATION={2.7}
        COLOR_UPDATE_SPEED={6}
      />
      <PillNav items={navItems} />

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
        <HeroSection avatarUrl={avatarUrl} />
        <AboutSection />
        <ProjectsSection repos={repos} />
        <AchievementsSection />
        <CommunitySection />
        <TechStackSection />
        <ConnectSection githubProfile={profile} githubReadmeExcerpt={githubReadmeExcerpt} />

        <footer className="mt-4 border-t border-slate-200/70 py-8 text-center text-sm text-slate-600">
          Built with Next.js, Tailwind CSS, Framer Motion, and Lucide React.
        </footer>
      </div>
    </main>
  );
};

export default Home;
