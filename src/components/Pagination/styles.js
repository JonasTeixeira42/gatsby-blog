import styled from 'styled-components'

export const PaginationWrapper = styled.section`
  display: flex;
  align-items: center;
  border-top: 1px solid var(--borders);
  color: var(--texts);
  padding: 1.5rem 3rem;
  justify-content: space-between;

  a {
    color: var(--texts);
    text-decoration: none;
    transition: color 0.5s;

    &:hover {
      color: #1fa1f2;
    }
  }
`