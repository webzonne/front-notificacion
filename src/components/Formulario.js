import React, { useState } from 'react'
import Layout from './Layout'
import axios from 'axios'

export default function Formulario() {

    const init = {
        usuario:'',
        nota:''
    }
    const [datos, setDatos] = useState(init)

    const handleChange = (e)=>{
        const {name, value} = e.target
        setDatos({...datos,[name]:value})
    }
    const handleSubmit = async(e)=>{
        e.preventDefault()
        // console.log(datos)
        try {
            const resp = await axios.post('http://localhost:5000/db', datos)
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <>
    <Layout>
      <div className='flex h-screen justify-center items-center'>
     <form className='border p-4 w-2/4 shadow-lg' onSubmit={handleSubmit}>
       <h1 className='text-center mb-4'>NOTIFICACION</h1>
         <label>Usuario</label><br/>
         <input className='border w-full' onChange={handleChange} type='text' name='usuario'/><br/><br/>
         <label>Nota</label><br/>
         <textarea onChange={handleChange} name='nota' className='border h-32 w-full'></textarea><br/><br/>
         <div>
           <button className='text-white bg-blue-900 px-6 py-2'>Enviar</button>
         </div>
     </form>
    </div>
    </Layout>
    </>
  )
}
