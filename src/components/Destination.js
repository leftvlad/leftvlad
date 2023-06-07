import Mountain1 from "../assets/1.jpg";
import Mountain2 from "../assets/2.jpg";
import Mountain3 from "../assets/3.jpg";
import Mountain4 from "../assets/4.jpg";
import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Знаменитые картины музея</h1>
      <p>Лучшие один раз увидиеть, чем сто раз услышать</p>
      <DestinationData
      className="first-des"
      heading="Картины &laquo;Неравный брак&raquo; и &laquo;Мой город древний, молодой&raquo;"
      text="Благодаря картине &laquo;Неравный брак&raquo; имя Василия Пукирева узнала вся Россия, поскольку работа вызывала бурную полемику в прессе. За картину художник был удостоен звания профессора. Картина &laquo;Мой город древний, молодой&raquo; народного художника Беларуси Мая Данцига отличается внушительными размерами, сочностью красок, монументальной композицией и необычным ракурсом, взятым словно с высоты птичьего полета."
      img1={Mountain1}
      img2={Mountain2}
      />
      <DestinationData
      className="first-des-reverse"
      heading="Икона &laquo;Рождество Богоматери&raquo; и картина &laquo;Минск 3 июля 1944 года&raquo;"
      text="Предположительно, икона &laquo;Рождество Богоматери&raquo; написана по заказу могилевского жителя Петра Овсиевича Зурасты, вероятно, родом из деревни Голынец. К декаде белорусского искусства в Москве (1955 год) Валентин Волков закончил большую картину, ставшую визитной карточкой художника - &laquo;Минск 3 июля 1944 года&raquo;"
      img1={Mountain3}
      img2={Mountain4}
      />
    </div>
  );
};

export default Destination;
