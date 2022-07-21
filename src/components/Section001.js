import '../styles/components/Section001.scss';

const Section001 = () => {
  return (
    <section className='section001 snap-section' id='section001'>
      <div className='container'>
        <h1 className='title-h1'>Navigation menu with smart underline</h1>
        <h2 className='title-h2'>Section 001</h2>

        <p className='text-p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus asperiores vero sunt delectus perferendis quisquam quam
          consequuntur debitis ratione libero, dolores sapiente. Distinctio,
          fugiat? Blanditiis commodi iure incidunt tenetur accusantium.
        </p>
      </div>
      <a href='#section002' className='scroll-down'>
        Scroll Down
        <div className='scroll-down__rectangle'></div>
      </a>
    </section>
  );
};

export default Section001;
