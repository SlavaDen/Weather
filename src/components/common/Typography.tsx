import { COLORSLIGHT } from "enums/colors";

interface ITypography {
  children: React.ReactNode
  className?: string;
  color?: "blue" | "gray";
  variant?: "h1" | "h2" | "h3" | "h4" | "";
  fontSize?: number;
}

const Typography: React.FC<ITypography> = ({ children, ...props }) => {

  const color = props.color || "";

  const style = {
    color: colorise(color),
    margin: 8,
    fontSize: props.fontSize || 18
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
    case "h2":
      return (
        <h2
          {...props}
          style={style}
        >
          {children}
        </h2>
      )
    case "h3":
      return (
        <h3
          {...props}
          style={style}
        >
          {children}
        </h3>
      )
    case "h4":
      return (
        <h4
          {...props}
          style={style}
        >
          {children}
        </h4>
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

const colorise = (color: "blue" | "gray" | "") => {
  switch (color) {
    case "blue":
      return COLORSLIGHT.primaryBlue400;
    case "gray":
      return COLORSLIGHT.gray400;
    default:
      return COLORSLIGHT.textColor;
  }
}

export { Typography };
export default Typography;