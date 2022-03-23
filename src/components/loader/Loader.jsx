import { LoaderStyle } from "./style";
import Loadind from "../../assets/img/loading.svg";
export const Loader = () => {
  return (
    <LoaderStyle>
      <img src={Loadind} />
    </LoaderStyle>
  );
};
