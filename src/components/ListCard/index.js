import "./index.css";

export const ListCard = (props) => {
  const { item } = props;
  return (
    <div className="list-card-container">
      <img
        className="checkbox "
        src={`/image/${item?.checked ? "checked.svg" : "unchecked.svg"}`}
        alt="checked-item"
      />
      <div className="list-card-text-container">
        <span className="list-card-title">{item.name}</span>
        <span className="list-card-subtitle">{item.quantity}</span>
      </div>
      <img src="/image/arrow.svg" alt="arrow-icon" className="arrow-icon" />
    </div>
  );
};
