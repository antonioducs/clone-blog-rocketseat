import { useCallback } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';

import dayjs from 'dayjs';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Box, Flex, Text } from 'core';

type Content = {
  contents: string;
  type: 'title' | 'text' | 'quote' | 'enum' | 'image' | 'video';
};

type ArticlesProps = {
  title: string;
  backgroundImage: string;
  createdAt: string;
  body: Content[];
};

const BodyTitle: React.FC<Content> = ({ contents }) => {
  return <Text>{contents}</Text>;
};

const BodyText: React.FC<Content> = ({ contents }) => {
  return <Text>{contents}</Text>;
};

const BodyQuote: React.FC<Content> = ({ contents }) => {
  return <Text>{contents}</Text>;
};

const BodyEnum: React.FC<Content> = ({ contents }) => {
  return <Text>{contents}</Text>;
};

const BodyImage: React.FC<Content> = ({ contents }) => {
  return <Image src={contents} />;
};

const BodyVideo: React.FC<Content> = ({ contents }) => {
  return <Text>{contents}</Text>;
};

const AticlesPage: NextPage<ArticlesProps> = ({
  backgroundImage,
  body,
  createdAt,
  title,
}) => {
  const { isFallback } = useRouter();

  const getContentByBody = useCallback((content: Content) => {
    const contentsType = {
      title: <BodyTitle {...content} />,
      text: <BodyText {...content} />,
      quote: <BodyQuote {...content} />,
      enum: <BodyEnum {...content} />,
      image: <BodyImage {...content} />,
      video: <BodyVideo {...content} />,
    };

    return contentsType[content.type];
  }, []);

  if (isFallback) {
    return <Text>Loading...</Text>;
  }

  return (
    <Flex flexDir="column">
      <Image src={backgroundImage} width="300" height="300" />
      <Text>{title}</Text>
      <Text>{dayjs(createdAt).format('DD [de] MMMM [de] YYYY')}</Text>
      {body.map((content, index) => (
        <Box key={index.toString()}>{getContentByBody(content)}</Box>
      ))}
    </Flex>
  );
};

export default AticlesPage;

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<ArticlesProps> = () => {
  return {
    props: {
      title: 'JAMstack: geleia de JavaScript, API e Markup',
      createdAt: '2022-02-11T20:34:28.311Z',
      backgroundImage:
        'https://blog.rocketseat.com.br/content/images/size/w300/2022/02/Rocketseat-JAMstack-blog.png',
      body: [
        {
          contents:
            'O que significa e por que é considerada uma arquitetura moderna de desenvolvimento web?',
          type: 'title',
        },
        {
          contents:
            'Uma arquitetura moderna de desenvolvimento, vista como vanguarda na renascença de web sites estáticos, e com nome de um doce popularmente conhecido como GELEIA.',
          type: 'text',
        },
        {
          contents:
            'Criada por Mathias Biilmann, CEO do Netlify, JAMstack é uma filosofia de criação de sites estáticos que insere conceitos e práticas específicas dentro de um ecossistema tecnológico.',
          type: 'text',
        },
        {
          contents:
            'O objetivo de Mathias, apesar de diversas justificativas técnicas, era tornar a geração de sites estáticos legal e mainstream, novamente. Segundo ele, a arquitetura moderna da JAMstack:',
          type: 'text',
        },
        {
          contents:
            'não é sobre tecnologias específicas. É um novo jeito de criar websites e aplicativos que entreguem melhor performance, alta segurança, baixo custo de escalabilidade, e experiência de desenvolvimento',
          type: 'text',
        },
        {
          contents: 'JAM',
          type: 'title',
        },
        {
          contents:
            'JavaScript, obviamente, é o componente responsável em popularizar a arquitetura. A linguagem é amplamente utilizada no mercado de desenvolvimento web. Em poucas palavras: JavaScript é o que providencia todas as funcionalidades dinâmicas e interativas para o sistema, sem restrições de frameworks (React, Vue, Angular, Svelte e afins)',
          type: 'enum',
        },
        {
          contents:
            'Todas as funções do servidor, ou banco de dados, são manuseadas por APIs reutilizáveis, acessadas por HTTPS com JS.',
          type: 'enum',
        },
        {
          contents:
            'Markup é o arquivo estático gerado por ferramentas de desenvolvimento de páginas web, como NextJS, Gatsby ou Create-React-App.',
          type: 'enum',
        },
      ],
    },
  };
};
