import './App.css';
import styled from 'styled-components';
import './assets/fonts/font.css';
import { useState } from 'react';
import ToolBar from './components/toolBar/ToolBar';

function App() {
  const [editorContent, setEditorContent] = useState<any[]>([
    {
      type: 'text',
      content: ''
    },
  ]);

  return (
    <Screen >
      {/* {editorContent.map((item, index) => (
        <BlockItem type={item.type} content={item.content} key={index}/>
      ))} */}
      <ToolBar />
    </Screen>
  );

}

const Screen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2px;
  
`;

export default App;
