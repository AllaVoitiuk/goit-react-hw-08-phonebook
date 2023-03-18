import { StyledLink, Ul, Li } from './Navigation.styled';
import { selectUserToken } from 'redux/users/users.selector';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export const Navigation = () => {
  const isToken = useSelector(selectUserToken);
  const location = useLocation();

  return (
    <nav>
      <Ul>
        <Li>
          <StyledLink to="/"> AddContact</StyledLink>
        </Li>
        {isToken && (
          <Li>
            <StyledLink to="filter">Filter</StyledLink>
          </Li>
        )}
        {!isToken && (
          <Li>
            <StyledLink to="register">Registration</StyledLink>
          </Li>
        )}
        {!isToken && (
          <Li>
            <StyledLink to="login">LoginForm</StyledLink>
          </Li>
        )}
        {isToken && (
          <Li>
            <StyledLink to="contacts" state={{ from: location }}>
              UserMenu
            </StyledLink>
          </Li>
        )}
      </Ul>
    </nav>
  );
};
