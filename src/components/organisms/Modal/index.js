import { useState } from 'react'
import { Input } from 'components/molecules'
import { Title, Button } from 'components/atoms'
import { createItem, updateItem, deleteItem } from 'services/request'
import {
  ModalBackgroundContainer,
  ModalContentContainer,
  ModalHeaderContainer,
  ModalCloseButton,
  ButtonsContainer
} from './styles'

export const Modal = ({ onClose, item }) => {
  const [name, setName] = useState('')
  const [quantity, setQuantity] = useState(1)

  const validateBeforeSave = () => {
    if (name.length < 3) {
      alert('Nome tem que ter mais de 3 caracteres')
      return
    }

    if (quantity < 1) {
      alert('Quantidade não pode ser menor que 1')
      return
    }

    return true
  }

  const callAddItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await createItem({ name, quantity: Number(quantity) })
      if (!result?.error) {
        alert('Item salvo com sucesso')
        onClose()
      }
    }
  }

  const callUpdateItem = async () => {
    const validate = validateBeforeSave()
    if (validate) {
      const result = await updateItem(item?._id, {
        name,
        quantity: Number(quantity),
        checked: item?.checked
      })
      if (!result?.error) {
        alert('Item atualizado com sucesso')
        onClose()
      }
    }
  }

  const callDeleteItem = async () => {
    const result = await deleteItem(item?._id)
    if (!result?.error) {
      alert('Item deletado com sucesso')
      onClose()
    }
  }

  return (
    <ModalBackgroundContainer>
      <ModalContentContainer>
        <ModalHeaderContainer>
          <Title>{item ? 'Editar Item' : 'Adicionar novo item'}</Title>
          <ModalCloseButton onClick={onClose}></ModalCloseButton>
        </ModalHeaderContainer>
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
        <ButtonsContainer>
          {item && (
            <Button icon="trash" variant="outline" onClick={callDeleteItem}>
              Deletar item
            </Button>
          )}

          <Button onClick={item ? callUpdateItem : callAddItem}>
            {item ? 'Atualizar' : 'Adicionar'}
          </Button>
        </ButtonsContainer>
      </ModalContentContainer>
    </ModalBackgroundContainer>
  )
}
