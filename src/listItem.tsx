import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: #f5f5f5;
  border-radius: 5px;
  padding: 5px 40px;
  margin: 10px 0;
`;

const Title = styled.p`
  font-size: 16px;
  margin-bottom: 5px;
`;

const Subtitle = styled.p`
  font-size: 12px;
  color: #404040;
`;

interface Props {
  title: string;
  subtitle: string;
  onClick: () => void;
}

export const ListItem = (props: Props): JSX.Element => {
  return (
    <Container onClick={props.onClick}>
      <Title>{props.title}</Title>
      <Subtitle>{props.subtitle}</Subtitle>
    </Container>
  );
};
