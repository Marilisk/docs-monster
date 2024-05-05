import s from "./css/page.module.scss";
import CaseInput from "./components/CaseInput/CaseInput";



export default function Home() {


  return (
    <main className={s.main}>
      <div className={s.layout}>
        <div>Здесь будет привлекающий лендинг</div>
        И авторизация
       {/*  <CaseInput /> */}
      </div>
    </main>
  );
}


