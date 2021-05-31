import React from 'react';
import {
  Body,
  Container,
  Frame,
  Header,
  Inner,
  Item,
  Title,
} from './styles/accordion';

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};

Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  return (
    <Header {...restProps}>
      {children}
      {restProps.clicked === restProps.key1 ? (
        <img src="/images/icons/close-slim.png" alt="Close" />
      ) : (
        <img src="/images/icons/add.png" alt="Open" />
      )}
    </Header>
  );
};

Accordion.Body = function AccordionBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
