
interface ICardContent {
  children: React.ReactNode
  className?: string;
}

const CardContent: React.FC<ICardContent> = ({ children, ...props }) => {

  const style = {
    padding: 15
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

export { CardContent };
export default CardContent;