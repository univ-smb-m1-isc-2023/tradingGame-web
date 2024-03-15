"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
    UsersIcon,
    ClockIcon,
    GlobeAltIcon,
    TrophyIcon,
    StarIcon,
    UserPlusIcon
} from "@heroicons/react/24/solid";

import BackgroundCard from "@/components/background-card";

interface OptionProps {
    icon: React.ElementType;
    title: string;
    children: React.ReactNode;
}

function Option({ icon: Icon, title, children }: OptionProps) {
    return (
        <div className="flex gap-4">
            <div className="mb-4">
                <Icon className="text-gray-900 h-6 w-6" />
            </div>
            <div>
                <Typography placeholder="" variant="h5" color="blue-gray" className="mb-2"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {title}
                </Typography>
                <Typography placeholder="" className="mb-2 md:w-10/12 font-normal !text-gray-500"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                    {children}
                </Typography>
            </div>
        </div>
    );
}

export function Explications_games() {
    return (
        <section className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 py-10">
            <Typography placeholder="" variant="h1" className="text-center mb-2" color="blue-gray"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Variety of Gaming Experiences
            </Typography>
            <div className="mt-8">
                <div className="grid grid-cols-2 items-center md:grid-cols-2 gap-12 mb-24">
                    <BackgroundCard title="Real Game">
                        Learn from industry professionals with years of hands-on experience
                        in React development.
                    </BackgroundCard>
                    <div className="space-y-8">
                        <div className="my-4">
                            <Option icon={ClockIcon} title="Real-Time Data Connection">
                                Immerse yourself in the dynamic world of real-time data connectivity
                                for an authentic trading experience.
                            </Option>
                        </div>
                        <div className="mb-4 flex gap-4">
                            <Option icon={GlobeAltIcon} title="Global Opponents">
                                Challenge adversaries from around the globe and compete to become the
                                ultimate trading champion.
                            </Option>
                        </div>
                        <Option icon={TrophyIcon} title="Achieve Mastery">
                            Rise to the top and showcase your skills to become the best in the
                            exhilarating realm of real-time trading games.
                        </Option>
                    </div>
                </div>
                <div className="grid grid-cols-2 items-center md:grid-cols-2 gap-12 mb-24">
                    <div className="space-y-16">
                        <div className="my-4">
                            <Option icon={StarIcon} title="Slay Against Friends">
                                Challenge your friends in epic battles and prove your strategic prowess.
                            </Option>
                        </div>
                        <div className="mb-4 flex gap-4">
                            <Option icon={ClockIcon} title="Simulate Years with Real Data">
                                Experience the thrill of a multi-year simulation with real-time data.
                            </Option>
                        </div>
                        <Option icon={UserPlusIcon} title="Create a Party">
                            Gather your allies, form a party, and embark on a journey of conquest!
                        </Option>
                    </div>
                    <BackgroundCard title="Simulate Years">
                        Simulate multiple years, compete with friends, and determine the best
                        player in a short time because you control the pace!
                    </BackgroundCard>
                </div>

            </div>
        </section>
    );
}

export default Explications_games;
