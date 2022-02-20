import { Flex, Icon } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { MdGroupWork } from 'react-icons/md';

// import { Container } from './styles';

const menu = [
  {
    menu: 'Blog',
    link: '#',
  },
  {
    menu: 'Back-end',
    link: '#',
  },
  {
    menu: 'Front-end',
    link: '#',
  },
  {
    menu: 'Mobile',
    link: '#',
  },
  {
    menu: 'Carreira',
    link: '#',
  },
];

const MenuDesktop: React.FC = () => {
  return (
    <Flex width="80vw" height="80px" backgroundColor="#111">
      <Flex width="100px" height="100%">
        <Icon as={MdGroupWork} w={8} h={8} color="red.500" />
      </Flex>
      <Flex>
        {menu.map(item => {
          <Link href="#">{item.menu}</Link>;
        })}
      </Flex>
    </Flex>
  );
};

export default MenuDesktop;
