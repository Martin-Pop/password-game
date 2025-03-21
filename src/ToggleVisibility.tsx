interface ToggleVisibilityProps {
    visibility : boolean,
    setVisibility :React.Dispatch<React.SetStateAction<boolean>>
}

function ToggleVisibility ({visibility,setVisibility } :ToggleVisibilityProps) {
   const handleChange : () => void = () => {
       if (visibility){
           setVisibility(false);
       }else{
           setVisibility(true);
       }
   }

    return (
        <div className={'toggle-visibility'}>
            <label>Viditelnost</label>
            <input type="checkbox" onChange={handleChange}/>
        </div>
   );
}

export default ToggleVisibility;