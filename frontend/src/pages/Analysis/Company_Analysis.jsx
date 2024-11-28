import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import GdpComponent from "./GdpComponent";

const Company_Analysis = () => {
  const menu = [
    { component: "GVA", value: "gdp" },
    // { component: "Market Size", value: "marketsize" },
    // { component: "export", value: "Export" },
  ];
  return (
    <div>
      <Tabs defaultValue="gdp" className="w-full">
        <TabsList className="w-fit bg-transparent">
          {menu.map((item) => (
            <TabsTrigger key={item.value} value={item.value}>
              {item.component}
            </TabsTrigger>
          ))}
        </TabsList>
        <TabsContent value="gdp">
          <GdpComponent />
        </TabsContent>
        <TabsContent value="marketsize">Market Size</TabsContent>
        <TabsContent value="export">export</TabsContent>
      </Tabs>
    </div>
  );
};

export default Company_Analysis;
