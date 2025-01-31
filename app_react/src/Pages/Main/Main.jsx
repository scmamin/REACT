import Button from "../../components/Button/Button.jsx";
import Image from "../../assets/image.jpeg";
import Layout from "../../components/Layout/Layout.jsx";
import { useState } from "react";
import Modal from "../../components/Modal/Modal.jsx";

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <Layout className="main">
      <div className="main_container_info">
        <span className="main_rectangle"></span>
        <div className="h1_container">
          <h1 className="main_h1">Меня зовут Вячеслав,</h1>
          <h2 className="main_h2">я веб разработчик</h2>
        </div>
        <p className="main_p">
          Я создаю высокопроизводительные, красивые веб-сайты, которые
          ориентированы на конверсию, соответствуют бренду и удобны для людей.
        </p>
        <Button
          className="button_form"
          label="Связаться со мной"
          onClick={() => setIsModalOpen(true)}
        />
      </div>
      <img className="main_photo" src={Image} alt="image.jpeg" />
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)} />}

    </Layout>
  );
}
