import { cn } from "@/lib/utils";
import { Loader } from "./Loader/Loader";

interface ButttonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "link" | "danger";
  block?: boolean;
  disabled?: boolean;
  loading?: boolean;
}

export const Button = ({
  children,
  className,
  type = "button",
  variant = "primary",
  block = false,
  loading = false,
  ...props
}: ButttonProps) => {
  const variantClasses = {
    primary: "bg-gray-700 text-white px-4 py-2",
    secondary: "bg-white text-gray-700 border border-gray-200 px-4 py-2",
    link: "text-gray-700",
    danger: "bg-red-500 text-white px-4 py-2",
  };
  const loadingClasses = {
    primary: "#FFFFFF",
  };

  return (
    <button
      className={cn(
        "flex items-center gap-2 rounded-[4px] disabled:opacity-50 disabled:cursor-not-allowed",
        block ? "w-full" : "w-fit",
        variantClasses[variant],
        className
      )}
      type={type}
      {...props}
    >
      {children}
      {loading && (
        <Loader
          width={40}
          height={25}
          bgColor={
            loadingClasses[variant as keyof typeof loadingClasses] || undefined
          }
        />
      )}
    </button>
  );
};
