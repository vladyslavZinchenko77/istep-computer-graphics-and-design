import './CourseProgram.scss'
import Container from "../Container/Container";
import Button from '../Button/Button';
import CustomSelect from "../CustomSelect/CustomSelect";



const CourseProgram = () =>{

const options2dGraphics = ['Графический редактор Adobe Photoshop','Графический редактор Adobe Illustrator','Рисунок','История искусства','Цифровая фотография','Теория дизайна', 'Корпоративная айдентика и брэндинг', 'Рекламный дизайн', 'Типографика', 'Издательская система Adobe InDesign', 'Допечатная подготовка' ]

const  optionsWeb = ['Создание статических веб-страниц с использованием HTML5 и CSS3', 'Основы UI/UX' , 'Мобильные и игровые интерфейсы и интерфейсы для мобильных устройств', 'Юзабилити и системы управления содержимым веб-сайтов' , 'Создание интерфейсов' ]

const options3dGraphics = ['Autodesk 3ds Max. 3D-моделирование', 'Autodesk 3ds Max. Материалы и текстурирование', 'Autodesk 3ds Max. Моделирование сложных объектов', 'Autodesk 3ds Max. Визуализация и фотореалистичное освещение.' , 'Дизайн интерьера', 'Autodesk AutoCAD']

const optionsAnimation = [ 'Autodesk Maya. Моделирование и визуализация', 'Autodesk Maya. Анимация и создание эффектов', 'Autodesk Maya. Персонажная анимация персонажей' , 'Нелинейный монтаж видео в Adobe Premiere', 'Создание эффектов в Adobe AfterEffects', 'Обработка цифрового звука в Adobe AfterEffects' ]

    return(
       <Container>
        <div className='program__wrap'>
            <h2 className="program__title">Программа курса</h2>
            <div className='program__selects'>
                <CustomSelect 
                label='2D графика и макетирование'
                options={ options2dGraphics.map(item =>{
                    return(
                        <li className='program__selects-select--item'>{item}</li>
                    )
                })}
                />
                <CustomSelect
                label='Wев-дисциплины'
                options={ optionsWeb.map(item =>{
                    return(
                        <li className='program__selects-select--item'>{item}</li>
                    )
                })}
                />
                <CustomSelect
                label='3D Графика'
                options={ options3dGraphics.map(item =>{
                    return(
                        <li className='program__selects-select--item'>{item}</li>
                    )
                })}
                />
                <CustomSelect
                label='Анимация и видео'
                options={ optionsAnimation.map(item =>{
                    return(
                        <li className='program__selects-select--item'>{item}</li>
                    )
                })}
                />
            </div>
            <div className='program__btn-wrapper'>
                <Button maxWidth='360px'>Скачать детальную программу</Button>
            </div>
        </div>
       </Container>
    )
}

export default CourseProgram;
