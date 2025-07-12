import styled from "styled-components";
import AddIcon from '../../assets/add.svg?react';
import DragIcon from '../../assets/drag_indicator.svg?react';

import { useState } from "react";

interface BlockItemProps {
  content?: any;
  type: 'text'|'image'|'video'|'code'
}

export default function BlockItem(props: BlockItemProps) {
  const [buttonActive, setButtonAtive] = useState<boolean>(false);

  return (<Wrapper onMouseEnter={()=>setButtonAtive(true)} onMouseLeave={()=>setButtonAtive(false)}>
    <IconWrapper isHovered={buttonActive || true}>
      <AddIcon width={24} height={24} />
      <DragIcon width={24} height={24} />
    </IconWrapper>
    {(() => {
      switch(props.type){
        case 'text':
          return (
            <Content>
            </Content>
          );
        // case 'image':
        //   return (
        //     <Content>
        //       <ImageBlock content={props.content}/>
        //     </Content>
        //   );
        // case 'video':
        //   return (
        //     <Content>
        //       <VideoBlock content={props.content}/>
        //     </Content>
        //   );
        // case 'code':
        //   return (
        //     <Content>
        //       <CodeBlock content={props.content}/>
        //     </Content>
        //   );
        default:
          {console.log('블럭 없음')}
          return null;
      }
    })()}
    
  </Wrapper>);
}

const Wrapper = styled.div`
  width: 100%;
  max-width: 640px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 2px;
`
const IconWrapper = styled.div<{ isHovered: boolean }>`
  opacity: ${({ isHovered }) => (isHovered ? 1 : 0)};
  transition: opacity 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28);
  display: flex;
  flex-direction: row;
  align-items: center;
`

const Content = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-left: 8px;
`