"use client";

import React from "react";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  CheckBadgeIcon,
  InboxIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "@/components/feature-card";
import { FaChartLine, FaUsers, FaRegLightbulb } from 'react-icons/fa';

const FEATURES = [
    {
        icon: FaChartLine,
        title: "Real Simulation & Data",
        description:
          "Experience real market simulation and work with authentic financial data.",
      },
      {
        icon: FaUsers,
        title: "Play with Your Friends",
        description:
          "Engage in friendly competition by trading against your friends in the virtual market.",
      },
      {
        icon: FaRegLightbulb,
        title: "Easy to Learn",
        description: "User-friendly interface designed for a seamless learning experience.",
      },
    ];

export function Explications() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto grid grid-cols-2 place-items-center lg:grid-cols-3">
        <div className="col-span-1 rounded-xl lg:mb-0 mb-12">
          <Image
            width={500}
            height={500}
            src="https://img.freepik.com/free-photo/stock-trading-workplace_1409-5562.jpg"
            className="h-full-[300px] max-h-[300px] w-full object-cover scale-110 rounded-xl"
            alt="trading"
          />
        </div>
        <div className="col-span-2 lg:pl-32">
          <Typography placeholder="" variant="h2" color="blue-gray" className="mb-4"  onPointerEnterCapture={null} onPointerLeaveCapture={null}>
            What is the Game ? 
          </Typography>
          <Typography
            placeholder=""
            variant="lead"
            className="mb-5 max-w-lg px-4 text-left text-lg !text-gray-500 lg:px-0  "  onPointerEnterCapture={null} onPointerLeaveCapture={null}          >
            Embark on your financial journey with an initial capital, strategically invest in favorable opportunities, and aim to outperform your competitors to accumulate wealth. 
          </Typography>

          <div className="col-span-2 grid grid-cols-1 gap-10 sm:grid-cols-3 ">
            {FEATURES.map(({ icon, title, description }) => (
              <FeatureCard key={title} icon={icon} title={title}>
                {description}
              </FeatureCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Explications;
