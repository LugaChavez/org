import { useState } from 'react';
import { v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Formulario from'./components/Formulario/Formulario';
import MiOrg from './components/MiOrg';
import Equipo from './components/Equipo';
import Footer from './components/Footer';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores,actualizarColaboradores] = useState([{
      id: uuid (),
      equipo:"Front End",
      foto: "https://github.com/LugaChavez.png",
      nombre:"Carolina Chavez",
      puesto:"Supervisora",
      fav: true
    },{
      id: uuid (),
      equipo:"Programación",
      foto: "https://github.com/AlejitaToloza.png",
      nombre:"Alejandra Toloza",
      puesto:"Instructora",
      fav: false

    },{
      id: uuid (),
      equipo:"Data science",
      foto: "https://github.com/FatimaLuna.png",
      nombre:"Fatima Luna",
      puesto:"Coat",
      fav: false
    },{
      id: uuid (),
      equipo:"Devops",
      foto: "https://github.com/debiabril.png",
      nombre:"Debora Abril",
      puesto:"Senior",
      fav: false
    },{
      id: uuid (),
      equipo:"UX y Diseño",
      foto: "https://github.com/GueDevz.png",
      nombre:"M. Guedez",
      puesto:"Diseñadora",
      fav: false
    },{
      id: uuid (),
      equipo:"UX y Diseño",
      foto: "https://github.com/MartenSalvador.png",
      nombre:"Martin Salvador",
      puesto:"Instructor",
      fav: false
  }])

  const [equipos, actualizarEquipos]= useState ([
    {
      id: uuid (),
      titulo:"Programación",
      colorPrimario:"#57C278",
      colorSecundario: "#D9F7E9"
    },
    {
      id: uuid (),
      titulo: "Front End",
      colorPrimario:"#82CFFA",
      colorSecundario: "#E8F8FF"
    },
    {
      id: uuid (),
      titulo:"Data science",
      colorPrimario:"#A6D157",
      colorSecundario: "#FFF8E2"
    },
    {
      id: uuid (),
      titulo:"Devops",
      colorPrimario:"#E06B69",
      colorSecundario: "#FDE7E8"
    },
    {
      id: uuid (),
      titulo:"UX y Diseño",
      colorPrimario:"DB6EBF",
      colorSecundario: "#FAE9F5"
    },
    {
      id: uuid (),
      titulo:"Móvil",
      colorPrimario:"#FFBA05",
      colorSecundario: "#FFF5D9"
    },
    {
      id: uuid (),
      titulo:"Inovación y Gestión",
      colorPrimario:"#FF8A29",
      colorSecundario: "#FFEEDF"
    }  
  ])

  // Ternario --> condicion ? seMuestra : noSeMuestra
  //Condicion && seMuestra

  const cambiarMostrar = () => {
    actualizarMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador

  const registrarColaborador= (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //spread operator [...] copia un arreglo
    actualizarColaboradores([...colaboradores,colaborador])
  }

  //Eliminar Colaborador
  const eliminarColaborador =(id) => {
    console.log("Eliminar colaborador", id);
    const nuevosColaboradores = colaboradores.filter((colaborador)=> colaborador.id !== id) 
    actualizarColaboradores(nuevosColaboradores)
  }

  //Actualizar color de equipo
  const actualizarColor =(color, id)=>{
    console.log("Actualizar: ", color, id);
    const equiposActualizados = equipos.map((equipo) => {
      if (equipo.id === id) {
          equipo.colorPrimario = color
      }
      return equipo
    }) 
    actualizarEquipos(equiposActualizados)
  }

  //Crear equipo

  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid() }])
  }

  const like = (id) => {
    console.log("like",id);
    const colaboradoresActualizados= colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresActualizados)
  }

  return (
    <div>
      <Header/>
      {/*mostrarFormulario ? <Formulario /> : <></>*/}
      {
        mostrarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      } 

      <MiOrg cambiarMostrar ={cambiarMostrar} /> 

      {
        equipos.map((equipo)=> <Equipo
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like = {like}
        />
        )
      }
      <Footer/>
    </div>
  );
}
export default App;
