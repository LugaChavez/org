import "./Footer.css"

const Footer = () => {
    return <footer className= 'footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://www.linkedin.com/in/Chavez-DL-Carolina'>
                <img src=".\img\linkedin.svg" alt='LinkedIn' />
            </a>
            <a href='https://www.github.com/LugaChavez'>
                <img src=".\img\github.svg" alt='Github' />
            </a>
            </div>
        <img src='/img/Logo.png' alt='org' />
        <strong>Desarrollado por Carolina Chavez</strong>
    </footer>
}

export default Footer