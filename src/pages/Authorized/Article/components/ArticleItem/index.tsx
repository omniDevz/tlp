import React from 'react';

import {
  PublishDataWrapper,
  FooterArticle,
  LinkToArticle,
  Descriptions,
  AccessCount,
  LinkWrapper,
  ItemArticle,
  AuthorName,
  MoreInfos,
  Infos,
  Bold,
} from './styled';

import { IArticleItem } from './interface';
import Collapse from '../../../../../components/Collapse';
import { FiExternalLink } from 'react-icons/fi';
import util from '../../../../../utils/util';

const ArticleItem: React.FC<IArticleItem> = ({ article }) => {
  return (
    <ItemArticle>
      <Collapse label={article.title}>
        <Descriptions>{article.subtitle}</Descriptions>

        <FooterArticle>
          <Infos>
            <AccessCount>
              <Bold>{article.quantityAccess}</Bold> acessos
            </AccessCount>
            <AuthorName>{`${article.author.firstName} ${article.author.lastName}`}</AuthorName>
          </Infos>
          <MoreInfos>
            <LinkWrapper>
              <LinkToArticle
                title={`Acesse o artigo de ${article.title}`}
                href={article.linkArticle}
                target="_blank"
              >
                <FiExternalLink />
              </LinkToArticle>
            </LinkWrapper>
            {article.publishDate && (
              <PublishDataWrapper>
                Publicado em:{' '}
                <Bold>{util.getFormatDate(article.publishDate)}</Bold>
              </PublishDataWrapper>
            )}
          </MoreInfos>
        </FooterArticle>
      </Collapse>
    </ItemArticle>
  );
};

export default ArticleItem;
