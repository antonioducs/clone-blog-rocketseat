import { Box as BoxUI, BoxProps } from '@chakra-ui/react';

export const Box: React.FC<BoxProps> = props => {
  return <BoxUI {...props} />;
};
