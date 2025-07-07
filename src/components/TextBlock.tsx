import { useState, useRef } from 'react';
import styled from 'styled-components';
import { flushSync } from 'react-dom';
import DragIcon  from '../assets/drag_indicator.svg?react';
import AddIcon from '../assets/add.svg?react';


interface TextBlockProps {
  idx: number;
  contents: string[];
  setContents: (contents: string[]) => void;
}

function focusTextArea(idx: number) {
  const textAreas = document.querySelectorAll('textarea');
  if (textAreas[idx]) {
    (textAreas[idx] as HTMLTextAreaElement).focus();
  }
}

function getText(textareaRef: any) {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    console.log(selection?.toString());

  } else {
    return null;
  }
  
}

export default function TextBlock(props: TextBlockProps) {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [isComposing, setIsComposing] = useState(false);

  return (
    <Container>
      <AddIcon />
      <DragIcon />
      <TextArea
        onSelect={getText}
        ref={textareaRef}
        rows={1}
        autoFocus={true}
        onChange={(e) => {
          const newContents = [...props.contents];
          newContents[props.idx] = e.target.value;
          props.setContents(newContents);

          if (textareaRef && textareaRef.current) {
            textareaRef.current.style.height = "0px";
            const scrollHeight = textareaRef.current.scrollHeight;
            textareaRef.current.style.height = scrollHeight + "px";
          }
        }}
        value={props.contents[props.idx]}
        placeholder="Type here..."
        onCompositionStart={() => setIsComposing(true)}
        onCompositionEnd={() => setIsComposing(false)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && !e.shiftKey && !isComposing) {
            e.preventDefault();
            flushSync(() => {
              const newContents = [...props.contents];
              newContents.splice(props.idx + 1, 0, '');
              props.setContents(newContents);
            });
            focusTextArea(props.idx + 1);
          }
        }}
      />

    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: row;
`

const TextArea = styled.textarea<{ height?: number }>`
  background-color: rgb(245, 244, 244);
  width: 100%;
  border: none;
  outline: none;
  resize: none;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  padding: 4px;
  .scroll {
    overflow: hidden;
  }
`
