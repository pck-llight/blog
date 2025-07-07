import './App.css';
import TextBlock from './components/TextBlock';
import styled from 'styled-components';
import { useState } from 'react';

function App() {
  const [contents, setContents] = useState<string[]>(['']);
  
  return (
    <Screen >
      {contents.map((content, idx) => (
        <TextBlock
          key={idx}
          idx={idx}
          contents={contents}
          setContents={setContents}
        />
      ))}
    </Screen>
  );
  
}

const Screen = styled.div`
  width: 100%;
  /* height: 100dvh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4px;
`;

export default App;
