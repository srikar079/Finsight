import { useEffect } from "react";
import Render_Table_data from "./Render_Table_data";
import { usePost } from "@/apis/DAO_Hook";
import { Spinner } from "@/utils/utils";
import { industries_data } from "@/components/CONSTANT/data_store";
import Predict_Compare_Industry from "./Predict_Compare_Industry";
const Render_Industries_data = ({ request }) => {
  const { isPending, post, data, error } = usePost(
    `${import.meta.env.VITE_Finsight_URL}/industry-data/`,
    { industry: request }
  );
  useEffect(() => {
    post({
      data_set: request,
    });
  }, []);
  const { data_set } = data || industries_data[request];
  const { years } = JSON.parse(data_set);
  const data_keys = Object.keys(JSON.parse(data_set));
  console.log(data);
  console.log(error);

  // const { data_set } = data || industries_data[request];
  // const { years } = !error ? data_set : JSON.parse(data_set);
  // const data_keys = !error ? data_set : Object.keys(JSON.parse(data_set));
  // console.log(data);
  // console.log(error)

  return (
    <div>
      {isPending && <Spinner className="m-auto" />}
      {!isPending && (
        <>
          <Predict_Compare_Industry industries={JSON.parse(data_set)} />
          <Render_Table_data
            headers={years}
            body={data_keys}
            data_set={JSON.parse(data_set)}
          />
        </>
      )}
    </div>
  );
};

export default Render_Industries_data;
