import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import * as Icons from "react-icons/all";
import { Input, Icon } from 'antd';

const App: React.FC = () => {
  const [value, setValue] = useState('');

  const handleOnChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [setValue])

  const data = useMemo(() => {
    if(!value) {
      return []
    }
    return Object.entries(Icons).filter(([name]) => name.toLowerCase().search(value.toLowerCase()) !== -1)
  }, [value])

  return (
    <div className="App">
      <Input type="search" prefix={<Icon type="search" />} size="large" onChange={handleOnChangeInput} />
      <div>
        {data.map(([name, Icon]) => <div key={name}><Icon />{name}</div>)}
      </div>
    </div>
  );
}

export default App;
