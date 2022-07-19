import { useState } from 'react';
import { useEffect } from 'react';

import useObserver from '../services/useObserver';
import localStorage from '../services/localStorage';

import '../styles/App.scss';
import Section001 from './Section001';
import Nav from './Nav';
import Section002 from './Section002';
import Section003 from './Section003';
import Section004 from './Section004';
import Section005 from './Section005';
import Section006 from './Section006';

function App() {
  //
  // CONSTANTES DE ESTADO
  //
  const [widthLink, setWidthLink] = useState('');
  const [leftLink, setLeftLink] = useState('');
  const [topLink, setTopLink] = useState(0);
  const [colorLink, setColorLink] = useState('');

  const [currentSection, setCurrentSection] = useState('');
  const [currentSectionState, setCurrentSectionState] = useState('');

  const [currentURL, setCurrentURL] = useState('');

  //
  // VARIABLES Y CONSTANTES GENERALES
  //

  //
  // CUSTOM HOOKS
  //
  // Observa la intersección de los elementos elegidos (en este caso las secciones) con el viewport y devuelve información útil al respecto.
  // Realizado con el tutorial: https://www.youtube.com/watch?v=jvpS8wdy9xg&list=PLWJxnDLEFlnVQlQ7c4G_SyHQcFT4GsPGR&index=2
  const [observer, setElements, entries] = useObserver({
    threshold: 0.75,
    root: null,
  });

  //
  // HOOKS DEPENDIENTES DEL CUSTOM HOOK
  //

  useEffect(() => {
    const sections = document.querySelectorAll('.snap-section');
    setElements(sections);
  }, [setElements]);

  useEffect(() => {
    if (entries[0]) {
      setCurrentSection(entries[0].target.id);
      setCurrentSectionState(entries[0].isIntersecting);
    }
  }, [observer, entries]);

  //
  // HOOKS
  //

  // Defino cómo se comportará el navegador al recargar la página.
  // Pendiente de revisión.
  useEffect(() => {
    // const currentURL = localStorage.get('currentURL', '/');
    // window.location.hash = currentURL.hash;
    // window.location.hash = currentURL;
    window.location.hash = '';
  }, []);

  // Al renderizar la página compruebo si existe o no el valor de "targetLink" almacenado en "localStorage".
  // Si no existe, renderiza la página sin entrar en la función "handleLink". Y si existe, ejecuta esa función con "targetLink" como argumento.
  useEffect(() => {
    // Intento obtener del "localStorage" la información almacenada del objeto "targetLink".
    // Si no existe le asigno el valor "null".
    const targetLink = localStorage.get('targetLink', null);

    // Si existe, llamo a la función "handleLink(targetLink)" con ese objeto como parámetro.
    if (targetLink !== null) {
      handleLink(targetLink);
    }
  }, []);

  //
  // FUNCIONES MANEJADORAS
  //

  // Actualizo los valores de las constantes de estado que almacenan los datos de ancho, desplazamientos izquierdo y superior, color y sección actual.
  // También guardo en "localStorage" los valores del objeto con esa información "targetLink" que viene como argumento desde "Nav.js", y la sección actual para la URL "currentURL".
  const handleLink = (targetLink) => {
    // Actualizo las constantes de estado.
    setWidthLink(targetLink.widthLink);
    setLeftLink(targetLink.leftLink);
    setTopLink(targetLink.topLink);
    setColorLink(targetLink.colorLink);

    // Guardo el objeto "targetLink" en "locaStorage".
    localStorage.set('targetLink', targetLink);

    // Guardo el dato "currentURL" en "locaStorage".
    const currentURL = `${targetLink.section}`;
    localStorage.set('currentURL', currentURL);
    setCurrentURL(currentURL);
  };

  //
  // FUNCIONES GENERALES
  //

  return (
    <div class='snap-container'>
      <Section001 />
      <Nav
        handleLink={handleLink}
        widthLink={widthLink}
        leftLink={leftLink}
        topLink={topLink}
        colorLink={colorLink}
        currentSection={currentSection}
        currentSectionState={currentSectionState}
        currentURL={currentURL}
      />
      <Section002 />
      <Section003 />
      <Section004 />
      <Section005 />
      <Section006 />
    </div>
  );
}

export default App;
