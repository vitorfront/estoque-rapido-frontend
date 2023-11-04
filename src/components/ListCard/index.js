import "./index.css";
import { updateItem } from "../../services/request";

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <div className="list-card-container" onClick={() => onClick(item)}>
      <img
        className="checkbox"
        onClick={() => onCheckItem(item)}
        src={`/image/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item?.name}</span>
        <span className="list-card-subtitle">{item?.quantity} Unidades</span>
      </div>
      <img src="/image/arrow.svg" alt="arrow-icon" className="arrow-icon" />
    </div>
  );
};
