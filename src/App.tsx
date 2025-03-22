import './App.css'
import {useState} from "react";
import PasswordInput from "./PasswordInput.tsx";
import RuleManager from "./RuleManager.tsx";
import ToggleVisibility from "./ToggleVisibility.tsx";
import PasswordTimeValidator from "./PasswordTimeValidator.tsx";

function App() {
  const [pass, setPass] = useState<string>('');
    const [visibility, setVisibility] = useState<boolean>(false);
  return (
    <div className={"primary"}>
        <h2>Napiš heslo:</h2>
        <PasswordTimeValidator pass={pass}/>
        <PasswordInput pass={pass} visibility={visibility} setPass={setPass}/>
        <ToggleVisibility visibility={visibility} setVisibility={setVisibility}/>

        <RuleManager pass={pass}/>
    </div>
  )
}

export default App
