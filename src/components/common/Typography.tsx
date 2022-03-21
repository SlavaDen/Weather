import { COLORSLIGHT } from "enums/colors";

interface ITypography {
  children: React.ReactNode
  className?: string;
  color?: "blue";
  variant?: "h1";
}

const Typography: React.FC<ITypography> = ({ children, ...props }) => {

  const color = props.color || "";

  const style = {
    color: colorise(color),
  };

  switch (props.variant) {
    case "h1":
      return (
        <h1
          {...props}
          style={style}
        >
          {children}
        </h1>
      )
    default: return (
      <p
        {...props}
        style={style}
      >
        {children}
      </p>
    )
  }
}

const colorise = (color: "blue" | "") => {
  switch (color) {
    case "blue":
      return COLORSLIGHT.primaryBlue400;
    default:
      return COLORSLIGHT.textColor;
  }
}

export { Typography };
export default Typography;