import "./App.css";
import styled from "styled-components";
import "./assets/fonts/font.css";
import { useState } from "react";
import ToolBar from "./components/ToolBar.tsx";
import Generator from "./components/toolBarModals/Generator.tsx";
import ColorPicker from "./components/toolBarModals/ColorPicker.tsx";
import NewContents from "./components/toolBarModals/NewContents.tsx";

function App() {
	const [editorContent, setEditorContent] = useState<any[]>([
		{
			type: "text",
			content: "",
		},
	]);

	return (
		<Screen>
			{/* {editorContent.map((item, index) => (
				<BlockItem type={item.type} content={item.content} key={index} />
			))} */}
			<NewContents />
			<ToolBar />
			<Generator />
			<ColorPicker />
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
