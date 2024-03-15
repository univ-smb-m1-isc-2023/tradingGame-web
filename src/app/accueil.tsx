"use client";
import { Button, Typography, Card } from "@material-tailwind/react";

function Accueil() {
  return (
    <div className="relative min-h-screen w-full bg-[url('https://i.insider.com/601448566dfbe10018e00c5d?width=700&format=jpeg&auto=webp')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-400/60" />
      <div className="grid min-h-screen px-12">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <Typography
            placeholder=""
            variant="h1"
            color="gray"
            className="md:max-w-full lg:max-w-8xl font-extrabold text-5xl leading-tight" 
            onPointerEnterCapture="" onPointerLeaveCapture=""        >
            Be the Master of Trading
          </Typography>

          <Typography
            placeholder=""
            variant="lead"
            color="white"
            className="mt-6 mb-10 w-full md:max-w-full lg:max-w-5xl text-lg leading-relaxed"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            Elevate your trading skills and conquer the global stage. Challenge friends and competitors worldwide. Outwit opponents, navigate diverse markets, and ascend the leaderboard. Can you secure your place as the best in the world?
          </Typography>
          <div>
            <Button
              placeholder=""
              variant="gradient"
              color="white"
              className="py-2 px-6 rounded-md text-lg font-semibold"  onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}            >
              PLAY FREE
            </Button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
