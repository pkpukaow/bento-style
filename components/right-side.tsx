"use client"

import { siteConfig } from '@/config/site-config';
import SocialBox from './grid-items/social-box';
import MentorshipBox from './grid-items/mentorship-box';
import ProjectBox from './grid-items/project-box';
import EquipmentsBox from './grid-items/equipments-box';
import GridItem from './grid-item';
import { useAnimate, stagger } from 'framer-motion';
import { useEffect } from 'react';

const staggerDelay = stagger(0.02)

const RightSide = () => {
    const [scope, animate] = useAnimate();

    useEffect(() => {
        if (scope.current) {
            animate("div", {
                opacity: 1,
                y: 0,
                scale: 1,
            }, {
                duration: 0.15,
                type: "spring",
                stiffness: 330,
                damping: 35,
                delay: staggerDelay,
            })
        }

    }, [scope])


    return (
        <div className="flex-1 md:h-full">
            {/* Grid Container */}
            <div ref={scope} className="w-full md:h-full xl:overflow-y-auto p-6 grid grid-cols-2 md:grid-cols-4 auto-rows-[76px] gap-6 xl:gap-10">
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
    )
}

export default RightSide