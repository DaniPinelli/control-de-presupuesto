import React from 'react'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto }) => {
    return (
        <div className="contenedor-presupuesto contenedor sombra" >
            <form className="formulario">
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input className="nuevo-presupuesto" type="text" placeholder="Agregar presupuesto" value={presupuesto} />
                </div>

                <input type="submit" placeholder="Agregar" />
            </form>
        </div>
    )
}

export default NuevoPresupuesto