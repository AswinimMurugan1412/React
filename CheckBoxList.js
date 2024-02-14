import React,{useState} from 'react';

const CheckBoxList = ({checkboxes}) =>{
    const [checkedState, setCheckedState] =useState(
        new Array(checkboxes.length).fill(false)
    );

const handleOnChange = (position) => {
    const updatedCheckState = checkedState.map((item, index) =>
    index === position ? !item : item
    );

    setCheckedState(updatedCheckState);
};
const countCheckedCheckboxes = () => {
    return checkedState.filter(Boolean).length;
};
return (
    <div>
        {checkboxes.map((item, index) => (
            <div key={index}>
                <lable>
                    <input type="checkbox" checked={checkedState[index]}
                    onChange={() => handleOnChange(index)} />
                    {item}
                </lable>
                </div>
        ))}
        <p>
            Number of checked checkboxes:
            <strong>{countCheckedCheckboxes()}</strong>
        </p>
    </div>
);
};
export default CheckBoxList
