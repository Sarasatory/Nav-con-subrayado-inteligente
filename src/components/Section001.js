import '../styles/components/Section001.scss';

const Section001 = () => {
  return (
    <section className='section001 snap-section' id='section001'>
      <div className='container'>
        <h1 className='title-h1'>Navigation menu with smart underline</h1>
        <h2 className='title-h2'>Section 001</h2>

        <p className='text-p'>Hello!</p>

        <p className='text-p'>
          The grace of this little project is in the intelligent underlining of
          the navigation menu. This can only be seen on screens larger than
          768px, so if you're on a mobile device, I recommend you switch to a
          larger screen so you can see and play with it ;)
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
