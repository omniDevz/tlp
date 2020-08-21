import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  position: absolute;

  svg {
    cursor: pointer;
    transition: all 240ms ease-in-out;

    &:hover {
      transform: scale(1.16);
    }
  }
`;

export const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;

  padding: 24px;
  display: flex;
  flex-direction: column;

  background: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.tertiary};
  transform: translateY(-100%);
  transition: all 240ms ease-in-out;

  &.open {
    transform: translateY(0);
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 72px;
    width: 72px;
  }
`;

export const Menu = styled.ul`
  padding-top: 40px;
  height: 100%;
  position: relative;
`;

export const MenuLink = styled.li`
  border: 2px solid ${(props) => props.theme.colors.tertiary};
  font-size: 2.4rem;
  font-weight: 700;
  text-align: center;
  padding: 12px 16px;
  margin-bottom: 16px;

  &:last-child {
    background: ${(props) => props.theme.colors.primary};
    border: none;

    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;
