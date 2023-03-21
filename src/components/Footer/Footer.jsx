import './Footer.css'

export const Footer = () => {

    const elemFooter = [
        {
            id : 0 ,
            enlace : { title : ' IR A PRIVACY POLICY ' , href : ' https://privacy.thewaltdisneycompany.com/en/ ' },
            elemento : ' PRIVACY POLICY '  
        },
        {
            id : 1 ,
            enlace : { title : ' IR A TERM OF USE ' , href : ' https://disneytermsofuse.com/ ' },
            elemento : ' TERM OF USE  '  
        },
        {
            id : 2 ,
            enlace : { title : ' IR A YOUR US STATE PRIVACY RIGHTS ' , href : 'https://privacy.thewaltdisneycompany.com/en/current-privacy-policy/your-us-state-privacy-rights/' },
            elemento : ' YOUR US STATE PRIVACY RIGHTS'  
        },
        {
            id : 3 ,
            enlace : { title : ' IR A CHILDREN’S ONLINE PRIVACY POLICY' , href : 'https://privacy.thewaltdisneycompany.com/en/for-parents/childrens-online-privacy-policy/ ' },
            elemento : ' CHILDREN’S ONLINE PRIVACY POLICY '  
        },
        {
            id : 4 ,
            enlace : { title : ' IR A INTEREST-BASED ADS ' , href : ' https://preferences-mgr.truste.com/?affiliateId=115&type=disneycolor ' },
            elemento : ' INTEREST-BASED ADS '  
        }
    ]

    return( 
        <footer className='footer'>
            <div className='footer__wrapper'>
                <ul className='footer__ul'>
                { elemFooter.map( ( {id , enlace , elemento} ) =>  
                    <li key={ id }>
                        <a className='footer__a' { ...enlace }> { elemento } </a>
                    </li>
                )}  
                </ul>
                <p className='footer__p'> © 1986-2023 DISNEY / PIXAR </p>
            </div>
        </footer>
    )
}