import './App.css';
import orlage from './assets/orlage.png';
import morpheus from './assets/morpheus.png';
import samsung from './assets/samsung.png';
import segment from './assets/segment.png';
import manday from './assets/manday.png';
import cardone from './assets/card-one.svg';
import cardtwo from './assets/card-two.svg';
import cardthree from './assets/card-three.svg';

function App() {
  return (
    <div>
      <header className='header'>
        <div className="header__container container">
          <div className="header__container--logo">
            <a href="#">
            ShapeVoice
            </a>
          </div>
          <nav className='header__container--nav'>
            <label htmlFor="Product"></label>
            <select id="Product">
              <option value="">Product</option>
            </select>
            <label htmlFor="Template"></label>
            <select id="Template">
              <option value="">Template</option>
            </select>
            <a href="#">Blog</a>
            <a href="#">Pricing</a>
          </nav>
          <div className="header__container--button">
            <button className='button__blue'>Sign In</button>
            <button className='button__blue'>Start Free</button>
          </div>
        </div>
      </header>

      <section className='section'>
        <div className="section__container container">
          <div className="section__info">
            <h2 className='section__info--title'>Managing business payments has never been easier</h2>
            <p className='section__info--description'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything.</p>
            <div className="section__info--wrapper">
              <button className='button--blue'>Our Process</button>
              <button className='green--button'>See How It Works</button>
            </div>
          </div>
          <div className="section__reg">
            <h2 className='reg__title'>Get Started for Free</h2>
            <input className='reg__input' type="text" placeholder='Email Address' />
            <input className='reg__input' type="password"id="" placeholder='Password' />
            <button className='reg__button'>Get Started</button>
          </div>
        </div>
      </section>



      <div className="brand">
        <div className="brand__container container">
          <h2 className='brand__subtitle'>Trusted By Over 100+ Startups and freelance business</h2>
          <div className="brand__wrapper">
            <img src={orlage} alt="" />
            <img src={morpheus} alt="" />
            <img src={samsung} alt="" />
            <img src={manday} alt="" />
            <img src={segment} alt="" />
          </div>
          <h2 className="brand__title">Believing neglected so so allowance</h2>
          <p className="brand__description">We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own.</p>
          <button className="brand__blue-button">We so opinion friends me message as delight.</button>
        </div>
      </div>

      <div className="cards">
        <div className="cards__container container">
          <div className="card">
            <img className='card__img' src={cardone} alt="" />
            <h2 className='card__title'>Led Ask Possible Mistress</h2>
            <p className='card__description'>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>
          <div className="card">
            <img className='card__img' src={cardtwo} alt="" />
            <h2 className='card__title'>Led Ask Possible Mistress</h2>
            <p className='card__description'>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>
          <div className="card">
            <img className='card__img' src={cardthree} alt="" />
            <h2 className='card__title'>Led Ask Possible Mistress</h2>
            <p className='card__description'>Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
          </div>
        </div>
      </div>

      <div className="finaly-block">
        <div className="finaly-block__container container">
          <h2 className='finaly-block__title'>Track your crytpo portfolio on the best way possible</h2>
          <button className='finaly-block__button'>Check It Out</button>
        </div>
      </div>
    </div>
  )
}

export default App
