import { useState, useEffect } from "react";
import "./index.css";
import { getList } from "../../services/request";
import { ListCard, Loaderr, ListRender, Button } from "../../components";

export const ListScreen = () => {
  const [loading, setLoading] = useState(true);
  const [listData, setListData] = useState([]);

  const loadListItems = async () => {
    setLoading(true);
    const result = await getList();
    console.log(result);
    setListData(result);
    setLoading(false);
  };

  useEffect(() => {
    loadListItems();
  }, []);
  return (
    <div className="list-screen-container">
      <div className="list-screen-content-container">
        <div className="list-screen-header">
          <div className="list-screen-title-container">
            <img
              className="logo-image"
              src="/image/supermarket-list-logo.png"
              alt="supermarket-list-logo"
            />
            <h1 className="list-screen-header-title">Lista supermercado</h1>
          </div>
          <div className="list-screen-header-button-container">
            <Button>Adicionar</Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? <Loaderr /> : <ListRender list={listData} />}
        </div>
      </div>
    </div>
  );
};
