"use client";

import { useRef, useEffect } from "react";
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
  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
    if (table) {
      const handleScroll = () => {
        const fixedColumn = table.querySelector(".fixed-column");
        if (fixedColumn) {
          fixedColumn.style.transform = `translateX(${table.scrollLeft}px)`;
        }
      };

      table.addEventListener("scroll", handleScroll);
      return () => table.removeEventListener("scroll", handleScroll);
    }
  }, []);

  if (!headers || !body || !data_set) return null;

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
    <div className="w-[1256px] space-y-4 overflow-hidden">
      <div className="border rounded-lg  overflow-hidden">
        <div
          ref={tableRef}
          className="overflow-x-auto relative"
          style={{ maxWidth: "100%", overflowY: "visible" }}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="sticky left-0 z-20 bg-white dark:bg-gray-950 min-w-[200px]">
                  Industry
                </TableHead>
                {headers?.map((item) => (
                  <TableHead key={item} className="min-w-[150px]">
                    {item}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {body?.map(
                (_items) =>
                  _items !== "years" && (
                    <TableRow key={_items}>
                      <TableCell className="sticky left-0 z-10 bg-white dark:bg-gray-950 fixed-column">
                        {_items}
                      </TableCell>
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
