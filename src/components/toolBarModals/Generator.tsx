import styled from 'styled-components';
import GeneratorIcon from '../../assets/generate_white.svg?react';

export default function Generator() {
  return (
    <Wrapper>
      <Title>콘텐츠 생성</Title>
      <GeneratorInput placeholder='과일 구매 후기 블로그...'/>
      <GeneratorButton>
          <GeneratorIcon />
          콘텐츠 생성하기
        </GeneratorButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  width: 369px;
  height: 151px;
  max-height: 400px;
  padding: 6px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid #E9E9E9;
  background: #FFF;
  box-shadow: 0px 2px 10px 0px rgba(24, 37, 61, 0.08);
`;
const Title = styled.div`
  display: flex;
  padding: 5px 7px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #626262;
  font-family: 'buttonFont';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`
const GeneratorInput = styled.textarea`
  display: flex;
  padding: 8px 6px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  align-self: stretch;
  border-radius: 7px;
  background: #F4F4F4;
  border: none;
  outline: none;
  resize: none;
  color: rgba(0, 0, 0, 0.40);
  font-family: 'buttonFont';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`
const GeneratorButton = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  display: flex;
  height: 26px;
  padding: 0px 7px;
  align-items: center;
  gap: 6px;
  border-radius: 6px;
  border: 1px solid rgba(0, 0, 0, 0.18);
  background: #774AF8;
  color: #FFF;
  font-family: 'buttonFont';
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
  letter-spacing: -0.24px;
  z-index: 99;
`