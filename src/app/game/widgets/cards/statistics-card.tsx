import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

interface StatisticsCardProps {
  color?: string;
  icon: React.ReactNode;
  title: React.ReactNode;
  value: React.ReactNode;
  footer?: React.ReactNode;
}

export const StatisticsCard: React.FC<StatisticsCardProps> = ({
  color = "blue",
  icon,
  title,
  value,
  footer,
}) => {
  return (
    <Card className="border border-blue-gray-100 shadow-sm"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
      <CardHeader
        variant="gradient"
        color={"blue"}
        floated={false}
        shadow={false}
        className="absolute grid h-12 w-12 place-items-center"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}      >
        {icon}
      </CardHeader>
      <CardBody className="p-4 text-right"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <Typography variant="small" className="font-normal text-blue-gray-600"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {title}
        </Typography>
        <Typography variant="h4" color="blue-gray"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {value}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 p-4"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

StatisticsCard.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsCard.propTypes = {
  color: PropTypes.oneOf([
    "white",
    "blue-gray",
    "gray",
    "brown",
    "deep-orange",
    "orange",
    "amber",
    "yellow",
    "lime",
    "light-green",
    "green",
    "teal",
    "cyan",
    "light-blue",
    "blue",
    "indigo",
    "deep-purple",
    "purple",
    "pink",
    "red",
  ]),
  icon: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  value: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

export default StatisticsCard;
