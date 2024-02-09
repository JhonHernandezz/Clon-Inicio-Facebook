import React from 'react'

export default function Home() {
  return (
    <div className='overflow-y-scroll'>
        <section className='w-100 p-0 m-0 h-72.7 bg-[#f0f2f5]'>
            <div className='w-100 h-100 pt-[72px] pb-[112px]'>
                <div className='w-980 h-100 py-[20px] relative md:flex  m-auto'>
                    <article className='w-580 pr-[32px] mr-0 columns-1'>
                        <div className='pt-[112px] pb-[16px]'>
                            <img className='h-106 m-[-28px]' src="https://static.xx.fbcdn.net/rsrc.php/y1/r/4lCu2zih0ca.svg" alt="" />
                        </div>
                        <h2 className='w-500 text-font-28 mt-1 leading-line-32 font-font-family pb-[20px]'>Facebook te ayuda a comunicarte y compartir con las personas que forman parte de tu vida.</h2>
                    </article>

                    <article>
                        <div className='w-396 h-456 mt-40'>
                            <div className=' flex h-auto pt-20 w-396 pb-28 rounded-md shadow-box bg-white'>
                                <form action="" className=''>
                                    <div className='mb-6'>
                                        <div className='mt-3 mb-2 flex justify-center items-center'>
                                            <input className='w-364 py-11 px-16 text-font-17 rounded-md border border-gray-300' type="text" placeholder='Correo electrónico o número de teléfono'/>
                                        </div>
                                        <div className='py-6 flex justify-center items-center'>
                                            <input className='w-364 py-11 px-16 text-font-17 rounded-md border border-gray-300' type="text" placeholder='Contraseña'/>
                                        </div>
                                    </div>
                                    <div className='pt-6 flex justify-center items-center align-middle'>
                                        <button className='w-364 font-bold text-white border-0 leading-line-48 px-14 text-font-20 rounded-md bg-background-buttom'>Iniciar sesión</button>
                                    </div>
                                    <div className='mt-16 text-center'>
                                        <a className='w-364 text-color-blue text-font-15 font-normal' href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzA3MzQxMTkwLCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&ars=facebook_login">¿Olvidaste tu contraseña?</a>
                                    </div>
                                    <div className='w-364 border-b-1 border my-20 mx-16'></div>
                                    <div className='pt-6 flex justify-center items-center align-middle'>
                                        <button className='text-font-17 leading-line-48 px-16 font-medium text-white bg-background-buttom-create rounded-md'>Crear cuenta nueva</button>
                                    </div>
                                </form>
                            </div>
                            <div className='font-font-family text-center text-font-14 mt-[28px]'>
                                <a className='text-font-14 font-font-family text-center font-bold px-2' href="">Crea una página</a>para una celebridad, una marca o un negocio.
                            </div>
                        </div>
                    </article>

                </div>
            </div>
        </section>
        <footer></footer>
    </div>
  )
}