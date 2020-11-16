import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

const Test = () => {
  const { toggleColorMode } = useColorMode();

  return <Button onClick={toggleColorMode}>Toggle</Button>;
};

export default Test;
