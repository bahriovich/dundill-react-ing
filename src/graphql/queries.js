import { gql } from '@apollo/client';


const createUser = gql`
  mutation createUser($input:CreateUserInput! ) {
    createUser(input:$input ) {
      fullname
      # email
      # title
      # birthDate
      # gender
      # country
      # city
      # phoneNumber
      # password
    }
  }
`

const updateUserProfile = gql`
mutation updateUserProfile($input: UpdateUserProfileInput!) {
  updateUserProfile(input: $input) {
    role
    techStack
  }
}
`

const salary = gql`
    query {
        salary(_id: "4e281c00-d396-11ed-87e5-712ec78265d9") {
            mounthlyAmount
            hourlyAmount
        }
    }
`;

// console.log(salary)

export { salary, createUser, updateUserProfile };