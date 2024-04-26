import { Button, FluentProvider, Text, webLightTheme } from '@fluentui/react-components';

import './App.css'
import axios from 'axios';
import React from 'react';

function App() {
  const [text, setText] = React.useState('before axios...');

  const onApi = async () => {

    const r = await axios.post(`api/play`);
    setText(r.data);
  }


  return (
    <FluentProvider theme={webLightTheme}>
      <Text size={900}>12345... {text}</Text>
      <Button onClick={onApi}>Api...</Button>
    </FluentProvider>
  )
}

export default App
