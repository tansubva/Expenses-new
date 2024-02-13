import { useState, useEffect } from "react";
import { ReactComponent as DownArrow } from "../downarrow.svg";

const ExpensesCreate = () => {
  // expenses
  const [expenses, setExpenses] = useState(() => {
    let storageExpenses = localStorage.getItem("expenses");
    if (storageExpenses != null) {
      return JSON.parse(storageExpenses);
    } else {
      return [];
    }
  });
  // incomes
  const [incomes, setIncomes] = useState(() => {
    let storageIncomes = localStorage.getItem("incomes");
    if (storageIncomes != null) {
      return JSON.parse(storageIncomes);
    } else {
      return [];
    }
  });

  //   categories
  const categories = JSON.parse(localStorage.getItem("categories"));
  // categories dropdown
  const [dropdown, setDropdown] = useState(false);
  // object values
  const [procedureType, setProcedureType] = useState();
  const [procedureAmount, setProcedureAmount] = useState();
  const [procedureDate, setProcedureDate] = useState();
  const [procedureCategory, setProcedureCategory] = useState();
  const [procedureDescription, setProcedureDescription] = useState();
  // procedureType selection
  const [expenseColor, setExpenseColor] = useState("rgb(239, 239, 239)");
  const [incomeColor, setIncomeColor] = useState("rgb(239, 239, 239)");

  // creating object
  const createProcedure = () => {
    // adding to expenses
    if (procedureType == "expenses") {
      expenses.push({
        type: procedureType,
        amount: procedureAmount,
        date: procedureDate,
        category: procedureCategory,
        description: procedureDescription,
      });
      setExpenses([...expenses]);
      // adding to incomes
    } else if (procedureType == "income") {
      incomes.push({
        type: procedureType,
        amount: procedureAmount,
        date: procedureDate,
        category: procedureCategory,
        description: procedureDescription,
      });
      setIncomes([...incomes]);
    }
  };
  // localstorage
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes));
  }, [incomes]);

  // controlling dropdown
  const dropdownToggle = () => {
    setDropdown(!dropdown);
  };

  return (
    <div>
      <div className="expensesCreateBody">
        <input
          placeholder="Сумма"
          type="number"
          name=""
          id="qty"
          onChange={(e) => {
            setProcedureAmount(e.target.value);
          }}
        />
        <div className="procedures">
          {/* expenses selection */}
          <button
            className="procedureType"
            style={{ backgroundColor: expenseColor }}
            onClick={() => {
              setProcedureType("expenses");
              setExpenseColor("rgb(173, 188, 159)");
              setIncomeColor("rgb(239, 239, 239)");
            }}
          >
            Расходы
          </button>

          {/* incomes selection */}
          <button
            className="procedureType"
            style={{ backgroundColor: incomeColor }}
            onClick={() => {
              setProcedureType("income");
              setIncomeColor("rgb(173, 188, 159)");
              setExpenseColor("rgb(239, 239, 239)");
            }}
          >
            Доходы
          </button>

          {/* amount input */}
        </div>
      </div>
      <div className="expensesCreateBody">
        <div onClick={dropdownToggle} className="categories">
          <div className="categoriesPreview">
            <p>Категории</p>
            <DownArrow className="downArrow" />
          </div>
        </div>
        {dropdown && categories && (
          <div className="categoryDropdown">
            <div className="modalCategories">
              {categories.map((category, key) => (
                <div
                  onClick={() => {
                    setDropdown(!dropdown);
                    setProcedureCategory(category.categoryName);
                  }}
                  className="categoryList"
                  key={key}
                >
                  <img src={category.icon} alt="" />
                  <p>{category.categoryName}</p>
                </div>
              ))}
              {/* category link */}
              <a
                href="http://localhost:3000/categories"
                className="categoryCreate"
              >
                Добавить Категории
              </a>
            </div>
          </div>
        )}
        
        {/* date input */}
        <input
          type="date"
          name=""
          id="dateExpenses"
          onChange={(e) => {
            setProcedureDate(e.target.value);
          }}
        />
        {/* notes */}
        <textarea
          placeholder="Примечание"
          name=""
          id=""
          cols="30"
          rows="10"
          onChange={(e) => {
            setProcedureDescription(e.target.value);
          }}
        ></textarea>
        <button onClick={createProcedure} className="addProcedure">
        Добавить
      </button>
      </div>

      {/* categories */}

      {/* category dropdown */}

      {/* adding procedure */}
      
    </div>
  );
};
export default ExpensesCreate;
