import {
  FluentProvider,
  webLightTheme,
  Button,
} from '@fluentui/react-components';
import { Default as Example } from './example';
import * as React from 'react';

const App = () => {
  const [col, setCol] = React.useState(0);
  return (
    <FluentProvider theme={webLightTheme}>
      <Button
        onClick={() => {
          setCol(col - 1);
        }}
      >
        Change column - 1
      </Button>
      <Button
        onClick={() => {
          setCol(col + 1);
        }}
      >
        Change column + 1
      </Button>
      <Example col={col} />
    </FluentProvider>
  );
};

export default App;
