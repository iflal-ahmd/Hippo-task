import { useFormContext, Controller } from "react-hook-form";
import { Input } from "./input";

function RhfInput({ name, label, description = "", ...props }) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Input
            {...field}
            value={field.value === undefined ? "" : field.value}
            {...props}
          />
          {!!error ? <span>{error.message}</span> : null}
        </div>
      )}
    />
  );
}

export default RhfInput;
