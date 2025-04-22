import styled from 'styled-components';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  position: sticky;
  top: 0;
  z-index: 100;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 1rem;
    gap: 1rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.light};
  text-decoration: none;
  font-weight: 500;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
  }

  &.active {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const Navbar = () => {
  return (
    <StyledNavbar>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Logo>
          <span>Portfolio</span>
        </Logo>
      </motion.div>
      <NavLinks>
        {['/', '/about', '/projects', '/contact'].map((path, i) => (
          <motion.li
            key={path}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <StyledNavLink
              to={path === '/' ? '/' : path.substring(1)}
              end
            >
              {path === '/' ? 'Home' : path.substring(1)}
            </StyledNavLink>
          </motion.li>
        ))}
      </NavLinks>
    </StyledNavbar>
  );
};

export default Navbar;