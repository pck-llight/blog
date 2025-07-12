import { useRef, useState } from 'react';
import styled from 'styled-components';


export default function ParaGraphBlock({ children }: { children: React.ReactNode }) {
  const [isComposing, setIsComposing] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);
  const [text, setText] = useState<string>('');
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
    // textarea 높이 조절
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = "0px";
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + "px";
    }
  };

  return (
    <ParaGraphInput
      onCompositionStart={() => setIsComposing(true)}
      onCompositionEnd={() => setIsComposing(false)}
      ref={textareaRef}
      rows={1}
      placeholder='Enter text here...'
      onChange={onChange}
    >
      {children}
    </ParaGraphInput>
  );
}

const ParaGraphInput = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  outline: none;
  font-size: 16px;
  overflow: hidden;
  font-family: 'paragraphFont', sans-serif;
`