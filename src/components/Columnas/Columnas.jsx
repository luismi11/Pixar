import './Columnas.css'

export const Columnas = ( ) => {
    
    const cadaColumna = [
        {   id : 0 ,
            enlace : { href : 'https://www.pixar.com/careers-at-pixar' , title : ' IR A  CAREERS AT PIXAR'},
            imagen : { src : 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/1489515186655-LQ8Q6L0MFGETKRSTD0UW/image-asset.jpeg?format=750w' , alt : 'Lampara y pelota'},
            h3 : 'CAREERS AT PIXAR'
        },
        {   id : 1 ,
            enlace : { href : 'https://www.youtube.com/watch?v=-cT495xKvvs&ab_channel=Pixar' , title : ' IR A VIDEO ELEMENTAL'},
            imagen : { src : 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/9682fa4c-1d3c-4ca0-b656-e87ad2969856/elemental_01.jpg?format=750w' , alt : 'Elemental'},
            h3 : 'ELEMENTAL'
        },
        {   id : 2 ,
            enlace : { href : 'https://www.pixar.com/disneyplus' , title : ' IR A CARS ON THE ROAD'},
            imagen : { src : 'https://images.squarespace-cdn.com/content/v1/51cdafc4e4b09eb676a64e68/da3d60ad-79bb-404c-ab70-ba28a68011f7/cotr_home.jpg?format=750w' , alt : 'El Rayo y otro auto'},
            h3 : 'CARS ON THE ROAD'
        },
    ]

    return ( 
        <div className='columna'> 
            <div className='columna__wrapper'>
                {cadaColumna.map( ({ id , enlace , imagen , h3 }) => 
                    <div key={ id } className='columna__columna'>
                        <a className='columna__a' { ...enlace }>
                            <img className='columna__img' { ...imagen } />
                        </a>
                        <h3 className='columna__h3' > { h3 } </h3>
                    </div>
                )}
            </div>
        </div>
    )
}