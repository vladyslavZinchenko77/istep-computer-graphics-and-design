import { useState, useEffect } from 'react';
import './Header.scss';
import Container from '../Container/Container';
import logoImg from '../../img/logo.png';
import { ReactComponent as ArrowDown } from '../../svg/arrow-down.svg';
import { ReactComponent as LiveIcon } from '../../svg/live.svg';

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsVisible(prevScrollPos > currentScrollPos);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={isVisible ? 'header' : 'header header--hidden'}>
      <Container>
        <div className="header__wrapper">
          <a className="header__logo" href="#">
            <img src={logoImg} alt="Logo" />
          </a>
          <nav className="header__nav">
            <a className="header__nav-link" href="#">
              Очное обучение <ArrowDown style={{ paddingLeft: '8px' }} />
            </a>
            <a className="header__nav-link" href="#">
              Online-обучение
            </a>
            <a className="header__nav-link" href="#">
              Наши проекты <ArrowDown style={{ paddingLeft: '8px' }} />
            </a>
            <a className="header__nav-link" href="#">
              Мероприятия
            </a>
            <a className="header__nav-link" href="#">
              Об Академии <ArrowDown style={{ paddingLeft: '8px' }} />
            </a>
            <a className="header__nav-link" href="#">
              Контакты
            </a>
            <button className="header__nav-btn">
              Live<LiveIcon style={{ marginLeft: '10px' }} />
            </button>
          </nav>
          <a className="header__tel" href="tel:+380445372260">
            +38 (044) 537 22 60 <ArrowDown style={{ paddingLeft: '8px' }} />
          </a>
          <div
            className={isOpen ? 'header__burger-icon--open' : 'header__burger-icon--close'}
            onClick={handleClick}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        {isOpen ? (
          <div className="header__burger-menu">
            <nav className="header__nav-burger-menu">
              <a className="header__nav-burger-menu--link" href="#">
                Очное обучение <ArrowDown style={{ paddingLeft: '8px' }} />
              </a>
              <a className="header__nav-burger-menu--link" href="#">
                Online-обучение
              </a>
              <a className="header__nav-burger-menu--link" href="#">
                Наши проекты <ArrowDown style={{ paddingLeft: '8px' }} />
              </a>
              <a className="header__nav-burger-menu--link" href="#">
                Мероприятия
              </a>
              <a className="header__nav-burger-menu--link" href="#">
                Об Академии <ArrowDown style={{ paddingLeft: '8px' }} />
              </a>
              <a className="header__nav-burger-menu--link" href="#">
                Контакты
              </a>
            </nav>
          </div>
        ) : null}
      </Container>
    </header>
  );
};

export default Header;
