
interface ICard {
  children: React.ReactNode
  className?: string;
}

const Card: React.FC<ICard> = ({ children, ...props }) => {

  const style = {
    backgroundColor: "white",
    boxShadow: "1px 1px 1px #d1d1d1",
    borderRadius: 10
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

export { Card };
export default Card;