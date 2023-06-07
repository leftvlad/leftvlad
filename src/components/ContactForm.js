import "./ContactFormStyles.css";

function ContactForm() {
  return (
    <div className="from-container">
      <h1>Форма для покупки билета</h1>
      <form action="check.php" method="post">
        <input name="name" placeholder="Ф.И.О."/>
        <input type="email" placeholder="Email"/>
        <input type="tel" placeholder="Телефон в формате +375(00)111-11-11"/>
        <textarea placeholder="Пометка" rows="4"></textarea>
        <button type="submit">Купить билет</button>
      </form>
    </div>
  );
}

export default ContactForm;
