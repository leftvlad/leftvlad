import "./MyContactStyles.css"


function MyContact() {
  return (
    <div className="row">
		<div className="col-md-6">
			<div className="wm-card border_top_cranberry">
				<div className="cont-punkt"><i class="fa-solid fa-location-crosshairs"></i> Улица Ленина, 20, г. Минск, Республика Беларусь, 220030
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-clock"></i> ВТ-ВС с 10:00 до 19:00.
					 Вход для посетителей до 18:30.
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-envelope"></i><a href="mailto:mail@artmuseum.by" target="_blank">mail@artmuseum.by</a>
				</div>
			</div>
		</div>
		<div className="col-md-6">
			<div className="wm-card border_top_green">
				<div className="card-cont-header">
					 Администратор:
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-phone"></i> <a href="tel:+375171111172">+375 (17) 111-11-72 </a>
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-clock"></i> (ВТ-ВС с 10:00 до 18:00)
				</div>
			</div>
		</div>
		<div className="col-md-6">
			<div className="wm-card border_top_brown">
				<div className="card-cont-header">
					 Приемная:
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-phone"></i> <a href="tel:+375 (17) 111-11-66">+375 (17) 111-11-66; </a>
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-print"></i> <a href="tel:+375 (17) 111-11-65">+375 (17) 111-11-65;</a>
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-clock"></i> пн - пт с 9:00 до 18:00, пт до 17:00.
				</div>
			</div>
		</div>
		<div className="col-md-6">
			<div className="wm-card border_top_haki">
				<div className="card-cont-header">
					 Заказ экскурсий:
					 +375 (17) 111-11-92,+375 (29) 111-12-92;
				</div>
				<div className="cont-soc-chats"><a href="viber://chat?number=%2B375291440792"><i class="fa-brands fa-viber"></i> Viber</a> <a href="https://wa.me/375291440792"><i class="fa-brands fa-whatsapp"></i>
					WhatsApp</a> <a href="tg://resolve?domain=375291440792"><i class="fa-brands fa-telegram"></i>
					Telegram</a><a href="mailto:zakaz@artmuseum.by">zakaz@artmuseum.by</a>
				</div>
				<div className="cont-punkt"><i class="fa-solid fa-clock"></i> пн - пт с 9:00 до 18:00.
				</div>
			</div>
		</div>
	</div>
    
  );
}

export default MyContact;
