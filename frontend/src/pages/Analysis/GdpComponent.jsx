import { useNavigate } from "react-router-dom";
import Btn from "../UiElements/Btn";
import { AllCompanies, Industry } from "@/components/CONSTANT/Constant";
import { useQuery } from "@/hooks/UtilsHook";

const GdpComponent = () => {
  const navigate = useNavigate();
  const searchParams = useQuery("query");
  return (
    <div className="">
      <h4 className="my-4 font-semibold">Select an Industry</h4>
      <div className="border-b-2 rounded-md">
        {Industry.map((data) => (
          <Btn
            className="m-2"
            label={data.label}
            key={data.label}
            onClick={() => navigate(data.href)}
          />
        ))}
      </div>
      {searchParams && <SelectedIndustry industry={searchParams} />}
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const SelectedIndustry = ({ industry }) => {
  const title = industry
    // eslint-disable-next-line react/prop-types
    ?.split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const company = AllCompanies[title.replaceAll(" ", "")];
  return (
    <div className="my-4">
      <h1 className=" font-semibold">Top {title} Companies</h1>
      <RenderCompanies company={company} />
    </div>
  );
};

// eslint-disable-next-line react/prop-types
const RenderCompanies = ({ company }) => {
  const searchParams = useQuery("query");
  const navigate = useNavigate();
  return (
    <div className="">
      {company?.map((data) => (
        <Btn
          className="m-2"
          key={data}
          label={data.replaceAll("+", " ")}
          onClick={() =>
            navigate(
              `/finsight/analysis/company/${searchParams}?query=${data.toLowerCase()}`
            )
          }
        />
      ))}
    </div>
  );
};
export default GdpComponent;
