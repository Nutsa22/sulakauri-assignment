export function Footer(){
    return(<footer className="footer">
  <div className="footer-container">
    <div className="footer-section-logo">
      <img src="https://sulakauri.ge/themes/khe/assets/images/logo--white.svg" />
    </div>
    <div className="footer-links">
      <div className="footer-section">
        <h4>ჩვენს შესახებ</h4>
        <ul>
          <li>ჩვენი ისტორია</li>
          <li>ვაკანსიები</li>
          <li>წიგნის გამოცემა</li>
          <li>სპონსორობა</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>საიტის წესები</h4>
        <ul>
          <li>ხშირად დასმული კითხვები</li>
          <li>ქულების დაგროვება</li>
          <li>წესები და პირობები</li>
          <li>დახმარება</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>კონტაქტი</h4>
        <ul>
          <li> +995 032 291 11 65</li>
          <li>info@sulakauri.ge</li>
          <li>ჩვენი მაღაზიები</li>
          <li>დაგვიკავშირდით</li>
        </ul>
      </div>
      <div className="footer-section subscribe">
        <h4>გამოიწერე</h4>
        <p>გამოიწერე სიახლეები ან გამოგვყევი სოციალურ ქსელებში:</p>
        <input className="footer-input" type="email" placeholder="ელფოსტა" />
      </div>
    </div>
  </div>
</footer>)
}