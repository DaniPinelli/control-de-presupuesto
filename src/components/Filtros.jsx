import { useState, useEffect } from 'react'

const Filtros = () => {
    return (
        <div className="filtros sombra contenedor" >
            <form>
                <div className="campo">
                    <label>Filtrar</label>
                    <select>
                        <option value="select">--Select--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="casa">Casa</option>
                        <option value="comida">Comida</option>
                        <option value="gastos">Otros gastos</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filtros