import styled from 'styled-components';

export const ItemArticle = styled.li`
  margin-bottom: 1.6rem;
  padding: 0.8rem 1.6rem;
  border: 2px solid ${(props) => props.theme.colors.secondary};

  &:last-child {
    margin-bottom: 0;
  }
`;

export const Descriptions = styled.p`
  font-size: 1.6rem;
  margin: 0.8rem 0;
`;

export const FooterArticle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.6rem;
`;

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccessCount = styled.p`
  font-size: 1.4rem;
`;

export const AuthorName = styled.p`
  font-size: 1.6rem;
  font-weight: bold;
`;

export const Bold = styled.b`
  font-size: 1.6rem;
`;

export const MoreInfos = styled.div`
  align-items: flex-end;
`;

export const LinkWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const LinkToArticle = styled.a`
  color: ${(props) => props.theme.colors.secondary};

  svg {
    height: 2.4rem;
    width: 2.4rem;
  }
`;

export const PublishDataWrapper = styled.p`
  font-size: 1.4rem;
`;
