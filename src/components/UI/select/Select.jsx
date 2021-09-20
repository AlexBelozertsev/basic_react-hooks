import React from 'react';
import style from './Select.module.css'

const Select = ({options, defaultValue, value, onChange}) => {
    return ( 
        <select
            value={value}
            onChange={e => onChange(e.target.value)}
            className={style.select}
        >
            <option disabled value="">{defaultValue}</option>
            {options.map(option =>
                <option key={option.value} value={option.value}>{option.name}</option>)}
        </select>
    );
}
 
export default Select;