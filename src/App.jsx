import './App.css'
import Product from './components/Product.jsx'
import Galary from './components/galary.jsx'
import dataGalaxy from './data/data.json'
import dataUser from './data/user.json'
import UserList from './components/User.jsx'
import Container from './components/Container.jsx'
import 'modern-normalize';
import styled from 'styled-components'
import receptes from './data/recept.json'
import Recepts from './receptions/receptions.jsx'

function App() {

  const Header = styled.header`
  display: flex;
  justify-content: center;
  padding: 20px;
  `;

  const Title = styled.h1`
    font-size: 30px;
    color: white;
  `

  const ReceptsContainer = styled.div`
display: flex;
justify-content: center;
    gap: 20px;
`


  return (
    <>
      <Header>
        <Title>Рецепти</Title>
      </Header>
      <ReceptsContainer>
        {receptes.map((recepte, index) => (
          <Recepts key={index} img={recepte.image} name={recepte.name} time={recepte.time} servings={recepte.servings} calories={recepte.calories }></Recepts>
        ))}
      </ReceptsContainer>

      {/* <Container>
        <UserList userArr={dataUser} />
      </Container>
      <Galary data={dataGalaxy} /> */}
    </>
  )
}

export default App


