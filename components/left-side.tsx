import { siteConfig } from "@/config/site-config";
import { Mail, MapPin } from "lucide-react";
import Image from "next/image";
import Footer from "./footer";


const LeftSide = () => {
    return (
        <div className="w-full h-full px-8 pt-8 xl:p-8 xl:max-w-md">
            <div className="flex flex-col w-full h-full space-y-6 rounded-md">
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
                <div className="hidden xl:flex">
                    <Footer />
                </div>
            </div>
        </div>
    )
}

export default LeftSide