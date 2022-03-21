import Header from "components/layout/Header";
import s from "./index.module.scss";

interface IPrimaryLayout {
  children: React.ReactNode
}

const PrimaryLayout: React.FC<IPrimaryLayout> = ({ children }) => {
  return (
    <div className={s.grid}>
      <Header />
      <main>
        {children}
      </main>
    </div>
  )
}

export default PrimaryLayout;