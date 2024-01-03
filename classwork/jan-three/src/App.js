import Styled from "./components/StyledComponents.js"
import ConditionalRednering from "./components/ConditionalRendering"
import ConditionalClasses from "./components/ConditionalClasses.js"
import ConditionalStyles from "./components/ConditionalStyles.js"
import './App.css';

function App() {
  return (
    <div className="App">
      <Styled />
      <ConditionalRednering  number ={20}/>
      <ConditionalClasses isVisible={true}/>
      <ConditionalStyles/>
  
    </div>
  );
}

export default App;
