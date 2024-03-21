import React, { useState, useEffect } from 'react';
import './Hero.scss';
import Container from "../Container/Container";
import Button from "../Button/Button";
import menImg from '../../img/Men.png';
import photoshopImg from '../../img/photoshop.png';
import pencilImg from '../../img/pencil-rule.png';
import figmaImg from '../../img/figma.png';
import colorsImg from '../../img/colors.png';
import gradientImg from '../../img/Ellipse 499.png';
import gradientImg2 from '../../img/Group 22262.png';
import noParallaxImg from '../../img/noparallax.png';

const Hero = () => {
  const [movementGroup1, setMovementGroup1] = useState({ x: 0, y: 0 });
  const [movementGroup2, setMovementGroup2] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;

      const movementXGroup1 = (clientX - centerX) * 0.01;
      const movementYGroup1 = (clientY - centerY) * 0.01;
      setMovementGroup1({ x: movementXGroup1, y: movementYGroup1 });

      const movementXGroup2 = (clientX - centerX) * 0.02;
      const movementYGroup2 = (clientY - centerY) * 0.02;
      setMovementGroup2({ x: movementXGroup2, y: movementYGroup2 });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section style={{ backgroundColor: ' #000000', position: 'relative' }}>
      <Container>
        <img className='hero__gradient' src={gradientImg} alt="" />
        <div className='hero'>
          <div className="hero__left">
            <h1 className="hero__left-title">Компьютерная графика и дизайн</h1>
            <p className="hero__left-text">Научим зарабатывать на своем творчестве</p>
            <Button zIndex='10' maxWidth='240px' margin='48px 0 0 0'>Записаться на курс</Button>
          </div>
            <img className='hero__noparralax' src={noParallaxImg} alt="" />
          <div className="hero__right">
              <img className='hero__right-background' src={gradientImg2} alt="gradientImg2" />
              <img
                className='hero__right-men'
                src={menImg}
                alt="menImg"
                style={{
                  transform: `translate(${movementGroup1.x}px, ${movementGroup1.y}px)`,
                }}
              />
              <img
                className='hero__right-photoshop'
                src={photoshopImg}
                alt="photoshopImg"
                style={{
                  transform: `translate(${movementGroup1.x}px, ${movementGroup1.y}px)`,
                }}
              />
              <img
                className='hero__right-pencil'
                src={pencilImg}
                alt="pencilImg"
                style={{
                  transform: `translate(${movementGroup1.x}px, ${movementGroup1.y}px)`,
                }}
              />
              <img
                className='hero__right-figma'
                src={figmaImg}
                alt="figmaImg"
                style={{
                  transform: `translate(${movementGroup2.x}px, ${movementGroup2.y}px)`,
                }}
              />
              <img
                className='hero__right-color'
                src={colorsImg}
                alt="colorsImg"
                style={{
                  transform: `translate(${movementGroup2.x}px, ${movementGroup2.y}px)`,
                }}
              />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
