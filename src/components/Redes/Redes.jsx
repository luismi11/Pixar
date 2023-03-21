import './Redes.css'

export const Redes = () => {

    const cadaRed = [
        { 
            id : 0 ,
            enlace : { href : 'https://www.facebook.com/Pixar/ ' , title : ' IR AL FACEBOOK DE PIXAR ' },
            redSocial : ' Facebook '
        },
        { 
            id : 1 ,
            enlace : { href : 'https://twitter.com/pixar' , title : ' IR AL TWITTER DE PIXAR ' },
            redSocial : ' Twitter '
        },
        { 
            id : 2 ,
            enlace : { href : 'https://www.youtube.com/pixar' , title : ' IR AL YOUTUBE DE PIXAR ' },
            redSocial : ' Youtube '
        },
        { 
            id : 3 ,
            enlace : { href : 'https://www.instagram.com/pixar/' , title : ' IR AL INSTAGRAM DE PIXAR ' },
            redSocial : ' Instagram '
        }
    ]

    return( 
        <div className='redes'>
            <div className='redes__wrapper'>
                <ul className='redes__ul'>
                    { cadaRed.map( ( { id , enlace , redSocial }) => 
                        <li key={ id } className='redes__li'>
                            <a className='redes__a' { ...enlace }> 
                                { redSocial }
                            </a>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    )
}