import { cn } from "@/lib/utils";

export interface InputTexareaProps
  extends React.HTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label: string;
  placeholder: string;
  rows?: number;
}

export const InputTexarea = ({
  id,
  label,
  placeholder,
  className,
  rows = 4,
  ...props
}: InputTexareaProps) => {
  return (
    <div className="grid gap-1 content-start">
      <label className="text-base font-medium text-gray-600" htmlFor={id}>
        {label}
      </label>
      <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        className={cn(
          "w-full text-sm font-normal text-gray-600 border border-gray-200 rounded-md p-2 focus:outline-none focus:ring-1 focus:ring-brand-600/40",
          className
        )}
        {...props}
      />
    </div>
  );
};
