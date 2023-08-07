import {Header, Title, TitleH2} from './styles'
import { useState } from "react";

function HeaderComponent() {
    const [isScrolled, setScroll] = useState(false);
    
    const viewScroll = () => {
      if (window.scrollY >= 100) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", viewScroll);

  return (
    <Header isScrolled={isScrolled}>
        <Title>
            Lino
        </Title>
        <TitleH2>
            .dev.br
        </TitleH2>
    </Header>
  );
}

export default HeaderComponent;
