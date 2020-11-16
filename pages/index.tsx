import React, { FC } from 'react';
import { Chakra } from 'components/Chakra';

// components
import Test from 'components/Test';

type Props = {
  cookies: any;
};

const Home: FC<Props> = ({ cookies }) => {
  return (
    <Chakra cookies={cookies}>
      <Test />
    </Chakra>
  );
};

export { getServerSideProps } from 'components/Chakra';

export default Home;
