import PropTypes from "prop-types";
import "./Modal.css";
import Button from "../Button/Button";

const Modal = ({ onClose }) => {
  const clickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal_overlay" onClick={clickOutside}>
      <div className="modal">
        <Button className="modal_close" onClick={onClose} label="✖" />
        <h2>Обратная связь</h2>
        <form>
          <label htmlFor="email">
            E-mail:
            <input type="email" id="email" name="email" required />
          </label>
          <label htmlFor="tel">
            Телефон:
            <input type="tel" id="tel" name="tel" required />
          </label>
          <label htmlFor="message">
            Сообщение:
            <textarea
              type="text"
              id="message"
              name="message"
              required
            ></textarea>
          </label>
          <Button type="submit" className="button_send" label="Отправить" />
        </form>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Modal;
