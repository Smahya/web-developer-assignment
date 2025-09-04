import { cn } from "@/lib/utils";

export interface InputTextProps extends React.HTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  placeholder: string;
}
export const InputText = ({
  id,
  label,
  placeholder,
  className,
  ...props
}: InputTextProps) => {
  return (
    <div className="grid gap-1 content-start">
      <label className="text-base font-medium text-gray-600" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        className={cn(
          "w-full border text-sm font-normal text-gray-600 border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-brand-600/40",
          className
        )}
        {...props}
      />
    </div>
  );
};
