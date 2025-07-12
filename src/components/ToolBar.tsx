import styled from "styled-components";
import GenerateIcon from '../assets/generate.svg?react';
import MenuDownIcon from '../assets/menu_down.svg?react';
import TextListIcon from '../assets/list.svg?react';
import TitleIcon from '../assets/title.svg?react';
import TextEffectButton from "./toolBarModals/TextEffectButton.tsx";
import { useState } from "react";

export default function ToolBar() {
  const [TextEffectionList, setTextEffectList] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false
  ]);
  const [color, setColor] = useState<string>("#000000");

  function handleTextEffectToggle(index: number) {
    setTextEffectList((prev) => {
      const newList = [...prev];
      newList[index] = !newList[index];
      return newList;
    });
  }

  return (
    <Wrapper>
      <GenerateButton>
        <GenerateIcon />
        <GenerateButtonText>Generate Contents</GenerateButtonText>
      </GenerateButton>
      <Line />
      <TextTypeConTainer>
        <TextListButton>
          <TextListIcon />
          <MenuDownIcon />
        </TextListButton>
        <TextTypeButton>
          <TitleIcon />
          본문 텍스트
          <MenuDownIcon />
        </TextTypeButton>
      </TextTypeConTainer>
      <Line />
      <TextEffectButtonList>
        <TextEffectButton buttonType="bold" isActive={TextEffectionList[0]} onClick={()=>{handleTextEffectToggle(0)}}/>
        <TextEffectButton buttonType="italic" isActive={TextEffectionList[1]} onClick={()=>{handleTextEffectToggle(1)}} />
        <TextEffectButton buttonType="underline" isActive={TextEffectionList[2]} onClick={()=>{handleTextEffectToggle(2)}} />
        <TextEffectButton buttonType="strikethrough" isActive={TextEffectionList[3]} onClick={()=>{handleTextEffectToggle(3)}} />
        <TextEffectButton buttonType="highlight" isActive={TextEffectionList[4]} onClick={()=>{handleTextEffectToggle(4)}} hilightColor={'278594'}/>
        <TextEffectButton buttonType="code" isActive={TextEffectionList[5]} onClick={()=>{handleTextEffectToggle(5)}} />
        <ColorPickerButton color={color}/>{/* TODO: 클릭하면 색상 선택 모달 열기 */}
      </TextEffectButtonList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: inline-flex;
  padding: 6px;
  align-items: center;
  gap: 3px;
  border-radius: 9px;
  border: 0.5px solid rgba(18 ,25, 3d, 0.8);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.25);
`;

const Line = styled.div`
  width: 1px;
  height: 23px;
  background: rgba(0, 0, 0, 0.10);
`;

const GenerateButton = styled.div`
  display: flex;
  height: 32px;
  padding: 0px 7px;
  align-items: center;
  gap: 6px;
  align-self: stretch;
  border-radius: 6px;
  background: #F8F5FF;
  margin-right: 8px;
`
const GenerateButtonText = styled.div`
  color: #774AF8;
  font-family: 'buttonFont';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.28px;
`;

const TextTypeConTainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`

const TextListButton = styled.div`
  display: flex;
  height: 32px;
  padding: 0px 6px;
  align-items: center;
  gap: 4px;
`
const TextTypeButton = styled.div`
  display: flex;
  height: 32px;
  padding: 0px 6px;
  align-items: center;
  gap: 8px;
  border-radius: 6px;
  background: #F8F8F8;
  color: #000;
  font-family: 'buttonFont';
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px; /* 128.571% */
  letter-spacing: -0.28px;
`;

const TextEffectButtonList = styled.div`
  display: flex;
  padding: 0px 11px;
  align-items: center;
  gap: 3px;
`
const ColorPickerButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 9999px;
  background: ${(props) => props.color || "#000000"};
`;