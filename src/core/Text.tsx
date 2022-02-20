import { Text as TextUI, TextProps } from '@chakra-ui/react';

export const Text: React.FC<TextProps> = props => {
  return <TextUI {...props} />;
};
