import './Cabecera.css'

export const Cabecera = () =>{

    const navegacion = [
        { id : 0 , href : 'https://www.pixar.com/feature-films-launch' , title : ' Ir a la pagina de FEATURE FILMS ' , nombre : 'FEATURE FILMS'},
        { id : 1 , href : 'https://www.pixar.com/feature-films-launch' , title : ' Ir a la pagina de SHORT FILMS ' , nombre : 'SHORT FILMS'},
        { id : 2 , href : 'pixar.com/renderman' , title : ' Ir a la pagina de TECHNOLOGY ' , nombre : 'TECHNOLOGY'},
        { id : 3 , href : 'https://www.pixar.com/careers-at-pixar' , title : ' Ir a la pagina de CAREERS ' , nombre : 'CAREERS'},
        { id : 4 , href : 'https://www.pixar.com/pixar-building-characters' , title : ' Ir a la pagina de EXTRAS ' , nombre : 'EXTRAS'},
        { id : 5 , href : 'https://www.pixar.com/contact-us' , title : ' Ir a la pagina de ABOUT' , nombre : 'ABOUT'},
    ]

    return(
        <div className='cabecera'>
            <div className="cabecera__wrapper">
                <img className='cabecera__img' alt=' Logo Pixar ' src='https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/0755a48b-bbaf-4dff-8e78-9b489106eec6/logo022.jpg?format=1500w'/>
                <ul className='cabecera__ul'>
                    { navegacion.map( ( { id , href , title , nombre } ) => 
                        <li className='cabecera__li' key ={ id }>
                        <a className='cabecera__a' href={href} title={title}> 
                            { nombre }
                        </a>
                    </li>
                    )}
                </ul>
            </div>
            
        </div>
    )
}