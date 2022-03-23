import Image from "react-bootstrap/Image";
import "bootstrap/dist/css/bootstrap.min.css";
export const AvatarComponent = (props: any): any => {
  return <Image src={props.url} roundedCircle height={60} />;
};
