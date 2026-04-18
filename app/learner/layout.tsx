import type { ReactNode } from "react";
import { LearnerNavbar } from "@/components/learner/learner-navbar";
import { LearnerSidebar } from "@/components/learner/learner-sidebar";

export default function LearnerLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--slate-50)]">
      <LearnerNavbar />
      <div className="pt-16">
        <div className="min-h-[calc(100vh-64px)] lg:grid lg:grid-cols-[15rem_minmax(0,1fr)]">
          <LearnerSidebar />
          <main className="min-w-0 flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}
