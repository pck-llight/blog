import styled from "styled-components";
import ParagraghIcon from "../../assets/title.svg?react";
import H1Icon from "../../assets/title-1.svg?react";
import H2Icon from "../../assets/title-2.svg?react";
import H3Icon from "../../assets/title-3.svg?react";
import ImageIcon from "../../assets/image.svg?react";
import VideoIcon from "../../assets/animated_images.svg?react";
import CodeIcon from "../../assets/codeblock.svg?react";
import { useState } from "react";

export default function NewContents() {
	const [TextStyle] = useState<string[]>([
		"본문 텍스트",
		"첫번재로 큰 제목",
		"두번째로 큰 제목",
		"세번째로 큰 제목",
		"이미지",
		"영상",
		"코드 블럭",
	]);
	const [svgIcon] = useState<Element[]>([
		<ParagraghIcon />,
		<H1Icon />,
		<H2Icon />,
		<H3Icon />,
		<ImageIcon />,
		<VideoIcon />,
		<CodeIcon />,
	]);
	return (
		<Wrapper>
			<Title>새 콘텐츠 추가</Title>
			{TextStyle.map((style, index) => (
				<ButtonContainer key={index}>
					<TextStyleButton>
						{svgIcon[index]}
						<TextStyleButtonElement>{style}</TextStyleButtonElement>
					</TextStyleButton>
				</ButtonContainer>
			))}
		</Wrapper>
	);
}

const Wrapper = styled.div`
    display: flex;
    width: 212px;
    max-height: 400px;
    padding: 10px 7px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
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
    color: #A0A0A0;
    font-family: 'buttonFont';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
`;
const ButtonContainer = styled.div`
    display: flex;
    height: 28px;
	padding: 0 6px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    `;
const TextStyleButton = styled.div`
    display: flex;
    height: 28px;
    gap: 4px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
`;
const TextStyleButtonElement = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: #000;
    font-family: 'buttonFont';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
    letter-spacing: -0.28px;
`;
