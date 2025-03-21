import React, {useEffect, useState} from 'react';
import {RuleProp} from "../RuleManager.tsx";

const SpecialCharacterRule: React.FC<RuleProp> = ({ pass, index, isUnlocked, passFulfilledCallback } : RuleProp) => {
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        setIsValid(/[!@#$%^&*]/.test(pass))

        if (isValid && !isUnlocked) {
            passFulfilledCallback(index);
        }
    }, [index, isUnlocked, isValid, pass, passFulfilledCallback]);

    return (
        <div className={isValid ? 'fulfilled rule' : "unfulfilled rule"}>
            <span className={"rule-number"}>{index + 1}</span>
            <span className={"rule-text"}>Heslo musí obsahovat speciální znak (!@#$%^&*)</span>
        </div>
    );
};

export default SpecialCharacterRule;