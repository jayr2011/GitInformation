import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
type ButtonProps = any;

export const ButtonComp = (props: ButtonProps) => {
  return (
    <Button onClick={props.onclick} size="lg" variant="dark">
      {props.children}
    </Button>
  );
};
