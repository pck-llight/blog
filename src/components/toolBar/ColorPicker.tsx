import styled from "styled-components";

export default function ColorPicker() {
  return (
   <Wrapper>

   </Wrapper>
  )
}

const Wrapper = styled.div`
    display: flex;
    width: 20px;
    height: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 99999px;
    background: ${props=>props.color? '#'+props.color:'black'};
`
