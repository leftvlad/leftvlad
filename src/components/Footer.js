import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Национальный художественный музей</h1>
          <p>Вам точно понравится в нашем музее</p>
        </div>
        <div>
          <a href="https://www.facebook.com/warmuseumby">
            <i class="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/warmuseum.by/">
            <i class="fa-brands fa-instagram"></i>
          </a>
          <a href="https://t.me/warmuseumby">
            <i class="fa-brands fa-telegram"></i>
          </a>
          <a href="https://www.youtube.com/channel/UCjQMmU885Hpb0eOKUzWSHKA?view_as=subscriber">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>Филиалы</h4>
          <a href="/">Музей Дом Ваньковичей</a>
          <a href="/">Музей Белорусского народного искусства</a>
          <a href="/">Музей В.К. Бялыницкого-Бирули</a>
        </div>
        <div>
          <h4>Связь</h4>
          <a href="/">АДМИНИСТРАТОР: +375 (17) 111-11-72</a>
          <a href="/">ЗАКАЗ ЭКСКУРСИЙ: +375 (17) 111-11-92, +375 (29) 111-12-92</a>
        </div>
        <div>
          <h4>Помощь</h4>
          <a href="/">Где находится музей</a>
          <a href="/">Время работы музея</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
