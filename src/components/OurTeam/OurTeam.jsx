import './OurTeam.scss'
import Container from "../Container/Container";
import imgTeam1 from '../../img/team-img1.png';
import imgTeam2 from '../../img/team-img2.png';
import imgTeam3 from '../../img/team-img3.png';
import imgTeam4 from '../../img/team-img4.png';
import imgTeam5 from '../../img/team-img5.png';
import imgTeam6 from '../../img/team-img6.png';




const OurTeam = () =>{
    return (
        <section className='team__section' style={{padding: '60px 0 120px 0'}}>
            <Container>
                <div className='team__text-wrapper'>
                    <h2 className="team__title">Наша команда - наша сила</h2>
                <p className="team__text">Все наши преподаватели – профессионалы своего дела, и каждый из них – практикующий специалист, который досконально знает предмет и постоянно работает над повышением уровня квалификации. Если Ваша цель – получить актуальные и разносторонние знания и навыки по предмету – можете быть уверены, что нашим преподавателям в этом нет равных. Они обожают нестандартные и каверзные вопросы, сложные задачи и не боятся творческих и любознательных студентов.</p>
                </div>
                

                <div className='team__photo-wrap'>
                    <div className='team__photo-left'>
                        <img src={imgTeam1} alt="imgTeam1" />
                        <div className='team__photo-left--small'>
                            <img src={imgTeam2} alt="imgTeam2" />
                            <img src={imgTeam3} alt="imgTeam3" />
                        </div>
                    </div>
                    <div className='team__photo-right'>
                    <div className='team__photo-right--small'>
                        <img src={imgTeam4} alt="imgTeam4" />
                        <img src={imgTeam5} alt="imgTeam5" />
                    </div>
                    <img src={imgTeam6} alt="imgTeam6" />
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default OurTeam;