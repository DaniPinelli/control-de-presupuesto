import { useState } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'


function App() {

  const [presupuesto, setPresupuesto] = useState()
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)

  return (
    <div>
      <Header
        presupuesto={presupuesto} setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto} setIsValidPresupuesto={setIsValidPresupuesto}
      />

      {isValidPresupuesto && (
        <div className="nuevo-gasto" >
          <img src={IconoNuevoGasto} alt="icono nuevo gasto" />
          <p className="para-agregar" >Agregar</p>
        </div>
      )}


    </div>
  )
}

export default App
