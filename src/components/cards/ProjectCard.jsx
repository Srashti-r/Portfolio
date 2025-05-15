import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: #1f1f2e;
  padding: 20px;
  border-radius: 15px;
  color: white;
  width: 100%;
  max-width: 300px;
  margin: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #fff;
`;

const Description = styled.p`
  font-size: 0.95rem;
  color: #ccc;
  margin-bottom: 10px;
`;

const SkillWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const SkillButton = styled.div`
  background-color: ${({ theme }) => theme.primary + 20};
  color: ${({ theme }) => theme.text_primary};
  padding: 6px 10px;
  font-size: 14px;
  border-radius: 6px;
`;

const ProjectCard = ({ project }) => {
  const { title, description, skills = [] } = project;

  return (
    <Card>
      <Title>{title}</Title>
      <Description>{description}</Description>
      <SkillWrapper>
        {skills.map((skill, index) => (
          <SkillButton key={index}>{skill}</SkillButton>
        ))}
      </SkillWrapper>
    </Card>
  );
};

export default ProjectCard;
