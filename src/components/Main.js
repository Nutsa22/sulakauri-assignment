import CoverImg from '../assets/skolisaken-mthavari-baneri-tsartserith-mob-1.webp';
import PencilImg from '../assets/kalami-academy-pastel-light-1.webp';
import paperImg from '../assets/tsebovani-phurtslebi-sweet-1.webp';
import RulerImg from "../assets/aluminis-sakhazavi.webp"
import Ruler from "../assets/sakhazavi-nakrebi-1.webp"
import BookOne from "../assets/dogmeni-5-rtsqhiltha-batoni.webp"
import BookTwo from "../assets/meore-sqesi-sinamdvile-da-mithebi-tsigni-pirveli.new_.webp"
import BookTree from "../assets/saotsrebatha-qveqhana-da-samqharos-dasasruli.new_.webp"
import PriceList from './PriceList';
import ProductArticle from './ProductAricle';

export function Main() {
  return (
  <main>
  <section className="cover">
    <img
      src={CoverImg}
      alt="სკოლისკენ"
    />
  </section>
  <section className="box-container">
    <h2>წიგნები</h2>
    {/* <div>
      <article className="box">
        <img
          className="img2"
          src={PencilImg}
          alt="pencil"

        />
        <div className="product-section">
          <h3>მარაგშია</h3>
          <a href="ბურთულიანიკალამი">ბურთულიანი კალამი</a>
         
        </div>
      </article>
      <article className="box">
        <img
          className="img2"
          src={paperImg}
          alt="peper"
        />
        <h3>მარაგშია</h3>
        <a href="წებოვანი ფურცლები">წებოვანი ფურცლები</a>
        <p className="product-price" />
      </article>
      <article className="box">
        <img
          className="img2"
          src={RulerImg}
          alt="ruler"
        />
        <h3>მარაგშია</h3>
        <a href="სახაზავი">სახაზავი</a>
        <p className="product-price" />
      </article>
      <article className="box">
        <img
          className="img2"
          src={Ruler}
          alt="ruler"
        />
        <h3>მარაგშია</h3>
        <a href="სახაზავის ნაკრები">სახაზავის ნაკრები</a>
        <p className="product-price" />
      </article>
    </div>
  </section>
  <section className="box-container"> */ }
    <h2></h2>
    <p />
    <div>
      {/* <article className="box">
        <img src={BookOne} alt="book" />
        <h3> ბესტსელერი </h3>
        <h3>მარაგშია</h3>
        <p className="product-price" />
      </article>
      <article className="box">
        <img
          src={BookTwo}
          alt="book"
        />
        <h3>ბესტსელერი</h3>
        <h3>მარაგშია</h3>
        <p className="product-price" />
      </article>
      <article className="box">
        <img
          src={BookTree}
          alt="book"
        />
        <h3>ბესტსელერი</h3>
        <h3>მარაგშია</h3>
        <p className="product-price" />
      </article>
      <article className="box">
        <img src={BookOne} alt="book" />
        <h3>ბესტსელერი</h3>
        <h3>მარაგშია</h3>
        <p className="product-price" />
      </article>
      <article className="box-container2" /> */}
    </div>
    <div>
      <PriceList />
</div>
    <div/>
  </section>
</main>  )
}