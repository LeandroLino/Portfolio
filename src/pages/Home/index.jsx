import TypingEffect from '../../components/TypingEffect';
import {Container, Title, DevTitle, TechsTitle} from './styles'

function Home() {
  const words = ['REACT', 'NODE.JS', 'PYTHON', 'DJANGO', 'CLOJURE'];

  return (
    <Container>
        <Title>
          Olá, eu sou o 
          <span>LEANDRO LINO!</span>
        </Title>
        <TechsTitle><TypingEffect words={words} speed={400} /></TechsTitle>
        <DevTitle>DEVELOPER</DevTitle>
    </Container>
  );
}

export default Home;
