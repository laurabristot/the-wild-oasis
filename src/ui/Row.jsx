import styled, { css } from 'styled-components'

export const Row = styled.div`
  display: flex;
  ${(props) =>
    props.type === 'horizontal' &&
    css`
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`

Row.defaultProps = {
  type: 'vertical'
}
