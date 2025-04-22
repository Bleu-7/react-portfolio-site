import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGitAlt, FaPhp, FaPython, FaFigma } from 'react-icons/fa';

const AboutContainer = styled.section`
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
  display: flex;
  gap: 3rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const Bio = styled(motion.div)`
  flex: 1;
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
  opacity: 0.9;
`;

const Skills = styled(motion.div)`
  flex: 1;
`;

const SkillsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
  color: ${({ theme }) => theme.colors.dark};
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 1rem;
  list-style: none;
`;

const SkillItem = styled(motion.li)`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.light};
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.div`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const SkillName = styled.span`
  font-weight: 500;
`;

const About = () => {
  const skills = [
    { name: 'React', icon: <FaReact /> },
    { name: 'JavaScript', icon: <FaJs /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS', icon: <FaCss3Alt /> },
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'PHP', icon: <FaPhp /> },
    { name: 'Python', icon: <FaPython /> },
    { name: 'Figma', icon: <FaFigma /> },
  ];

  return (
    <AboutContainer id="about">
      <SectionTitle
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </SectionTitle>
      <Content>
        <Bio
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <BioText>
            The name's Jose Ramos. I'm an aspiring web developer and designer with about two years of
            experience under my belt. Along the way, I managed to establish a decent foundation
            in common industry tools such as React, PHP, and Figma.
          </BioText>
          <BioText>
            Having spent a lot of time utilizing online applications growing up, I naturally gravitated towards
            wanting to design and develop my own set of handy apps. Crafting experiences people find intuitive, accessible, and useful is what I live for!
          </BioText>
          <BioText>
            When not working on some big project, you can find me cycling, catching up on the latest
            tech news, or drafting up some experimental designs.
          </BioText>
        </Bio>
        <Skills
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SkillsTitle>My Skills</SkillsTitle>
          <SkillsList>
            {skills.map((skill, index) => (
              <SkillItem
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <SkillIcon>{skill.icon}</SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsList>
        </Skills>
      </Content>
    </AboutContainer>
  );
};

export default About;