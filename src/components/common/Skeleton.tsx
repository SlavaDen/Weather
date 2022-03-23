import s from "./index.module.scss";

interface ISkeleton {
  children?: React.ReactNode
  className?: string;
}

const Skeleton: React.FC<ISkeleton> = ({ children, ...props }) => {

  const style = {
    display: "flex",
    alignItems: "center",
  };

  return (
    <div
      className={s.skeleton}
      {...props}
    >
      {children}
    </div>
  )
}

export { Skeleton };
export default Skeleton;