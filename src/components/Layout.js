import React from 'react'
import {useNavigate} from 'react-router-dom';

export default function Layout({children}) {
    const navigate = useNavigate()

    const handleNoti = ()=>{
        navigate('/notificaciones')
    }

    const handleFormulario = ()=>{
        navigate('/')
    }

  return (
    <div>
        <nav>
            <ul className='border bg-blue-900 text-white py-4 cursor-pointer flex justify-around items-center'>
                <li onClick={handleNoti}>Notificaiones</li>
                <li onClick={handleFormulario}>Formulario</li>
            </ul>
        </nav>
        {children}
    </div>
  )
}
