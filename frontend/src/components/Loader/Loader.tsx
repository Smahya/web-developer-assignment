import "./loader.css";

interface LoaderProps {
  width?: number;
  height?: number;
  bgColor?: string;
}

export const Loader = ({
  width = 80,
  height = 80,
  bgColor = "#7f56d950",
}: LoaderProps) => {
  return (
    <div
      className="lds-ellipsis"
      style={
        {
          "--loader-width": `${width}px`,
          "--loader-height": `${height}px`,
          "--loader-bg-color": bgColor,
        } as React.CSSProperties
      }
    >
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};
