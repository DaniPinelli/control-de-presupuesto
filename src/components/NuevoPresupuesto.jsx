import { useState } from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
}) => {

    const [mensaje, setMensaje] = useState("")

    const handlePresupuesto = (e) => {
        e.preventDefault()

        {
            (!presupuesto || presupuesto < 0) ? setMensaje("Presupuesto no válido") : setIsValidPresupuesto(true)
        }
    }


    return (
        <div className="contenedor-presupuesto contenedor sombra" >
            <form onSubmit={handlePresupuesto} className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input
                        className="nuevo-presupuesto"
                        type="number"
                        placeholder="0"
                        value={presupuesto} onChange={e => setPresupuesto(Number(e.target.value))} />

                </div>

                <input type="submit" placeholder="Agregar" />

                {mensaje && <Mensaje tipo="error" >{mensaje}</Mensaje>}
            </form>
        </div>
    )
}

export default NuevoPresupuesto