import styled from 'styled-components';


const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.dark};
  color: ${({ theme }) => theme.colors.light};
  padding: 2rem;
  text-align: center;
`;



const Copyright = styled.p`
  margin-top: 1rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer>

      <Copyright>
        &copy; {new Date().getFullYear()} Jose Ramos.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer;