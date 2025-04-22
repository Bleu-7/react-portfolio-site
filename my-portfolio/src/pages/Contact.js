import styled from 'styled-components';
import { motion } from 'framer-motion';
import ContactForm from '../components/ContactForm';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactContainer = styled.section`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.colors.dark};
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.dark};
  }
`;

const InfoItem = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  font-size: 1.5rem;
  margin-right: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const InfoText = styled.div`
  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.dark};
    opacity: 0.9;
  }

  a {
    color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    transition: color 0.3s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

const Contact = () => {
  return (
    <ContactContainer id="contact">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </SectionTitle>
      <Content>
        <ContactInfo
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h3>Get In Touch</h3>
          <InfoItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <InfoIcon>
              <FaEnvelope />
            </InfoIcon>
            <InfoText>
              <p>Email</p>
              <a href="mailto:jo591696@ucf.edu">jo591696@ucf.edu</a>
            </InfoText>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <InfoIcon>
              <FaPhone />
            </InfoIcon>
            <InfoText>
              <p>Phone</p>
              <a href="tel:+12345678900">+1 (234) 567-8900</a>
            </InfoText>
          </InfoItem>
          <InfoItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <InfoIcon>
              <FaMapMarkerAlt />
            </InfoIcon>
            <InfoText>
              <p>Location</p>
              <p>Orlando, FL</p>
            </InfoText>
          </InfoItem>
        </ContactInfo>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <ContactForm />
        </motion.div>
      </Content>
    </ContactContainer>
  );
};

export default Contact;