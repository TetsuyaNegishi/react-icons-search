import { css } from '@emotion/core';
import styled from '@emotion/styled';
import React, { useState, useCallback, useMemo } from 'react';
import './App.css';
import * as Icons from "react-icons/all";
import { Input, Icon, Card, Layout } from 'antd';

const { Header, Content } = Layout;

const iconsList = Object.entries(Icons);

const iconBoxCss = css`
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  gap: 20px;
  justify-content: center;

  padding: 10px 0;
`;

const Root = styled(Layout)`
  min-height: 100vh;
`;

const mainCss = css`
  max-width: 835px;
  width: 100%;
  margin: 20px auto;
  padding: 0 50px;
`

const Title = styled.h1`
  display: inline;
  color: white;
  margin: 0;
`

const App: React.FC = () => {
  const [value, setValue] = useState('');

  const handleOnChangeInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }, [setValue])

  const data = useMemo(() => {
    if(!value) {
      return []
    }
    return iconsList.filter(([name]) => name.toLowerCase().search(value.toLowerCase()) !== -1).slice(0, 30)
  }, [value])

  return (
    <Root>
      <Header><Title>react-icons-search</Title></Header>
      <Content css={mainCss}>
        <Input type="search" prefix={<Icon type="search" />} size="large" onChange={handleOnChangeInput} />
        <div css={iconBoxCss}>
          {data.map(([name, Icon]) => (
            <Card key={name} style={{textAlign: 'center'}} hoverable size="small" cover={<div style={{paddingTop: '10px'}}><Icon size={50} /></div>}>
              <Card.Meta title={name} />
            </Card>
          ))}
        </div>
      </Content>
    </Root>
  );
}

export default App;
