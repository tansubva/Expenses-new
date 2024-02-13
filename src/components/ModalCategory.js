import { useEffect, useState } from "react";
const ModalCategory = (props) => {
  const [icon, setIcon] = useState(null);

  useEffect(() => {
    if (icon != null) {
      props.setIcon(icon);
      props.setState(false);
    }
  }, [icon]);

  return (
    <div className="modalContainer">
      <div className="modalBody">
        <div className="closeBtn">
          <img
            className="
            cancelIcon"
            src="images/cancel.svg"
            alt=""
            onClick={() => {
              props.setState(false);
            }}
          />
        </div>
        <h5>Добавить Иконку</h5>
        {/* Food & drinks */}
        <div className="categoriesImages">
          <div>
            <h3>Еда & Напитки</h3>
            <div className="categoryImg">
              <div>
                <img
                  src="images/food&drinks/supermarket.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Продукты</p>
              </div>
              <div className="imagesByCategory">
                <img
                  src="images/food&drinks/steak.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Рестораны</p>
              </div>
              <div>
                <img
                  src="images/food&drinks/juice.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Напитки</p>
              </div>
              <div>
                <img
                  src="images/food&drinks/muffin.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Десерты</p>
              </div>
              <div className="imagesByCategory">
                <img
                  src="images/food&drinks/delivery.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Доставка</p>
              </div>
            </div>
          </div>
        </div>
        {/* Housing */}
        <div className="categoriesImages">
          <div>
            <h3>Жилье & Траспорт</h3>
            <div className="categoryImg">
              <div>
                <img
                  src="images/housing/rent.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Аренда</p>
              </div>

              <div>
                <img
                  className="smallImg"
                  src="images/housing/invoice.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Счета</p>
              </div>

              <div className="imagesByCategory">
                <img
                  src="images/transportation/gas.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Бензин</p>
              </div>
              <div>
                <img
                  src="images/transportation/bus.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Транспорт</p>
              </div>

              <div>
                <img
                  src="images/transportation/hammer.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Ремонт</p>
              </div>
            </div>
          </div>
        </div>

        {/* Healthcare */}
        <div className="categoriesImages">
          <div>
            <h3>Образ жизни</h3>
            <div className="categoryImg">
              <div>
                <img
                  src="images/others/doctor.webp"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Больница</p>
              </div>
              <div className="imagesByCategory">
                <img
                  src="images/others/child.webp"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Дети</p>
              </div>
              <div>
                <img
                  src="images/others/shopping.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Покупки</p>
              </div>

              <div>
                <img
                  src="images/others/travel.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Путешествия</p>
              </div>
              <div>
                <img
                  src="images/others/bar.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Развлечения</p>
              </div>
            </div>
          </div>
        </div>
        {/* Incomes */}
        <div className="categoriesImages">
          <div>
            <h3>Доходы & Сбережения</h3>
            <div className="categoryImg">
              <div>
                <img
                  src="images/income/salary.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Заработная плата</p>
              </div>
              <div className="imagesByCategory">
                <img
                  src="images/income/savings.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Сбережения</p>
              </div>
              <div>
                <img
                  src="images/income/investments.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Инвестиции</p>
              </div>
              <div>
                <img
                  src="images/income/bank.png"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Проценты</p>
              </div>
              <div>
                <img
                  src="images/income/box.webp"
                  value={icon}
                  onClick={(e) => {
                    setIcon(e.target.src);
                  }}
                />
                <p>Прочее</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalCategory;
