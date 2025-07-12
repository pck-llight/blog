import  { useState } from 'react';
import { HexColorInput, HexColorPicker,  } from "react-colorful";
import styled from 'styled-components';

export default function ColorPicker() {
  const [color, setColor] = useState("#ff0000");
  const [usedColors, setUsedColors] = useState<string[]>([
    //이걸 나중에 하나씩 FIFO방식으로 바뀌어야 함.
    //근데 어떤기준으로 추가해줘야할지 잘 모르겠음.
    "#aabbcc",
    "#aabbcc",
    "#aabbcc",
    "#aabbcc",
    "#aabbcc",
    "#aabbcc",
    "#aabbcc",
  ]);


  return(
    <ColorPickerContainer>
      <HexColorPicker color={color} onChange={setColor} style={{ width: '240px', height: '240px' }} />
      <CurrentColorContainer>
        <Chip color={color} />
        <CurrentColorHex>
          <CurrentColorInput color={color} onChange={setColor} />
        </CurrentColorHex>
      </CurrentColorContainer>
      <UsedColorContainer>
        <UsedColorTitle>Used colors in article</UsedColorTitle>
        <UsedColorList>
          <Chip color={usedColors[0]} onClick={() => setColor(usedColors[0])} />
          <Chip color={usedColors[1]} onClick={() => setColor(usedColors[1])} />
          <Chip color={usedColors[2]} onClick={() => setColor(usedColors[2])} />
          <Chip color={usedColors[3]} onClick={() => setColor(usedColors[3])} />
          <Chip color={usedColors[4]} onClick={() => setColor(usedColors[4])} />
          <Chip color={usedColors[5]} onClick={() => setColor(usedColors[5])} />
        </UsedColorList>
      </UsedColorContainer>
    </ColorPickerContainer>
  )
}

const ColorPickerContainer = styled.div`
  display: flex;
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
  border-radius: 12px;
  background: #FFF;
  box-shadow: 0px 2px 10px 0px rgba(41, 48, 60, 0.08);
`
const CurrentColorContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 8px;
`
const CurrentColorHex = styled.div`
  width: 100%;
  display: flex;
  height: 36px;
  padding: 0px 12px;
  align-items: center;
  gap: 2px;
  flex: 1 0 0;
  border-radius: 8px;
  border: 1px solid rgba(48, 53, 62, 0.08);
`
const CurrentColorInput = styled(HexColorInput)`
  width: 100%;
  border: none;
  outline: none;
`
const Chip = styled.div`
  display: flex;
  width: 34px;
  height: 34px;
  padding: 0px 8px;
  align-items: center;
  gap: 2px;
  aspect-ratio: 1/1;
  border-radius: 8px;
  border: 1px solid rgba(22, 23, 25, 0.02);
  background-color: ${props => props.color};
`
const UsedColorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-self: stretch;
`
const UsedColorTitle = styled.div`
  color: #000;

/* Text/Body/BodyS_Bold */
  font-family: var(--Typeface-Family-Base, Pretendard);
  font-size: var(--Font-size-Footnote, 12px);
  font-style: normal;
  font-weight: 500;
  line-height: var(--Line-height-Footnote, 18px); /* 150% */
  letter-spacing: -0.24px;
`
const UsedColorList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  align-content: flex-start;
  gap: 6px;
  align-self: stretch;
  flex-wrap: wrap;`