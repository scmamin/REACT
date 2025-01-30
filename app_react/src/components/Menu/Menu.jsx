import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const MENU = [
    { title: "На главную", to: "/", key: uuid() },
    { title: "Работы", to: "/works", key: uuid() },
    { title: "Отзывы", to: "/review", key: uuid() },
    { title: "Блог", to: "/blog", key: uuid() },
  ];
  return (
    <ul className="menu">
      {MENU.map(({ title, to, key }) => (
        <li key={key}>
          <Link to={to}>{title}</Link>
        </li>
      ))}
    </ul>
  );
}
