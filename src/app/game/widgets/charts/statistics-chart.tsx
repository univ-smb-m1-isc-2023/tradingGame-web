import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Chart  = dynamic(() => import('react-apexcharts'), { ssr: false });

interface StatisticsChartProps {
  color?: string 

  chart: any;
  title: React.ReactNode;
  description: React.ReactNode;
  footer?: React.ReactNode;
  height?: number | string;
  width?: number | string;
}

export const StatisticsChart: React.FC<StatisticsChartProps> = ({
  color = "blue-gray",
  chart,
  title,
  description,
  footer,
  height = "100%",
  width = "100%",
}) => {
  return (
    <Card className="border border-blue-gray-100 shadow-sm pt-12"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
      <CardHeader variant="gradient" color={"blue-gray"} floated={true} shadow={false}  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <Chart height={height} width={width} {...chart} />
      </CardHeader>
      <CardBody className="px-4  pt-0"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        <Typography variant="h6" color="blue-gray"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {title}
        </Typography>
        <Typography variant="small" className="font-normal text-blue-gray-600"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {description}
        </Typography>
      </CardBody>
      {footer && (
        <CardFooter className="border-t border-blue-gray-50 px-6 py-5"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
}

StatisticsChart.defaultProps = {
  color: "blue",
  footer: null,
};

StatisticsChart.propTypes = {
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
  chart: PropTypes.object.isRequired,
  title: PropTypes.node.isRequired,
  description: PropTypes.node.isRequired,
  footer: PropTypes.node,
};

StatisticsChart.displayName = "/src/widgets/charts/statistics-chart.jsx";

export default StatisticsChart;
