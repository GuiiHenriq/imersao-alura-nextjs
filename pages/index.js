import styled from 'styled-components'
import db from '../db.json'
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`

/*function Title(props) { // O QUE É GERADO
  return (
    <h1>
      {props.children}
    </h1>
  )
}*/

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`

export default function Home() {
  return (
    
    <QuizBackground backgroundImage={db.bg}>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Titulo</h1>
          </Widget.Header>
          <Widget.Content>
            <h1>Content</h1>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Teste</h1>
          </Widget.Content>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/GuiiHenriq" />
    </QuizBackground>

  )
}
