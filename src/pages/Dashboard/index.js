import React, { useState, useEffect } from 'react';

import requestFaker from '../../services/api';

import Header from '../../components/Header';
import Cards from '../../components/Cards';
import Petitions from '../../components/Petitions';
import Pagination from '../../components/Pagination';

import { Container, ContainerCards, TitlePetition, ContainerPetitons } from './styles';

function Dashboard() {

  const [cards, setCards] = useState([]);
  const [current, setCurrent] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [petitions, setPetitions] = useState([]);

  useEffect(() => {
    fetchRequestApiFaker();
  }, []);

  const fetchRequestApiFaker = async () => {

    const [responseCards, responsePetitions] = await Promise.all([
      await requestFaker('GET', 'counter'),
      await requestFaker('GET', 'peticoes?_page=1&_limit=2')
    ]);

    if (responseCards.status === 200 && responsePetitions.status === 200) {

      setCards(await responseCards.json());
      setPetitions(await responsePetitions.json());
      setTotalPages(Number(responsePetitions.headers.get('X-Total-Count')));
    }
  }

  const fetchMoreDataPetition = async (value) => {
    const response = await requestFaker('GET', `peticoes?_page=${value}&_limit=2`);

    if (response.status === 200) {
      setPetitions(await response.json());
      setCurrent(value);
    }
  }

  return (
    <Container>
      <Header />
      <ContainerCards>
        {cards.map(card => {
          return (
            <Cards key={card?.tipo} card={card} />
          )
        })}
      </ContainerCards>
      <TitlePetition>Últimas petições</TitlePetition>
      <ContainerPetitons>
        {petitions.map(petition => {
          return (
            <Petitions key={petition.id} petition={petition} />
          )
        })}
      </ContainerPetitons>
      <Pagination current={current} fetchMoreDataPetition={fetchMoreDataPetition} totalPages={totalPages} />
    </Container>
  )
}
export default Dashboard;