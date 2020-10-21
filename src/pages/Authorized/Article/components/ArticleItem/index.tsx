import React from 'react';

import {
  Recommendations,
  HeaderArticle,
  FooterArticle,
  ItemArticle,
  Infos,
  Name,
} from './styled';

import { IArticleItem } from './interface';

const ArticleItem: React.FC<IArticleItem> = ({ article }) => {
  return (
    <ItemArticle key={article.articleId}>
      <HeaderArticle>
        <Name>{article.title}</Name>
      </HeaderArticle>
      <Recommendations>{article.subtitle}</Recommendations>

      <FooterArticle>
        <Infos>
          <Recommendations>
            <b>{`${article.author.firstName} ${article.author.lastName}`}</b> |{' '}
            <b>{article.quantityAccess}</b> acessos
          </Recommendations>
        </Infos>
      </FooterArticle>
    </ItemArticle>
  );
};

export default ArticleItem;
