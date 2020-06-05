import React, { useState, useEffect } from 'react';

export const SerachFiled = ({getData, setData}) => {
    const [filedValue, setFiledValue] = useState('');

    const handleChange = ({target}) => {
        setFiledValue(target.value)
    }

    useEffect(() => {
        setData(
            getData.filter(item => item.title.toLowerCase().includes(filedValue.toLowerCase()))
        )
    }, [filedValue]);

    return (
        <div className="row">
            <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input
                    id="icon_prefix"
                    type="text"
                    className="validate"
                    value={filedValue}
                    onChange={handleChange}
                />
                <label htmlFor="icon_prefix">Serarch</label>
            </div>
        </div>
    )
}