import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TrendingDown, TrendingUp } from "lucide-react";
const Render_Table_data = ({ headers, body, data_set }) => {
  if (!headers || !body || !data_set) return;
  console.log(body);
  console.log(data_set);
  const getGrowthIndicator = (current, previous) => {
    if (!previous) return null;
    const growthRate = ((current - previous) / previous) * 100;

    if (growthRate > 0) {
      return (
        <div className="inline-flex items-center text-green-600 ml-2">
          <TrendingUp size={14} />
          <span className="text-sm ml-1">({growthRate.toFixed(1)}%)</span>
        </div>
      );
    } else {
      return (
        <div className="inline-flex items-center text-red-600 ml-2">
          <TrendingDown size={14} />
          <span className="text-sm ml-1">({growthRate.toFixed(1)}%)</span>
        </div>
      );
    }
  };
  return (
    <div className=" w-full mt-4  space-y-4">
      <div className=" border rounded-lg">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="!sticky !top-0 bg-white !dark:bg-gray-950">
              <TableRow>
                <TableHead className="min-w-[200px]">Industry</TableHead>
                {headers?.map((item) => (
                  <TableHead key={item}>{item}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {body?.map(
                (_items) =>
                  _items !== "years" && (
                    <TableRow key={_items}>
                      <TableCell>{_items}</TableCell>
                      {data_set[_items]?.map((rec, i) => (
                        <TableCell key={rec}>
                          <span className="flex">
                            {rec}
                            {getGrowthIndicator(rec, data_set[_items][i - 1])}
                          </span>
                        </TableCell>
                      ))}
                    </TableRow>
                  )
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Render_Table_data;
