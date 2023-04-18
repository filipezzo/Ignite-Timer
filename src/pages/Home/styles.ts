import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: 0;
  font-weight: bold;
  cursor: pointer;

  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  padding: 1rem;
  gap: 0.5rem;
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  &:not(:disabled):hover {
    background: ${(props) => props.theme['green-700']};
  }

  background: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }

  background: ${(props) => props.theme['red-500']};
  color: ${(props) => props.theme['gray-100']};
`
