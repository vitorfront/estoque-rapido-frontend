import { useState, useEffect } from 'react'
import './index.css'
import { getList, updateItem } from 'services/request'
import { Modal, Loader, ListRender, Button, Title } from 'components'

export const ListScreen = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(true)
  const [listData, setListData] = useState([])
  const [selectedItem, setselectedIte] = useState(null)

  const loadListItems = async () => {
    setLoading(true)
    const result = await getList()
    setListData(result)
    setLoading(false)
  }

  const onClickAddButton = () => {
    setModalVisible(true)
    setselectedIte(null)
  }

  const onCloseModal = () => {
    setModalVisible(false)
    loadListItems()
    setselectedIte(null)
  }

  useEffect(() => {
    loadListItems()
  }, [])

  const onCheckItem = async (item) => {
    const result = await updateItem(item._id, {
      name: item.name,
      quantity: Number(item.quantity),
      checked: !item.checked
    })
    if (!result.error) {
      await loadListItems()
    }
  }

  const onEditItem = (item) => {
    setselectedIte(item)
    setModalVisible(true)
  }

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
            <Title fontSize={32} lineHeight={32} ml={12}>
              Lista Supermercado
            </Title>
          </div>
          <div className="list-screen-header-button-container">
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </div>
        </div>
        <div className="list-screen-list-container">
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onEdit={onEditItem}
              onCheckItem={onCheckItem}
              list={listData}
            />
          )}
        </div>
      </div>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </div>
  )
}
