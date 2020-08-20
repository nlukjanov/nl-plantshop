import React from 'react';

import {
  ContactPageContainer,
  TitleContainer,
  AnchorContainer,
  FigureContainer,
  LinkContainer
} from './contact.styles';

import LinkedInSVG from './LinkedInSVG';
import GithubSVG from './GithubSVG';

const ContactPage = () => {
  return (
    <ContactPageContainer>
      <TitleContainer>Contact Me:</TitleContainer>
      <AnchorContainer
        href='https://www.linkedin.com/in/nikita-lukjanov'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FigureContainer>
          <LinkedInSVG />
        </FigureContainer>
        <LinkContainer>linkedin.com/in/nikita-lukjanov</LinkContainer>
      </AnchorContainer>
      <AnchorContainer
        href='https://github.com/nlukjanov'
        target='_blank'
        rel='noopener noreferrer'
      >
        <FigureContainer>
          <GithubSVG />
        </FigureContainer>
        <LinkContainer>github.com/nlukjanov</LinkContainer>
      </AnchorContainer>
    </ContactPageContainer>
  );
};

export default ContactPage;
