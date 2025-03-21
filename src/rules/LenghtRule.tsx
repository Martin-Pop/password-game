import React, {useEffect, useState} from 'react';
import {RuleProp} from "../RuleManager.tsx";

const LengthRule: React.FC<RuleProp> = ({ pass, index, isUnlocked, passFulfilledCallback } : RuleProp) => {
    const [isValid, setIsValid] = useState<boolean>(false)
    
    useEffect(() => {
        setIsValid(pass.length >= 8);
        if (isValid && !isUnlocked) {
            passFulfilledCallback(index);
        }
    }, [pass, isValid, isUnlocked, passFulfilledCallback, index]);

    return (
        <div className={isValid ? 'fulfilled rule' : "unfulfilled rule"}>
            <span className={"rule-number"}>{index +1}</span>
            <span className={"rule-text"}>Heslo musí mít alespoň 8 znaků</span>
        </div>
    );
};

export default LengthRule;