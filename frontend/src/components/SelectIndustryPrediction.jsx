import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectIndustryPrediction({
  placeholder = "Option",
  industries = [],
  handleChange,
}) {
  // Return a message if industries array is empty or null
  if (!Array.isArray(industries) || industries.length === 0) {
    return (
      <div className="text-gray-500">
        No options available for {placeholder}.
      </div>
    );
  }

  return (
    <Select onValueChange={(data) => handleChange(data, placeholder)}>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder={`Choose ${placeholder}`} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {industries.map((item) => {
            if (!item || item == "years") return null;
            return (
              <SelectItem value={item} key={item}>
                {item}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
