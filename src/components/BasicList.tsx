import React, { useState } from 'react';
import '../App.css';

const BasicList: React.FC = () => {
    const defaultList = ['Frontend', 'Backend', 'Relational', 'MVC', 'RESTfulAPIs', 'Ruby on Rails', 'Go'];
    const [list, setList] = useState(defaultList);
    const [value, setValue] = useState('');
    return (
        <div style={{ width: '25vw', margin: 'auto', textAlign: 'center' }}>
            <input
                placeholder="search bar"
                onChange={(event) => setValue(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key != 'Enter') {
                        return;
                    }
                    setList(defaultList.filter((val) => val.toLowerCase().includes(value.toLowerCase())));
                }}
            />
            <h4>{'Some web development tools/concepts:'}</h4>
            <ul>
                {list.map((val) => (
                    <li key={val}>{val}</li>
                ))}
            </ul>
        </div>
    );
};

export default BasicList;
