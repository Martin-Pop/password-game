import React, {useEffect, useState} from 'react';
import {RuleProp} from "../RuleManager.tsx";

const UpperCaseRule: React.FC<RuleProp> = ({ pass, index, isUnlocked, passFulfilledCallback } : RuleProp) => {
    const [isValid, setIsValid] = useState<boolean>(false)

    useEffect(() => {
        setIsValid(pass.toLowerCase() !== pass)

        if (isValid && !isUnlocked) {
            passFulfilledCallback(index);
        }
    }, [index, isUnlocked, isValid, pass, passFulfilledCallback]);

    return (
        <div className={isValid ? 'fulfilled rule' : "unfulfilled rule btn-primary"}>
            <span className={"rule-number"}>{index + 1}</span>
            <span className={"rule-text"}>Heslo musí obsahovat velké písmeno</span>
        </div>
    );
};

export default UpperCaseRule;