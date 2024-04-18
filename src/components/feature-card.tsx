import React from "react";
import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}
export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <Card placeholder="" color="transparent" shadow={false}  onPointerEnterCapture={null} onPointerLeaveCapture={null}>
      <CardBody placeholder="" className="grid place-items-start px-0"  onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <div className="mb-3 grid place-content-center rounded-lg text-left text-blue-gray-900">
          <Icon className="h-6 w-6" />
        </div>
        <Typography placeholder="" variant="h5" color="blue-gray" className="mb-2"  onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {title}
        </Typography>
        <Typography placeholder="" className="text-gray-500 font-normal"  onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}


export default FeatureCard;
