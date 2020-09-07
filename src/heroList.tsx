import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled from "styled-components";
import { ListItem } from "./listItem";
import { useHistory } from "react-router-dom";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export function HeroList() {
  const axios = Axios.create();
  const [heroes, setHeroes] = useState<Array<any>>([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const onButtonClick = (): void => {
    loadHeroes();
  };

  const loadHeroes = (): void => {
    axios
      .get(
        "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=61d56c816b6f505c39dcfe806f701aef&hash=6b38d0c234c9f10fdbfb1faf8e2869d7&orderBy=-modified"
      )
      .then((response) => {
        setHeroes(response.data.data.results);
      })
      .catch((error) => {
        console.log("There was a terrible error", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadHeroes();
  }, []);

  return (
    <Centered>
      <h1>Marvel Heroes</h1>
      {loading && <p>Don't bother me I'm loading</p>}
      <ul>
        {heroes.map((hero) => (
          <ListItem
            key={hero.id}
            title={hero.name}
            subtitle={hero.id}
            onClick={() => history.push(`${hero.id}`)}
          />
        ))}
      </ul>
      <button onClick={onButtonClick}>Show me the heroes (again)!</button>
    </Centered>
  );
}
