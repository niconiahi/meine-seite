import React from 'react';
import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
  StorageManager,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import { FC } from 'react';

type Props = {
  cookies: any;
};

export const Chakra: FC<Props> = ({ cookies, children }) => {
  const colorModeManager: StorageManager =
    typeof cookies === 'string' ? cookieStorageManager(cookies) : localStorageManager;

  return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>;
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => ({
  props: {
    cookies: req.headers.cookie ?? '',
  },
});
