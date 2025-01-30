import "./Header.css";
import Menu from "../Menu/Menu";
import Button from "../Button/Button";

export default function Header() {
  return (
    <>
      <header>
        <div className="logo">Logo</div>
        <Menu />
        <Button className="button_contact" label="Контакты" />
      </header>
    </>
  );
}
