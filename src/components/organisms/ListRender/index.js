import { ListCard } from 'components/molecules'
import { ListRenderContainer } from './styles'
import { Subtitle } from 'components/atoms'

export const ListRender = ({ list, onEdit, onCheckItem }) => {
  if (list?.length === 0) {
    return (
      <Subtitle>
        {' '}
        Seu estoque está vazio, clique no botão de "Adicionar" para incluir
        novos itens{' '}
      </Subtitle>
    )
  }

  return (
    <ListRenderContainer>
      {list.map((item) => (
        <ListCard
          onCheckItem={onCheckItem}
          onClick={onEdit}
          item={item}
          key={item?._id}
        />
      ))}
    </ListRenderContainer>
  )
}
