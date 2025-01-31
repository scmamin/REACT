import "./Header.css";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import { useWinSize } from "../../Hooks/UseWinSize/UseWinSize";

export default function Header() {
  const { width } = useWinSize();
  const isDesktop = width >= 1200;

  return (
    <header>
      <div className="logo">Logo</div>
      {isDesktop ? <Menu /> : <BurgerMenu />}
      <Link to="/contacts">
        <Button className="button_contact" label="Контакты" />
      </Link>
    </header>
  );
}
