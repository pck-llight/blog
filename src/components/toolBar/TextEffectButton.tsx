import styled from "styled-components";
import BoldIcon from '../../assets/format_bold.svg?react';
import ItalicIcon from '../../assets/format_italic.svg?react';
import UnderlineIcon from '../../assets/format_underlined.svg?react';
import StrikethroughIcon from '../../assets/strikethrough_s.svg?react';
import HighlightIconSVG from '../../assets/format_ink_highlighter.svg?react';
import CodeIcon from '../../assets/code.svg?react';

interface TextEffectButtonProps {
    isActive: boolean;
    buttonType: "bold" | "italic" | "underline" | "strikethrough" | "highlight" | "code";
    onClick: () => void;
    hilightColor?: string
}

export default function TextEffectButton(props: TextEffectButtonProps) {


    return(
        <Wrapper active={props.isActive} onClick={() => {
            props.onClick();
            console.log(`${props.buttonType} button clicked`);
        }}>
            {props.buttonType === "bold" && <BoldIcon />}
            {props.buttonType === "italic" && <ItalicIcon />}
            {props.buttonType === "underline" && <UnderlineIcon />}
            {props.buttonType === "strikethrough" && <StrikethroughIcon />}
            {props.buttonType === "highlight" && <>
                <HighlightIcon>
                    <HighlightIconSVG/>
                    <HighlightColor color={props.hilightColor}></HighlightColor>
                </HighlightIcon>
            </>}
            {props.buttonType === "code" && <CodeIcon />}
        </Wrapper>
    )
}

const Wrapper = styled.div<{ active?: boolean }>`
    display: flex;
    width: 32px;
    height: 32px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: ${(props) => props.active ? "#F8F8F8" : "#FFFFFF"};
    border-radius: 6px;
`;
const HighlightIcon = styled.div`
    width: 20px;
    height: 20px;
    flex-shrink: 0;
    aspect-ratio: 1/1;
`;
const HighlightColor = styled.div`
    position: relative;
    width: 18px;
    height: 3px;
    bottom: 8px;
    left: 1px;
    border-radius: 3px;
    border: 0.2px solid rgba(0, 0, 0, 0.35);
    background: ${props=>props.color? '#'+props.color : '#E5F2FF'};
    z-index: 99;
`
