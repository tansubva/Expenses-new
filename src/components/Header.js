import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import burgerMenu from "../burger-menu.svg";
import { ReactComponent as CancelIcon } from "../downarrow.svg"
const Header = () => {
  const [menu, setMenu] = useState(false);
  // menu toggle
  const burgerToggle = () => {
    setMenu(!menu);
  };
  // modal window
  const ModalHeader = () => {
    return (
      <nav className="menuHeader" onClick={burgerToggle}>
        <div className="navBar">
        <Link to={"budget"}>Бюджет</Link>
        <Link to={"expenses"}>Расходы</Link>
        <Link to={"categories"}>Категории</Link>
        </div>
        <CancelIcon onClick={burgerToggle}/>
      </nav>
    );
  };

  return (
    <div>
      <header>
        <div>Лого</div>
        {/* hamburger icon */}
        <img onClick={burgerToggle} src={burgerMenu} alt="burger menu" />
        {/* modal */}
        {menu && <ModalHeader />}
      </header>

      <Outlet />
    </div>
  );
};
export default Header;
