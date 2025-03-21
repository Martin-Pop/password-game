import React, {useState} from "react";
import {rules} from './Rules.ts';

export interface RuleProp{
    pass : string;
    index : number;
    isUnlocked : boolean;
    passFulfilledCallback : (number:number) => void;
}

interface JustPass{
    pass : string
}

const RuleManager : React.FC<JustPass> = ({pass} : JustPass) =>{

    //je to array a ne pocet protoze kdyz uzivatel nahodou splni pravidlo ktere jeste neni zobrazene
    const [fulfilledRules, setFulfilledRules] = useState<number[]>([]);

    const onRuleFulfilled : (index : number) => void  = (index : number) => {
        const last : number | undefined  = fulfilledRules[fulfilledRules.length - 1];
        if (last === index - 1 || last === undefined){
            if (!fulfilledRules.includes(index) ){
                setFulfilledRules(prev => [...prev, index]);
            }
        }
    }

    return(
        <div className={'rules'}>
            {
                rules.map((rule, index) => {
                const RuleComponent = rule;
                // console.log("current index" + index)
                if (fulfilledRules.includes(index) || fulfilledRules.length === index) {
                    return <RuleComponent key={index} pass={pass} index={index} isUnlocked={fulfilledRules.length !== index} passFulfilledCallback={onRuleFulfilled}/>;
                }
            })}

        </div>
    );
}

export default RuleManager;
