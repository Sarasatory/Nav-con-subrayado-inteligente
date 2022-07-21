import React from 'react';
import '../styles/components/Nav.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
// import NavLinks from './NavLinks';

const Nav = React.forwardRef((props, ref) => {
  //
  // VARIABLES Y CONSTANTES GENERALES:
  //

  const refMenuBtn = useRef(null);
  const refNav = useRef(null);

  // Recojo en un array los colores que aplicare al subrayado dinámico cuando cambie la sección actual.
  const colorsLink = [
    '#DD0303', // Rojo
    '#F78800', // Naranja
    '#F7E600', // Amarillo
    '#007C25', // Verde
    '#004BF7', // Aºul
    '#710783', // Morado
  ];

  // Recojo en un array la información de todos los enlaces "a".
  const links = document.querySelectorAll('.js_link');

  // Creo un objeto con la información que se pasará al "span" en función de la sección actual.
  // Esta información es heredada desde "App.js" mediante "props".
  let spanStyle = {
    width: `${props.widthLink}px`,
    left: `${props.leftLink}px`,
    top: `${props.topLink}px`,
    borderColor: `${props.colorLink}`,
  };

  //
  // FUNCIONES MANEJADORAS
  //

  // Recojo en un objeto la información limpia del enlace seleccionado, para después mediante la función "props.handleLink(targetLink)" enviarlo a "App.js".
  // Recojo los datos de ancho, desplazamientos izquierdo y superior, color y sección actual.
  const sendToAppFun = (i) => {
    const targetLink = {
      widthLink: links[i].offsetWidth,
      leftLink: links[i].offsetLeft,
      topLink: links[i].offsetTop,
      colorLink: colorsLink[i],
      section: props.currentSection,
    };

    // Envio la información recogida en el objeto "targetLink" a "App.js".
    props.handleLink(targetLink);
  };

  // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
  const aLinkStateFun = (i) => {
    links.forEach((element) => {
      element.classList.remove('active');
      element.classList.add('inactive');
    });
    links[i].classList.add('active');
    links[i].classList.remove('inactive');
  };

  // Recojo la sección actual mediante su "id" y meto su valor numérico en la variable "i" con la que trabajaré en las funciones "sendToAppFun(i)" y "aLinkStateFun(i)".
  const currentUrlFun = () => {
    let i = 0;
    if (props.currentURL === 'section001') {
      i = 0;
    } else if (props.currentURL === 'section002') {
      i = 1;
    } else if (props.currentURL === 'section003') {
      i = 2;
    } else if (props.currentURL === 'section004') {
      i = 3;
    } else if (props.currentURL === 'section005') {
      i = 4;
    } else if (props.currentURL === 'section006') {
      i = 5;
    }
    return i;
  };

  //
  // FUNCIONES GENERALES
  //

  // Desplazamiento con el ratón.
  if (props.currentSectionState === true) {
    // Recojo la sección actual.
    let i = currentUrlFun();

    sendToAppFun(i);

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  }

  // Al clickar sobre los enlaces.
  const handleClick = () => {
    // Recojo la sección actual.
    let i = currentUrlFun();

    sendToAppFun(i);

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  };

  // Al recargar la página.
  if (props.currentSection !== '') {
    // Recojo la sección actual.
    let i = currentUrlFun();

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  }

  const changeVisibilityBtn = () => {
    refMenuBtn.current.classList.add('hidden');
    refNav.current.classList.remove('closed');
    refNav.current.classList.add('open');

    console.log('BTN');
  };

  const changeVisibilityNav = () => {
    refMenuBtn.current.classList.remove('hidden');
    refNav.current.classList.add('closed');
    refNav.current.classList.remove('open');
  };

  return (
    <>
      <div className='menu-btn' ref={refMenuBtn} onClick={changeVisibilityBtn}>
        <FontAwesomeIcon icon={faBars} className='menu-btn__icon' />
      </div>

      <div className='nav closed' ref={refNav} onClick={changeVisibilityNav}>
        <div className='container'>
          <ul>
            <li className='color-li-001' onClick={handleClick}>
              <a
                href='#section001'
                id='key000'
                className='inactive js_link color-link-001'
              >
                Section 1
              </a>
            </li>
            <li className='color-li-002' onClick={handleClick}>
              <a
                href='#section002'
                id='key001'
                className='inactive js_link color-link-002'
              >
                Section 2
              </a>
            </li>
            <li className='color-li-003' onClick={handleClick}>
              <a
                href='#section003'
                id='key002'
                className='inactive js_link color-link-003'
              >
                Section 3
              </a>
            </li>
            <li className='color-li-004' onClick={handleClick}>
              <a
                href='#section004'
                id='key003'
                className='inactive js_link color-link-004'
              >
                Section 4
              </a>
            </li>
            <li className='color-li-005' onClick={handleClick}>
              <a
                href='#section005'
                id='key004'
                className='inactive js_link color-link-005'
              >
                Section 5
              </a>
            </li>
            <li className='color-li-006' onClick={handleClick}>
              <a
                href='#section006'
                id='key005'
                className='inactive js_link color-link-006'
              >
                Section 6
              </a>
            </li>
          </ul>
          <span className='marked-nav' style={spanStyle}></span>
        </div>
      </div>
    </>
  );
});

export default Nav;
