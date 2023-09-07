import React, { useEffect, useState } from 'react'
import Layout from './Layout'
import axios from 'axios'

export default function Notificaciones() {
    const [notificaciones, setNotificaciones] = useState([]);
     
    useEffect(()=>{
        const handleRespuesta = async()=>{
            try {
                // NODE JS
                //const resp = await axios.get('http://localhost:5000/notificaciones')
                // MYSQL
                const resp = await axios.get('http://localhost:5000/db')
                console.log(resp)
                setNotificaciones(resp.data)
            } catch (error) {
                console.log(error)
            }
        }
       handleRespuesta()
    },[])


  return (
    <>
    <Layout>
    <h1 className='text-center text-lg mt-12'>NOTIFICACIONES</h1>
     {/* tabla */}
     <div className='mt-6'>
          <table className='m-auto w-10/12'>
            <thead>
              <tr>
                <th className='px-4 py-2 text-left'>ID</th>
                <th className='px-4 py-2 text-left'>Usuario</th>
                <th className='px-4 py-2 text-left'>Nota</th>
              </tr>
            </thead>
            <tbody>
              {notificaciones.map((notificacion) => (
                <tr key={notificacion.id}>
                  <td className='border px-4 py-2'>{notificacion.id}</td>
                  <td className='border px-4 py-2'>{notificacion.usuario}</td>
                  <td className='border px-4 py-2'>{notificacion.nota}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </Layout>
    </>
  )
}
