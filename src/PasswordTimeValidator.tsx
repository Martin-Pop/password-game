import {useEffect, useState} from "react";
import {JustPass} from "./RuleManager.tsx";

const PasswordTimeValidator = ({ pass }: JustPass) => {
    const [lastTime, setLastTime] = useState<number | null>(null);
    const [timeDiff, setTimeDiff] = useState<number>(0);

    const [isValid, setIsValid] = useState<boolean>(true);
    const [lastLength, setLastLength] = useState<number>(0);

    useEffect(() => {
        console.log(lastLength)

        const length = pass.length;
        if (length > 0) {

            if (!isValid && length === lastLength){
                setIsValid(true)
            }

            if(isValid){
                if(lastTime != null){
                    const now = Date.now()
                    const diff = now - lastTime
                    if (diff < 15){
                        setIsValid(false)
                    }
                    setTimeDiff(diff)
                    setLastTime(now)
                    setLastLength(length)
                }else{
                    setLastTime(Date.now())
                }
            }
        } else {
            setLastTime(null);
            setIsValid(true);
            setLastLength(0);
        }
    },[pass]);

    return (
        <>
            <p style={{ color: 'red' }}>
                {isValid ? "" : `Moc rychle ${timeDiff} ms`}
            </p>
        </>

    );
};

export default PasswordTimeValidator;