import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        <SectionText>
        Currently at my last year in software developement studies at ENSEM (Casablanca),i am looking for an interniship(4 to 6 months) Motivated, rigorous, dynamic and having a team spirit.
        </SectionText>
        

      </LeftSection>
    </Section>
  </>
);

export default Hero;