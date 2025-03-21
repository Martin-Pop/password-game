import React, {useEffect} from "react";

interface PasswordInputProps{
    pass: string
    setPass :  React.Dispatch<React.SetStateAction<string>>
    visibility : boolean
}

function PasswordInput ({pass ,setPass, visibility} : PasswordInputProps) {

    useEffect(() => {
        const sabotageInterval = setInterval(() => {
            setPass(prevPassword => {
                // Náhodně rozhodneme, zda přidáme emoji nebo odebereme znak
                const action = Math.random() < 0.5 ? 'add' : 'remove';
                if (action === 'add') {
                    // Přidáme emoji ke stávajícímu heslu
                    return prevPassword + "-";
                } else {
                    // Odebereme náhodný znak, pokud heslo není prázdné
                    if (prevPassword.length === 0) return prevPassword;
                    const index = Math.floor(Math.random() * prevPassword.length);
                    return prevPassword.slice(0, index) +""+ prevPassword.slice(index + 1);
                }
            });
        }, 10000); // 10 sekund pro test; reálně 120000 ms (2 minuty)
        return () => clearInterval(sabotageInterval);
    }, []);

    const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPass(event.target.value);
    }

    return(
        <div className={'pass-input border border-primary"'}>
            <input type={visibility ? 'textarea' : 'password'} value={pass ?? ""} onChange={inputHandler}/>
        </div>
    );
}

export default  PasswordInput;