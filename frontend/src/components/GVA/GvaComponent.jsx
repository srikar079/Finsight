import React, { useEffect, useState } from "react";
import { db } from "../CONSTANT/data_store";
import AdvancedTable from "./AdvancedTable";
import { Loader } from "@/utils/utils";

const GvaComponent = () => {
  const [isPending, setIsPending] = useState(true);
  const [data, setData] = useState(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPending(false);
      setData({
        db,
        data_set: JSON.parse(db.data_set),
      });
    }, 1000);
    fetchData();

    return () => clearTimeout(timer);
  }, []);
  if (isPending) {
    return (
      <Loader className={"w-[300px] h-[300px] m-auto"} w={"w-10"} h={"h-10"} />
    );
  }

  async function fetchData() {
    try {
      const _res = await fetch(
        `${import.meta.env.VITE_Finsight_URL}Prediction`,
        {
          data_set: "gva",
          selected_industry: "Crops",
          n_periods: 10,
        }
      );
      console.log(_res);
    } catch (err) {
      console.error(err);
    }
  }
  const { data_set } = data;
  const { years } = data_set;
  const data_keys = Object.keys(data_set);
  return (
    <div className="relative">
      <AdvancedTable headers={years} body={data_keys} data_set={data_set} />
    </div>
  );
};

export default GvaComponent;
