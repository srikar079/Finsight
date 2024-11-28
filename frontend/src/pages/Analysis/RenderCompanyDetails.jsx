import { useFetch } from "@/apis/DAO_Hook";
import { useQuery } from "@/hooks/UtilsHook";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ShareholdingChart from "./ShareholdingChart";
import { formatDate } from "@/utils/utilsFn";
import { Eye, MoveUpRight } from "lucide-react";
import { Spinner } from "@/utils/utils";
const RenderCompanyDetails = () => {
  const searchParams = useQuery("query");
  const { data, isLoading, error } = useFetch(
    `${
      import.meta.env.VITE_STOCK_INDIAN_API_BASE_URL
    }stock?name=${searchParams}`,
    "companys"
  );
  console.log(searchParams);
  if (isLoading) return <Spinner className=" m-auto" />;
  console.log(error);
  console.log(error.message);
  if (error) return <h1>Ops! Server error</h1>;

  return (
    <div className="p-0 grid grid-cols-12 gap-4">
      <Card className="col-span-12 xl:col-span-8 ">
        <CardHeader>
          <CardTitle>Stock Information for {data?.companyName}</CardTitle>
        </CardHeader>
        <CardContent className="p-2">
          <div className="space-y-6">
            {/* Basic Information */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Basic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p>
                    <span className="font-medium">Company Name:</span>{" "}
                    {data?.companyName}
                  </p>
                  <p>
                    <span className="font-medium">Industry:</span>{" "}
                    {data?.industry}
                  </p>
                  <p>
                    <span className="font-medium">Year High:</span> ₹
                    {data?.yearHigh}
                  </p>
                  <p>
                    <span className="font-medium">Year Low:</span> ₹
                    {data?.yearLow}
                  </p>
                </div>
                <div>
                  <p>
                    <span className="font-medium">Current Price (NSE):</span> ₹
                    {data?.currentPrice?.NSE}
                  </p>
                  <p>
                    <span className="font-medium">Current Price (BSE):</span> ₹
                    {data?.currentPrice?.BSE}
                  </p>
                  <p>
                    <span className="font-medium">Percent Change:</span>{" "}
                    {data?.percentChange}%
                  </p>
                </div>
              </div>
            </section>

            {/* Company Profile */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Company Profile</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>{data?.companyProfile?.companyDescription}</p>
              </div>
            </section>

            {/* Risk Meter */}
            <section>
              <h2 className="text-xl font-semibold mb-2">Risk Assessment</h2>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p>
                  <span className="font-medium">Category:</span>{" "}
                  {data?.riskMeter?.categoryName}
                </p>
                <p>
                  <span className="font-medium">Standard Deviation:</span>{" "}
                  {data?.riskMeter?.stdDev?.toFixed(2) || "N/A"}
                </p>
              </div>
            </section>
            {/* Shareholding Pattern */}
            <section>
              <ShareholdingChart data={data?.shareholding} />
            </section>

            {/* Future Expiry Dates */}
            <section>
              <h2 className="text-xl font-semibold mb-2">
                Future Expiry Dates
              </h2>
              <div className="bg-gray-50 p-4 rounded-lg flex gap-4">
                {data?.futureExpiryDates
                  ? data?.futureExpiryDates.map((date, i) => (
                      <p key={i}>{formatDate(date)}</p>
                    ))
                  : "No data available"}
              </div>
            </section>
          </div>
        </CardContent>
      </Card>
      <Card className="col-span-12 xl:col-span-4">
        <CardContent className="p-3">
          <section>
            <h2 className="text-xl font-semibold mb-2">Latest News</h2>
            <div className=" grid gap-3">
              {data.recentNews.map((news) => (
                <div
                  className="flex flex-col xl:flex-row gap-3 shadow-4 p-1 rounded-md"
                  key={news.id}
                >
                  <div className="w-full h-[90px] xl:h-[100px]">
                    <img
                      src={news.thumbnailimage}
                      className="rounded-md  w-full h-full object-cover object-center"
                      alt=""
                    />
                  </div>
                  <div className="">
                    <div className=" text-sm">
                      <p>{news.date.replaceAll("IST", "")}</p>
                      <p className=" text-balance font-semibold">
                        {news.headline}
                      </p>
                    </div>
                    <div className="flex gap-4 justify-between">
                      <div className="flex text-sm items-center gap-2 text-gray-400">
                        {news.timeToRead}
                        <Eye className="w-4" />
                      </div>
                      <a
                        href={news.url}
                        target="_blank"
                        className="text-gray-400 hover:text-black"
                      >
                        <MoveUpRight className="w-4  m-auto " />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </CardContent>
      </Card>
    </div>
  );
};

const RenderArray = ({ data }) => {
  if (!data || !Array.isArray(data)) return null;

  return (
    <>
      {data?.map((item, index) => (
        <div key={index}>
          {typeof item === "object" ? <RenderObject data={item} /> : item}
        </div>
      ))}
    </>
  );
};

const RenderObject = ({ data }) => {
  if (!data || typeof data !== "object") return null;

  return (
    <div className="ml-4 bg-gray-50 p-2 rounded-md">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="mb-2">
          <span className="font-medium">{key}: </span>
          {typeof value === "object" ? (
            Array.isArray(value) ? (
              <RenderArray data={value} />
            ) : (
              <RenderObject data={value} />
            )
          ) : (
            <span>{value}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default RenderCompanyDetails;
