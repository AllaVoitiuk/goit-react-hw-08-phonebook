import { StyledLink, Ul, Li } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <Ul>
        <Li>
          <StyledLink to="/">AddContactPage</StyledLink>
        </Li>
        <Li>
          <StyledLink to="filter">FilterPage</StyledLink>
        </Li>
      </Ul>
    </nav>
  );
};
