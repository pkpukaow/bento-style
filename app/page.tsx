import GridItem from "@/components/grid-item";
import EquipmentsBox from "@/components/grid-items/equipments-box";
import MentorshipBox from "@/components/grid-items/mentorship-box";
import ProjectBox from "@/components/grid-items/project-box";
import SocialBox from "@/components/grid-items/social-box";
import ThemeToggle from "@/components/theme-toggle";
import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10">
      {/* Left Side */}
      <div className="flex-1 h-full max-w-md p-8">
        <div className="flex flex-col h-full space-y-6 rounded-md">
          {/* Avatar */}
          <Image
            className="rounded-full"
            src="/avatar-img.jpg"
            width={120}
            height={120}
            alt="avatar"
            priority
            loading="eager"
          />
          {/* Bio */}
          <div>
            <div className="font-semibold text-primary">{siteConfig.title}</div>
            <h1 className="mt-2 text-3xl font-bold">{siteConfig.creator}</h1>
            <p className="text-xl font-light text-neutral-500">
              {siteConfig.bio}
            </p>
          </div>
          {/* Buttons Container */}
          <div className="flex items-center justify-between gap-6">
            <a
              target="_blank"
              className="flex items-center w-full gap-2 px-3 py-2 border rounded-md border-neutral-200 dark:border-neutral-700"
              href={siteConfig.locationLink}
            >
              <MapPin size={16} />
              {siteConfig.location}
            </a>
            <a
              target="_blank"
              className="flex items-center w-full gap-2 px-3 py-2 border rounded-md border-neutral-200 dark:border-neutral-700"
              href={`mailto:${siteConfig.email}`}
            >
              <Mail size={16} />
              Contact Me
            </a>
          </div>
          {/* Footer */}
          <div className="flex justify-between pt-6 text-xs border-t border-neutral-200 dark:border-neutral-800">
            <div className="text-neutral-500">
              Built by @pkpukaow | ©2023 pkpukaow. All Rights Reserved
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1 h-full p-6">
        {/* Grid Container */}
        <div className="w-full h-full overflow-y-auto p-6 grid grid-cols-4 auto-rows-[76px] gap-10">
          {/* Grid Items */}
          {siteConfig.items.map((item, idx) => {
            return (
              <GridItem size={item.layout} key={item.title + idx}>
                {item.type === "social" ? (
                  <SocialBox item={item} />
                ) : item.type === "mentor" ? (
                  <MentorshipBox item={item} />
                ) : item.type === "project" ? (
                  <ProjectBox item={item} />
                ) : item.type === "equipment" ? (
                  <EquipmentsBox item={item} />
                ) : (
                  <div>Not Created Yet</div>
                )}
              </GridItem>
            );
          })}
        </div>
      </div>
    </main>
  );
}
