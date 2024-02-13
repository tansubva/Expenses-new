import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="mainBody">
      
      {/* section 1 */}
      <div className="mainFunctionality">
        <Link to={'/expenses'}>
          <div className="logoExpenses"></div>
          <p>Отслеживание расходов</p>
        </Link>
        <div>
          <div className="logoExpenses"></div>
          <p>Управление бюджетом</p>
        </div>
        <div>
          <div className="logoExpenses"></div>
          <p>Сбережения</p>
        </div>
        <div>
          <div className="logoExpenses"></div>
          <p>Сбережения</p>
        </div>
      </div>

      {/* section 2 */}
      <div className="lastOperations">
        <p>Последние операции</p>
        <div className="operations">
          <div className="operation">
            <div className="operationQty"></div>
            <div className="operationName">name</div>
          </div>
          <div className="operation">
            <div className="operationQty"></div>
            <div className="operationName">name</div>
          </div>
          <div className="operation">
            <div className="operationQty"></div>
            <div className="operationName">name</div>
          </div>
        </div>
      </div>

      {/* section 3 */}
      <div className="budgetBody">
        <p></p>
        <div className="fundsAvailable">
            <p></p>
            <div className="totalAvailable"></div>
            <div className="fundsRange"></div>
        </div>
        <div className="famousCategories">
            <p></p>
            <div>
                <div className="iconCategory"></div>
                <div className="categoryName"></div>
            </div>
            <div>
                <div className="iconCategory"></div>
                <div className="categoryName"></div>
            </div>
            <div>
                <div className="iconCategory"></div>
                <div className="categoryName"></div>
            </div>
        </div>
      </div>
      {/* footer */}
      <footer>
        <div className="logo"></div>
        <div className="contacts"></div>
      </footer>
    </div>
  );
};
export default Main;
