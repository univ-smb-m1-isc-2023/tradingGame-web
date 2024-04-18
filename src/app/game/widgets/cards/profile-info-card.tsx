import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

interface ProfileInfoCardProps {
  title: string;
  description?: React.ReactNode;
  details?: { [key: string]: React.ReactNode } | null | null;
  action?: React.ReactNode;
}


export const ProfileInfoCard: React.FC<ProfileInfoCardProps> = ({
  title,
  description,
  details,
  action,
}) => {
  return (
    <Card color="transparent" shadow={false}  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
      <CardHeader
        color="transparent"
        shadow={false}
        floated={false}
        className="mx-0 mt-0 mb-4 flex items-center justify-between gap-4"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}      >
        <Typography variant="h6" color="blue-gray"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
          {title}
        </Typography>
        {action}
      </CardHeader>
      <CardBody className="p-0"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}>
        {description && (
          <Typography
            variant="small"
            className="font-normal text-blue-gray-500"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}          >
            {description}
          </Typography>
        )}
        {description && details ? (
          <hr className="my-8 border-blue-gray-50" />
        ) : null}
        {details && (
          <ul className="flex flex-col gap-4 p-0">
            {Object.keys(details).map((el, key) => (
              <li key={key} className="flex items-center gap-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-semibold capitalize"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}                >
                  {el}:
                </Typography>
                {typeof details[el] === "string" ? (
                  <Typography
                    variant="small"
                    className="font-normal text-blue-gray-500"  placeholder={null} onPointerEnterCapture={null} onPointerLeaveCapture={null}                  >
                    {details[el]}
                  </Typography>
                ) : (
                  details[el]
                )}
              </li>
            ))}
          </ul>
        )}
      </CardBody>
    </Card>
  );
}

ProfileInfoCard.defaultProps = {
  action: null,
  description: null,
  details: {},
};

// ProfileInfoCard.propTypes = {
//   title: PropTypes.string.isRequired,
//   description: PropTypes.node,
//   details: PropTypes.object,
// };

ProfileInfoCard.displayName = "/src/widgets/cards/profile-info-card.tsx";

export default ProfileInfoCard;
