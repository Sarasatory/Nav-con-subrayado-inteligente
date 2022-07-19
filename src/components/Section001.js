import '../styles/components/Section001.scss';

const Section001 = () => {
  return (
    <section className='section001 snap-section' id='section001'>
      <div className='container'>
        <h1 className='title-h1'>Section 001</h1>
        <h1 className='title-h2'>Hero</h1>
        <h1 className='title-p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus asperiores vero sunt delectus perferendis quisquam quam
          consequuntur debitis ratione libero, dolores sapiente. Distinctio,
          fugiat? Blanditiis commodi iure incidunt tenetur accusantium.
        </h1>
      </div>
      <a href='#section002' className='scrolling-down'>
        Scroll Down
        <div className='scrolling-down__rectangle'></div>
      </a>
    </section>
  );
};

export default Section001;
