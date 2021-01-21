import Nav from "../components/nav";
import Footer from "../components/footer";
import styled, { keyframes } from "styled-components";
const Bounce = keyframes` 0% {
          transform: scale(1, 1) translateY(0);
        }
        10% {
          transform: scale(1.05, 0.95) translateY(0);
        }
        30% {
          transform: scale(0.95, 1.05) translateY(-60px);
        }
        50% {
          transform: scale(1, 1) translateY(0);
        }
        57% {
          transform: scale(1, 1) translateY(-30px);
        }
        64% {
          transform: scale(1, 1) translateY(0);
        }
        100% {
          transform: scale(1, 1) translateY(0);
        }
  `;
const Wrap = styled.div`
  width: 99vw;
  height: 100vh;
  background-color: #1c1c1c;
  color: #fff;
  .content {
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      max-height: 30vh;
      max-width: 100%;
      animation: ${Bounce} 4s infinite;
      animation-timing-function: cubic-bezier(0.28, 0.84, 0.42, 1);
      margin-bottom: 5vh;
    }
  }
`;
const NextAuth = () => {
  return (
    <>
      <Wrap>
        <Nav />
        <div className="content">
          <img src="/logo.png"></img>
          <h1>Hi there, welcome to Robotics Event Portal</h1>
        </div>
        <Footer />
      </Wrap>
    </>
  );
};

export default NextAuth;
