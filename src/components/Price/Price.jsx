

import './Price.scss'
import Container from '../Container/Container';
import Button from '../Button/Button';
const Price =()=>{
    return(
        <section style={{backgroundColor: ' #000000', paddingBottom:'204px'}}>
            <Container>
                <h2 className='price__title'>Формат занятий и стоимость</h2>
                <div className='price__info'> 
                    <h2 className='price__info-title'>Стационар</h2>
                    <div className='price__info-wrap'>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>Длительность курса:</h4>
                            <p className='price__info-item--content'>5 семестров - 2,5 года</p>
                        </div>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>График: </h4>
                            <p className='price__info-item--content'>3 раза в неделю по 2 пары</p>
                        </div>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>Возраст:</h4>
                            <p className='price__info-item--content'>9 - 55 лет</p>
                        </div>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>Язык курса:</h4>
                            <p className='price__info-item--content'>Украинский</p>
                        </div>
                    </div>
                    <div className='price__pay'>
                        <div className='price__pay-wrap'>
                            <div className='price__pay-item'>
                                <h4 className='price__pay-item--title'>Оплата частями</h4>
                                <p className='price__pay-item--price'>3920 <span className='small-text'>грн/мес</span></p>
                            </div>
                            <div className='price__pay-item'>
                                <h4 className='price__pay-item--title'>Полная оплата</h4>
                                <p className='price__pay-item--price'>3053 <span className='small-text'>грн/мес</span> </p>
                                <p className='price__pay-item--desc'>При оплате за полный курс: 91 575 грн </p>
                            </div>
                        </div>
                        <div className='price__pay-btns'>
                            <Button backgroundColor='#3E3F44'>Оставить заявку</Button>
                            <Button>Заключить договор</Button>
                        </div>
                    </div>
                </div>
                <div className='price__info'> 
                    <h2 className='price__info-title'>Полустационар</h2>
                    <div className='price__info-wrap'>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>Длительность курса:</h4>
                            <p className='price__info-item--content'>5 семестров - 2,5 года</p>
                        </div>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>График: </h4>
                            <p className='price__info-item--content'>3 раза в неделю по 2 пары</p>
                        </div>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>Возраст:</h4>
                            <p className='price__info-item--content'>9 - 55 лет</p>
                        </div>
                        <div className='price__info-item'>
                            <h4 className='price__info-item--title'>Язык курса:</h4>
                            <p className='price__info-item--content'>Украинский</p>
                        </div>
                    </div>
                    <div className='price__pay'>
                        <div className='price__pay-wrap'>
                            <div className='price__pay-item'>
                                <h4 className='price__pay-item--title'>Оплата частями</h4>
                                <p className='price__pay-item--price'>3920 <span className='small-text'>грн/мес</span></p>
                            </div>
                            <div className='price__pay-item'>
                                <h4 className='price__pay-item--title'>Полная оплата</h4>
                                <p className='price__pay-item--price'>3053 <span className='small-text'>грн/мес</span> </p>
                                <p className='price__pay-item--desc'>При оплате за полный курс: 91 575 грн </p>
                            </div>
                        </div>
                        <div className='price__pay-btns'>
                            <Button backgroundColor='#3E3F44'>Оставить заявку</Button>
                            <Button>Заключить договор</Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Price;