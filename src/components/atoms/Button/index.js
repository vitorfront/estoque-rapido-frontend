import { ButtonContainer, ButtonIcon } from './styles'

export const Button = ({ children, onClick, variant, icon }) => {
  return (
    <ButtonContainer onClick={onClick} outline={variant === 'outline'}>
      {icon && (
        <ButtonIcon
          src={'/image/trash.svg'}
          className="button-icon"
          alt={`supermarket_icon_${icon}`}
        />
      )}
      {children}
    </ButtonContainer>
  )
}
