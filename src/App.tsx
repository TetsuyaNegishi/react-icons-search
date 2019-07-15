import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import * as Icons from "react-icons/all";
import { Input, Icon, Card, Layout } from 'antd';

const { Header, Content } = Layout;

const iconsList = Object.entries(Icons);

const iconBoxStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, 150px)',
  gap: '20px',
  justifyContent: 'center',

  padding: '10px 0',
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
    <Layout style={{minHeight: '100vh'}}>
      <Header><h1 style={{color: 'white'}}>react-icons-search-site</h1></Header>
      <Content style={{padding: '20px 50px'}}>
        <Input type="search" prefix={<Icon type="search" />} size="large" onChange={handleOnChangeInput} />
        <div style={iconBoxStyle}>
          {data.map(([name, Icon]) => (
            <Card key={name} style={{textAlign: 'center'}} hoverable size="small" cover={<div style={{paddingTop: '10px'}}><Icon size={50} /></div>}>
              <Card.Meta title={name} />
            </Card>
          ))}
        </div>
      </Content>
    </Layout>
  );
}

export default App;
