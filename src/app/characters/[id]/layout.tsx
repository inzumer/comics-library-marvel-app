/** Resources */
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Characters',
  description: 'Explore the Marvel universe through its iconic characters. From the legendary Avengers to the most feared villains, dive into their stories, powers, and fun facts—all in one place.',
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
};
