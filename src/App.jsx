import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { links } from './json/headerLinks'
import { Home } from "./pages/Home/Home";
import HeaderNav from "./components/HeaderNav/HeaderNav.jsx";
import InformeActividades from "./pages/InformeActividades/InformeActividades.jsx";
import Agenda from './pages/Agenda/Agenda.jsx';

function App() {
  //const [contador, setContador] = useState(0)
  //const [calculate] = useState(0)


  /*   function calculateCount() {
      setContador(contador + 1)
      console.log(contador)
    }

    const funcionCalculada = useCallback(() => {
      calculateCount()
    }, [calculate]) */

  return <>

    <BrowserRouter >
      <HeaderNav />
      <Routes>
        {/*Consulte el JSON Para correspondencia de componentes*/}
        <Route path="/" element={<Home />}></Route>

        <Route path={links[0].link} element={
          <Agenda/>
        }></Route>
        <Route path={links[1].link} element={
          <div style={{ paddingTop: "5rem" }}>
            <InformeActividades />
          </div>
        }></Route>
        <Route path={links[2].link} element={<h1>{links[2].nombre}</h1>}></Route>

        <Route path={links[2].submenu[0].subMenuUrl} element={<h1>{links[2].submenu[0].subMenuNombre}</h1>}></Route>
        <Route path={links[2].submenu[1].subMenuUrl} element={<h1>submenu</h1>}></Route>
        <Route path={links[2].submenu[2].subMenuUrl} element={<h1>{links[2].submenu[2].subMenuNombre}</h1>}></Route>
        <Route path={links[2].submenu[3].subMenuUrl} element={<h1>{links[2].submenu[3].subMenuNombre}</h1>}></Route>
        <Route path={links[2].submenu[4].subMenuUrl} element={<h1>{links[2].submenu[4].subMenuNombre}</h1>}></Route>
        <Route path={links[2].submenu[5].subMenuUrl} element={<h1>{links[2].submenu[5].subMenuNombre}</h1>}></Route>


        <Route path={links[3].link} element={<h1>{links[3].nombre}</h1>}></Route>
        <Route path={links[4].link} element={<h1>{links[4].nombre}</h1>}></Route>
        <Route path={links[5].link} element={<h1>{links[5].nombre}</h1>}></Route>
        <Route path={links[5].submenu[0].subMenuUrl} element={<h1>{links[5].submenu[0].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[1].subMenuUrl} element={<h1>{links[5].submenu[1].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[2].subMenuUrl} element={<h1>{links[5].submenu[2].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[3].subMenuUrl} element={<h1>{links[5].submenu[3].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[4].subMenuUrl} element={<h1>{links[5].submenu[4].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[5].subMenuUrl} element={<h1>{links[5].submenu[5].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[6].subMenuUrl} element={<h1>{links[5].submenu[6].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[7].subMenuUrl} element={<h1>{links[5].submenu[7].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[8].subMenuUrl} element={<h1>{links[5].submenu[8].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[9].subMenuUrl} element={<h1>{links[5].submenu[9].subMenuNombre}</h1>}></Route>
        <Route path={links[5].submenu[10].subMenuUrl} element={<h1>{links[5].submenu[10].subMenuNombre}</h1>}></Route>
        <Route path={"*"} element={<h1 style={{padding:"5rem"}}>No encontrado</h1>}></Route>
      </Routes>
    </BrowserRouter>

  </>;
}

export default App;
