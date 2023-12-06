import { SmallText } from 'components/atoms'
import {
  CardContainer,
  CheckImage,
  TextContainer,
  ArrowContainer,
  ArrowIcon
} from './styles'

export const ListCard = ({ item, onClick, onCheckItem }) => {
  return (
    <CardContainer>
      <CheckImage
        onClick={() => onCheckItem(item)}
        src={`/image/${item?.checked ? 'checked.svg' : 'unchecked.svg'}`}
        alt="checked"
      />
      <TextContainer>
        <SmallText fontSize={17} mb={4} align="left">
          {item?.name}
        </SmallText>
        <SmallText fontSize={13} fontWeight={300} align="left">
          {item?.quantity} Unidades
        </SmallText>
      </TextContainer>
      <ArrowContainer onClick={() => onClick(item)}>
        <ArrowIcon />
      </ArrowContainer>
    </CardContainer>
  )
}
