import s from "./page.module.scss";
import Header from "./components/Header/Header";
import CaseInput from "./components/CaseInput/CaseInput";



export default function Home() {


  return (
    <main className={s.main}>
      <Header />
      <div className={s.layout}>
        <CaseInput />
      </div>
    </main>
  );
}


