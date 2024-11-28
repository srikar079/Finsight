import { useFetch } from "@/apis/DAO_Hook";
import CombinedManufacturingChart from "@/components/charts/CombinedManufacturingChart";
import GVAPredictionChart from "@/components/charts/GVAPredictionChart";
import IndustryTrendsChart from "@/components/charts/IndustryTrendsChart";

const DashBoardPage = () => {
  const company = "tata+motors";
  const { data, isLoading, error } = useFetch(
    `stock?name=${company}`,
    "company"
  );
  console.log(data);
  return (
    <div className="flex min-h-screen flex-col gap-4">
      <GVAPredictionChart />
      <IndustryTrendsChart />
    </div>
  );
};

export default DashBoardPage;
