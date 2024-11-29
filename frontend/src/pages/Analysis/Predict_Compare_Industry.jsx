import { useNavigate, useSearchParams } from "react-router-dom";
import { useQuery } from "@/hooks/UtilsHook";
import { useState } from "react";
import { SelectIndustryPrediction } from "@/components/SelectIndustryPrediction";
import { usePost } from "@/apis/DAO_Hook";
import { Spinner } from "@/utils/utils";
import PredictionChart from "@/components/charts/PredictionChart";
import { prediction_data } from "@/components/CONSTANT/data_store";
import DialogModal from "@/components/DialogModal";
import Btn from "../UiElements/Btn";

const Predict_Compare_Industry = ({ data_keys }) => {
  console.log(data_keys);
  const { isPending, data, post, error } = usePost(
    `${import.meta.env.VITE_Finsight_URL}/Prediction/`,
    "predict_company"
  );
  const [searchParams, setSearchParams] = useSearchParams();
  const newSearchParams = new URLSearchParams(searchParams);
  const [body, setBody] = useState({
    Industry: "",
    Years: null,
  });
  const [isOpen, setIsOpen] = useState(false);
  const query = useQuery("task");
  const search = useQuery("query");
  const handleChange = (value, placeholder) => {
    if (!query) return;
    if (query === "predict") {
      setBody((prev) => ({ ...prev, [placeholder]: value }));
    }
  };

  const handleMakeRequest = () => {
    if (!body.Industry || !body.Years) {
      alert("Please Fill All Fields");
      return;
    }
    post({
      data_set: search,
      selected_industry: body.Industry,
      n_periods: body.Years,
    });
    !isPending && setIsOpen(true);
  };

  const addNewParams = (task) => {
    newSearchParams.set("task", task);
    setSearchParams(newSearchParams);
  };

  const handleOpenChange = (value) => {
    setIsOpen(value);
  };

  const res = data;
  console.log(res);

  return (
    <>
      <div className="flex">
        <Btn
          className="bg-transparent hover:bg-transparent !text-black shadow-none hover:underline"
          label="Predict"
          onClick={() => addNewParams("predict")}
        />
        <Btn
          className="bg-transparent hover:bg-transparent !text-black shadow-none hover:underline"
          label="Compare"
          onClick={() => addNewParams("compare")}
        />
        {query === "predict" && (
          <div className="flex gap-3">
            <SelectIndustryPrediction
              placeholder={"Industry"}
              industries={data_keys}
              handleChange={handleChange}
            />
            <SelectIndustryPrediction
              placeholder={"Years"}
              industries={Array.from({ length: 50 }, (_, i) => i + 1)}
              handleChange={handleChange}
            />
            <Btn
              className="bg-transparent hover:bg-transparent outline w-[60px] outline-2 outline-gray-400 !text-black shadow-none hover:underline"
              label={isPending ? "" : "Send"}
              onClick={handleMakeRequest}
              disabled={isPending}
            >
              {isPending && <Spinner />}
            </Btn>
          </div>
        )}
        {query === "compare" && (
          <div className="flex gap-3">
            <SelectIndustryPrediction
              placeholder={"Type"}
              industries={["A", "B", "C", "D"]}
              handleChange={handleChange}
            />
          </div>
        )}
      </div>
      <DialogModal handleOpenChange={handleOpenChange} isOpen={isOpen}>
        {isPending && <Spinner className="text-sm m-2" />}
        {!isPending && <PredictionChart query={search} data={res} />}
      </DialogModal>
    </>
  );
};

export default Predict_Compare_Industry;
