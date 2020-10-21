import React, { useEffect, useState } from 'react';
import { useToasts } from 'react-toast-notifications';

import Button from '../../../components/Button';
import FormField from '../../../components/FormField';
import PageAuthorized from '../../../components/PageAuthorized';
import ArticleItem from './components/ArticleItem';

import api from '../../../services/api';
import util from '../../../utils/util';

import { ListArticles, Form } from './styled';

import { IArticle, IArticleApi } from './interface';

const Article: React.FC = () => {
  const [search, setSearch] = useState('');
  const [listArticles, setListArticles] = useState<IArticle[]>();

  const { addToast } = useToasts();

  function handleGetListArticles() {
    api
      .get('artigo')
      .then(({ data }) => {
        const articleFromApi: IArticle[] = data.map((article: IArticleApi) => {
          const newArticle: IArticle = {
            articleId: article.artigoId,
            authorId: article.autorId,
            author: {
              authorId: article.autor.autorId,
              firstName: article.autor.nome,
              lastName: article.autor.sobrenome,
            },
            title: article.titulo,
            subtitle: article.subtitulo,
            quantityAccess: article.quantidadeAcesso,
            linkArticle: article.linkArtigo,
            publishDate: article.dataPublicacao,
          };

          return newArticle;
        });

        setListArticles(articleFromApi);
      })
      .catch((err) => {
        console.log(err);
        addToast(
          'Houve algum erro inesperado na busca por mantenedores, tente novamente mais tarde',
          {
            appearance: 'error',
            autoDismiss: true,
          }
        );
      });
  }

  useEffect(handleGetListArticles, []);

  function handleFilterArticles(article: IArticle) {
    return util.includesToArray(
      [
        article.title,
        article?.subtitle || '',
        article.author.firstName,
        article.author.lastName,
      ],
      search
    );
  }

  return (
    <PageAuthorized type="back" text="Artigos">
      <Form>
        <FormField
          label="Filtro"
          name="search"
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setSearch(e.target.value)
          }
        />
        <Button color="secondary-outline" onClick={handleGetListArticles}>
          Filtrar
        </Button>
      </Form>
      <ListArticles>
        {listArticles &&
          listArticles
            .filter(handleFilterArticles)
            .map((article) => (
              <ArticleItem key={article.articleId} article={article} />
            ))}
      </ListArticles>
    </PageAuthorized>
  );
};

export default Article;
