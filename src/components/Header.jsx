import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ presupuesto, setPresupuesto }) => {
    return (
        <header>
            <h1>Control de Presupuesto</h1>
            <NuevoPresupuesto presupuesto={presupuesto} setPresupuesto={setPresupuesto} />
        </header>
    )
}

export default Header