import React from "react";
import "./cardtile.scss";
import DeleteIcon from "../../assets/img/delete1.png";
import CalanderIcon from "../../assets/img/calendar1.png";
import CategoryIcon from "../../assets/img/categories.png";
const CardTile = ({ id, amount, detail, date, handleDelete, categoryName }) => {
  return (
    <div className="card">
      <div>
        <span className="amount">Rs {amount}</span>
        <p className="detail">{detail}</p>
        {categoryName ? (
          <div className="category">
            <img src={CategoryIcon} alt="cat" className="icon" />{" "}
            <span className="category__name">{categoryName}</span>
          </div>
        ) : (
          ""
        )}
        <span className="date">
          <img src={CalanderIcon} alt="calander" className="icon" />
          {`${Date(new Date({ date }).toLocaleTimeString)}`}
        </span>
      </div>
      <button className="delete-btn" onClick={() => handleDelete(id)}>
        <img src={DeleteIcon} alt="delete" className="icon" />
      </button>
    </div>
  );
};

export default CardTile;
