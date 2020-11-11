import { FiEdit } from 'react-icons/fi';
import styled from 'styled-components';

export const CardClassWrapper = styled.li`
  border: 2px solid ${(props) => props.theme.colors.secondary};
  padding: .8rem;
  display: flex;
  justify-content: space-between;

  & + li {
    margin-top: .8rem;
  }
`;

export const Infos = styled.div`
  width: 100%;
`;

export const Number = styled.p`
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: .4rem;
  text-align: right;
  width: 100%;
`;

export const Title = styled.h4`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: .4rem;
`;

export const Description = styled.p`
  font-size: 1.6rem;
`;

export const Price = styled(Description)`
  text-align: right;
  width: 100%;
`;
