import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import * as Icons from "react-icons/all";
import { Input, Icon, Card } from 'antd';

const iconsList = Object.entries(Icons);

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 150px)',
  gap: '20px',
  justifyContent: 'center',
}

const App: React.FC = () => {
  const [value, setValue] = useState('');

  const handleOnChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [setValue])

  const data = useMemo(() => {
    if(!value) {
      return []
    }
    return iconsList.filter(([name]) => name.toLowerCase().search(value.toLowerCase()) !== -1)
  }, [value])

  return (
    <div className="App">
      <Input type="search" prefix={<Icon type="search" />} size="large" onChange={handleOnChangeInput} />
      <div style={gridStyle}>
        {data.map(([name, Icon]) => (
          <Card key={name} hoverable size="small" cover={<div style={{paddingTop: '10px'}}><Icon size={50} /></div>}>
            <Card.Meta title={name} />
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
