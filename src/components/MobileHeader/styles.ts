import styled from 'styled-components';

import { FiMessageSquare } from 'react-icons/fi'

export const Container = styled.div`
  background: var(--color-link);
  padding: 0 16px;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1180px) {
    display: none;
  }
`;

export const ProfileCircle = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  border: 1px solid var(--color-icons);
`;

export const SearchInput = styled.input`
  width: 100%;
  margin-left: 16px;

  background: var(--color-input);
  color: var(--color-black);
  font-size: 14px;
  padding: 7.5 8px;
  border: none;
  outline: none;
  border-radius: 2px;

  &:focus {
    background: var(--color-white);
  }
`;

export const MessageIcon = styled(FiMessageSquare)`
  width: 24px;
  height: 24px;
  color: var(--color-white);
  border-radius: 4px;
  flex-shrink: 0;
  margin-left: 16px;
`;
