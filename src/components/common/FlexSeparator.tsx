
interface IFlexSeparator {
  children?: React.ReactNode
  className?: string;
}

const FlexSeparator: React.FC<IFlexSeparator> = ({ children, ...props }) => {

  const style = {
    flexGrow: 1
  };

  return (
    <div
      style={style}
      {...props}
    >
      {children}
    </div>
  )
}

export { FlexSeparator };
export default FlexSeparator;