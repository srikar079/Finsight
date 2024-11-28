import { useNavigate } from "react-router-dom";
import Btn from "./UiElements/Btn";
import UseIconsPack from "@/utils/UseIconsPack";

const MissingPage = () => {
  const token = "dsdasda";
  const navigation = useNavigate();
  const { CircleArrowLeft } = UseIconsPack();
  return (
    <div className="text-center h-lvh">
      <img
        src="/svg/sadface.gif"
        alt="404 Error"
        className="m-auto mb-0 md:h-[400px] select-none pointer-events-none"
      />
      <div className="mb-2 mx-2">
        <h1>Sorry, the page can’t be found</h1>
        <p>
          The page you were looking for appears to have been moved, deleted or
          does not exist.
        </p>
        <Btn
          label="Back To Home"
          icon={<CircleArrowLeft />}
          onClick={() => navigation(token ? "/finsight/dashboard" : "/")}
        />
      </div>
    </div>
  );
};

export default MissingPage;
