
interface IStack {
  children: React.ReactNode
  className?: string;
}

const Stack: React.FC<IStack> = ({ children, ...props }) => {

  const style = {
    display: "flex",
    alignItems: "center",
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

export { Stack };
export default Stack;