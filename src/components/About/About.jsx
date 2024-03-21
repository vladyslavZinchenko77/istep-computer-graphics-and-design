import './About.scss'
import Container from "../Container/Container";
import aboutArrowImg from '../../img/Arrow-about.png'

const About = ()=>{
    return(
        <div style={{backgroundColor:'#000000', paddingBottom: '120px'}}>

            <Container>
                <div className='about__desc'>
                    <h2 className='about__title'>Коротко о курсе</h2>
                    <p className='about__text'>Если вы ищете творческую современную профессию тогда этот курс для вас. Мы научим вас как создавать сайты и мобильные приложение, работать с видео и анимацией, рисовать иллюстрации. Вы научитесь работать в 3D: создавать персонажей, игровые локации, интерьеры та экстерьеры. Мы поможем освоить все необходимые инструменты с нуля.</p>
                </div>
                <div className='about__video'>
                <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ohdhI-e2ogU"
                    title="Обучение"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                    <p className='about__video-text' >узнайте Как проходит обучение</p>
                    <img className='about__video-arrow' src={aboutArrowImg } alt="" />
                </div>
                
            </Container>
        </div>
    )
}

export default About;