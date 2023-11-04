import { useEffect, useState } from "react";
import { Input } from "../Input";
import { Button, button } from "../Button";
import "./index.css";
import { createItem, updateItem } from "../../services/request/index";

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert("Nome tem que ter mais de 3 caracteres");
      return;
    }

    if (quantity < 1) {
      alert("Quantidade não pode ser menor que 1");
      return;
    }

    return true;
  };

  const callAddItem = async () => {
    const validate = validateBeforeSave();
    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) });
      if (!result?.error) {
        alert("Item salvo com sucesso");
        onClose();
      }
    }
  };

  const callUpdateItem = async () => {
    const validate = validateBeforeSave();
    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked,
      });
      if (!result?.error) {
        alert("Item atualizado com sucesso");
        onClose();
      }
    }
  };

  useEffect(() => {
    if (item?.name && item?.quantity) {
      setName(item?.name);
      setQuantity(item?.quantity);
    }
  }, [item]);

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h1>{item ? "Editar Item" : "Adicionar novo item"}</h1>
          <button onClick={onClose} className="modal-close-button"></button>
        </div>
        <Input
          onChange={(text) => setName(text)}
          value={name}
          label="Nome"
          placeholder="Ex: Arroz"
        />
        <Input
          onChange={(text) => setQuantity(text)}
          value={quantity}
          label="Quantidade"
          type="number"
        />
        <div className="modal-spacer" />
        <Button onClick={item ? callUpdateItem : callAddItem}>
          {item ? "Atualizar" : "Adicionar"}
        </Button>
      </div>
    </div>
  );
};
