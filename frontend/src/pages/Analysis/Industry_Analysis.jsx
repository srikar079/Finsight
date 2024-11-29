import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@/hooks/UtilsHook";
import Render_Industries_data from "./Render_Industries_data";
const Industry_Analysis = () => {
  const naviagate = useNavigate();
  const search = useQuery("query");
  const menu = [
    { component: "Analyze GVA", value: "gva" },
    { component: "Analyze Market Size", value: "market" },
    { component: "Analyze Sales", value: "sales" },
    { component: "Export", value: "export" },
  ];
  return (
    <>
      <Tabs defaultValue={search || "gva"} className="w-full">
        <TabsList className="w-fit bg-transparent">
          {menu.map((item) => (
            <TabsTrigger
              key={item.value}
              value={item.value}
              onClick={() =>
                naviagate(`/finsight/analysis/industry/?query=${item.value}`)
              }
            >
              {item.component}
            </TabsTrigger>
          ))}
        </TabsList>
        {menu.map((item) => (
          <TabsContent value={item.value} key={item.value}>
            <Render_Industries_data request={item.value} />
          </TabsContent>
        ))}
      </Tabs>
    </>
  );
};

export default Industry_Analysis;
