import axios from 'axios';
import { Button, Text } from '@fluentui/react-components';
import { useState } from 'react';
import React from 'react';

const App = () => {
  const [x, setX] = useState('nothing here...');
  let token = 'token here...  ';


  React.useEffect(() => {
    (async () => { 
      token = await OfficeRuntime.auth.getAccessToken({ allowSignInPrompt: true, allowConsentPrompt: true });
      setX('here in token... ' + token);
    })()
  }, []);

 
  const results = async () => {
    await axios.get(`api/trigger`, { headers: { 'Authorization': 'Bearer ' + token } });
    setX('here in here... ' + results + ' ... ' + token);
  }
  return (<>
    <Text>12345/// </Text>
    <Button onClick={results}>here click... 12345...</Button>
    {x}
  </>)

}

export default App
