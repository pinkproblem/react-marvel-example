import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import styled from "styled-components";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;
`;

const LeftAlignedList = styled.ul`
  text-align: left;
`;

export const HeroDetail = (): JSX.Element => {
  const axios = Axios.create();
  const { id } = useParams();
  const [hero, setHero] = useState<any>();

  const loadHero = (id: string) => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=61d56c816b6f505c39dcfe806f701aef&hash=6b38d0c234c9f10fdbfb1faf8e2869d7`
      )
      .then((response) => {
        setHero(response.data.data.results[0]);
      });
  };

  useEffect(() => {
    loadHero(id);
  }, [id]);

  const content = hero ? (
    <>
      <h1>{hero.name}</h1>
      <p>{hero.description}</p>
      <p>They appeared in:</p>
      <LeftAlignedList>
        {hero.series.items.map((series: any) => (
          <li key={series.name}>{series.name}</li>
        ))}
      </LeftAlignedList>
    </>
  ) : (
    <p>Still loading...</p>
  );

  return (
    <Centered>
      <Link to="/">Back</Link>
      {content}
    </Centered>
  );
};
