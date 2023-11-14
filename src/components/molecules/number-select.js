import {useState} from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../atoms/select";

function NumberSelect({ items, label, afterSelect = () => {} }) {
  const [value, setSelectedValue] = useState(null);

  return (
    <Select onValueChange={(_value) => setSelectedValue(_value)}>
      <SelectTrigger className="rounded-none border-x-0 md:text-sm text-xs">
        {value ? value : label}
      </SelectTrigger>
      <SelectContent>
        {(items || []).map((item) => (
          <SelectItem value={item} key={item}>
            {item}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

export default NumberSelect;
