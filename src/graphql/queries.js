import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      _id
      userProfileId
      phoneNumber
      fullname
      email
      country
      city
      title
      birthDate
      gender
    }
  }
`;
export const CREATE_USER_PROFILE = gql`
  mutation createUserPorfile($input: CreateUserProfileInput!) {
    createUserProfile(input: $input) {
      _id
      userId
      role
      summary
      skills
      professionalExperience
      education
      certification
      commitment
      availabilityName
      availabilityStartDate
      linkedinLink
      githubLink
    }
  }
`;
export const CREATE_PROFESSIONAL_EXPERIENCE = gql`
  mutation createProfessionalExperience(
    $input: CreateProfessionalExperienceInput!
  ) {
    createProfessionalExperience(input: $input) {
      _id
      userId
      userProfileId
      company
      startDate
      endDate
      stillWorking
      title
      description
    }
  }
`;
export const CREATE_EDUCATION = gql`
  mutation createEducation($input: CreateEducationInput!) {
    createEducation(input: $input) {
      _id
      userId
      userProfileId
      degreeName
      fieldOfStudy
      school
      startDate
      endDate
    }
  }
`;
export const CREATE_SKILL = gql`
  mutation createSkill($input: CreateSkillInput!) {
    createSkill(input: $input) {
      _id
      userId
      userProfileId
      name
      practicalPeriod

      proficiencyLevelName
      image
      releaseYear
    }
  }
`;
export const CREATE_CERTIFICATION = gql`
  mutation createCertification($input: CreateCertificationInput!) {
    createCertification(input: $input) {
      _id
      userId
      userProfileId
      title
      description
      link
      dateOfObtention
      doesItExpire
      expirationDate
    }
  }
`;
