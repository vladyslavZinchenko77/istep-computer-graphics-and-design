import './Description.scss'
import Container from "../Container/Container";
import aboutIcon1 from '../../img/icon1.png';
import aboutIcon2 from '../../img/icon2.png';
import aboutIcon3 from '../../img/icon3.png';
import aboutIcon4 from '../../img/icon4.png';
import aboutIcon5 from '../../img/icon5.png';
import aboutIcon6 from '../../img/icon6.png';


const Description = () =>{
    return(
        <section style={{padding: '120px 0 120px 0'}}>
        <Container>
            <h2 className="description__title">Как проходит обучение</h2>
            <div className="description__wrap">
                <div className="description__wrap-item">
                    <img className="description__wrap-item--icon" src={aboutIcon1} alt="aboutIcon1" />
                    <h4 className="description__wrap-item--title">Комфортные аудитории</h4>
                    <p className="description__wrap-item--text">У нас много комфортных аудиторий, конференс залов и лабораторий. У вас будете личное рабочее место с персональным компьютером.</p>
                </div>
                <div className="description__wrap-item">
                    <img className="description__wrap-item--icon" src={aboutIcon2} alt="aboutIcon2" />
                    <h4 className="description__wrap-item--title">Современое оборудование</h4>
                    <p className="description__wrap-item--text">Наши партнеры: Cisko, Microsoft, Avtodesk, мировые лидеры в сфере IT. У вас будет все необходимое оборудование и софт.</p>
                </div>
                <div className="description__wrap-item">
                    <img className="description__wrap-item--icon" src={aboutIcon3} alt="aboutIcon3" />
                    <h4 className="description__wrap-item--title">Робота с преподавателями</h4>
                    <p className="description__wrap-item--text">Наши преподаватели практикующие дизайнеры. На каждом занятие Вы вместе будете разбирать темы, выполнять задания, разбирать реальные кейсы и проекты.</p>
                </div>
                <div className="description__wrap-item">
                    <img className="description__wrap-item--icon" src={aboutIcon4} alt="aboutIcon4" />
                    <h4 className="description__wrap-item--title">Лекции, вебинары и воркшопы</h4>
                    <p className="description__wrap-item--text">Мы часто приглашаем известных экспертов из индустрии которые делаться полезными знаниями и секретами своей работы.</p>
                </div>
                <div className="description__wrap-item">
                    <img className="description__wrap-item--icon" src={aboutIcon5} alt="aboutIcon5" />
                    <h4 className="description__wrap-item--title">Робота с реальними проектами</h4>
                    <p className="description__wrap-item--text">У вас будет возможность разобраться и поработать над реальными проектами еще на этапе обучения.</p>
                </div>
                <div className="description__wrap-item">
                    <img className="description__wrap-item--icon" src={aboutIcon5} alt="aboutIcon5" />
                    <h4 className="description__wrap-item--title">Формирование портфолио</h4>
                    <p className="description__wrap-item--text">За период обучение вы соберёте свое портфолио из выполненных заданий, курсовых и дипломных проектов.</p>
                </div>
            </div>
        </Container>
        </section>
        
    )
}

export default Description;