import React from 'react';

import PageHeader from './components/PageHeader';

import { Main, Footer } from './styled';

import { IPageAuthorized } from './interface';

const PageAuthorized: React.FC<IPageAuthorized> = ({
  children,
  type,
  text,
}) => {
  return (
    <>
      <PageHeader type={type} text={text} />
      <Main>{children}</Main>
      <Footer>&copy; copyright 2020</Footer>
    </>
  );
};

export default PageAuthorized;
