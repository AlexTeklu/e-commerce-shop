import styled from "styled-components";


const Container = styled.div`
  height: 60px;
  background-color: #333;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 700;
`;


const Announcement = () => {
  return (
    <Container>Do not miss on your 50kr voucher!!</Container>
  )
}

export default Announcement