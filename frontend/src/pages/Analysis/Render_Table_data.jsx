import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ActivityIcon, ThermometerSnowflake } from "lucide-react";
const Render_Table_data = ({ headers, body, data_set }) => {
  if (!headers || !body || !data_set) return;
  return (
    <div className="w-full  p-4 space-y-4">
      <div className="border rounded-lg">
        <div className=" overflow-auto">
          <Table>
            <TableHeader className="sticky top-0 bg-white dark:bg-gray-950">
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
                      {data_set[_items]?.map((rec) => (
                        <TableCell key={rec}>{rec}</TableCell>
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
