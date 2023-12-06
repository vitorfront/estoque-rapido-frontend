import { useState, useEffect } from 'react'
import { getList, updateItem } from 'services/request'
import { Modal, Loader, ListRender, Button, Title } from 'components'
import {
  ScreenContainer,
  ContentContainer,
  HeaderContainer,
  TitleContainer,
  LogoImage,
  HeaderButtonContainer,
  ListContainer
} from './styles'

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
    <ScreenContainer>
      <ContentContainer>
        <HeaderContainer>
          <TitleContainer>
            <LogoImage />
            <Title fontSize={32} lineHeight={32} ml={12}>
              Lista Supermercado
            </Title>
          </TitleContainer>
          <HeaderButtonContainer>
            <Button onClick={onClickAddButton}>
              {window.innerWidth <= 420 ? '+' : 'Adicionar'}
            </Button>
          </HeaderButtonContainer>
        </HeaderContainer>
        <ListContainer>
          {loading ? (
            <Loader />
          ) : (
            <ListRender
              onEdit={onEditItem}
              onCheckItem={onCheckItem}
              list={listData}
            />
          )}
        </ListContainer>
      </ContentContainer>
      {modalVisible && <Modal item={selectedItem} onClose={onCloseModal} />}
    </ScreenContainer>
  )
}
