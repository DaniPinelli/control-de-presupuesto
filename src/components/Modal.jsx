import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto }) => {

    const [mensaje, setMensaje] = useState('')

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 100);
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([nombre, cantidad, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 4000);
            return;
        }

        guardarGasto({ nombre, cantidad, categoria })
    }

    return (
        <div className="modal" >
            <div className="cerrar-modal" >
                <img
                    src={CerrarBtn}
                    alt="cerrar modal"
                    onClick={ocultarModal}
                />
            </div>

            <form
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? "animar" : "cerrar"} `}
            >
                <legend>Nuevo Gasto</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

                <div className="campo" >
                    <label htmlFor="nombre">Nombre</label>
                    <input
                        id='nombre'
                        type="text"
                        placeholder='Nombre del Gasto'
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="campo" >
                    <label htmlFor="cantidad">Cantidad</label>
                    <input
                        id='cantidad'
                        type="number"
                        placeholder='Cantidad: ej. 500'
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                </div>

                <div className="campo" >
                    <label htmlFor="categoria">Categoría</label>
                    <select id='categoria'
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="select">--Select--</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="salud">Salud</option>
                        <option value="alimentacion">Alimentación</option>
                        <option value="transporte">Transporte</option>
                        <option value="vivienda">Vivienda</option>
                        <option value="ocio">Ocio</option>
                        <option value="suscripciones">Suscripciones</option>
                        <option value="otros">Otros</option>
                    </select>
                </div>

                <input type="submit" value="Agregar" />

            </form>
        </div>
    )
}

export default Modal