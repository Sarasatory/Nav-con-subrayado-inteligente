import React from 'react';
import '../styles/components/Nav.scss';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

const Nav = React.forwardRef((props, ref) => {
  //
  //
  // VARIABLES Y CONSTANTES GENERALES:
  // Recojo en un array los colores que aplicare al subrayado dinámico cuando cambie la sección actual.
  const colorsLink = [
    '#DD0303', // Rojo
    '#F78800', // Naranja
    '#F7E600', // Amarillo
    '#007C25', // Verde
    '#004BF7', // Azul
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
  //
  // FUNCIONES MANEJADORAS

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
  //
  // FUNCIONES GENERALES
  // Desplazamiento con el ratón.
  if (props.currentSectionState === true) {
    // Recojo la sección actual.
    let i = currentUrlFun();

    sendToAppFun(i);

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  }

  // Al recargar la página:
  if (props.currentSection !== '') {
    // Recojo la sección actual.
    let i = currentUrlFun();

    // Cambia el estilo de cada enlace "a" de "nav" en función de si es o no el de la sección actual.
    aLinkStateFun(i);
  }

  return (
    <>
      <nav className='nav'>
        <div className='container'>
          {/* <FontAwesomeIcon icon={faBars} className='icon-menu' /> */}
          <ul>
            <li>
              <a href='#section001' id='key000' className='inactive js_link'>
                Section 1
              </a>
            </li>
            <li>
              <a href='#section002' id='key001' className='inactive js_link'>
                Section 2
              </a>
            </li>
            <li>
              <a href='#section003' id='key002' className='inactive js_link'>
                Section 3
              </a>
            </li>
            <li>
              <a href='#section004' id='key003' className='inactive js_link'>
                Section 4
              </a>
            </li>
            <li>
              <a href='#section005' id='key004' className='inactive js_link'>
                Section 5
              </a>
            </li>
            <li>
              <a href='#section006' id='key005' className='inactive js_link'>
                Section 6
              </a>
            </li>
          </ul>
          <span className='marked-nav' style={spanStyle}></span>
        </div>
      </nav>
    </>
  );
});

export default Nav;
