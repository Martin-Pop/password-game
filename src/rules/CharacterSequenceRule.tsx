import React, {useEffect, useState} from 'react';
import {RuleProp} from "../RuleManager.tsx";

const CharacterSequenceRule: React.FC<RuleProp> = ({ pass, index, isUnlocked, passFulfilledCallback } : RuleProp) => {
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        setIsValid(/[a-z][A-Z][0-9][!@#$%^&*]/.test(pass));
        if (isValid && !isUnlocked) {
            passFulfilledCallback(index);
        }
    }, [pass, isValid, isUnlocked, passFulfilledCallback, index]);

    return (
        <div className={isValid ? 'fulfilled rule' : "unfulfilled rule"}>
            <span className={"rule-number"}>{index +1}</span>
            <span className={"rule-text"}>Heslo musí obsahovat sekvenci znaků (malý znak, velký znak, číslo, speciální znak)</span>
        </div>
    );
};

export default CharacterSequenceRule;