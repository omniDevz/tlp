import React from 'react';

import PageAuthorized from '../../../components/PageAuthorized';

import { Stream, Description, Info, Teacher, Name } from './styled';

const Live: React.FC = () => {
  return (
    <PageAuthorized type="back" text="Ao vivo">
      <Description>Descrição da live</Description>
      <Stream>
        <img src="https://source.unsplash.com/random/person" alt=""></img>
      </Stream>
      <Info>
        <Name>Ribertu Thuzunppson</Name>
        <Teacher>Professor</Teacher>
      </Info>
    </PageAuthorized>
  );
};

export default Live;
