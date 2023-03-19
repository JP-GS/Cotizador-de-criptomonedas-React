import styled from "@emotion/styled"

const Texto = styled.div `
    background-color: red;
    text-align: center;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
`;
const Error = ({children}) => {
  return (
    <Texto>{children}</Texto>
  )
}

export default Error