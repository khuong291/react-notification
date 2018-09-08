import styled, { keyframes } from "styled-components";

const fromRightToLeft = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }

  to {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const fromLeftToRight = keyframes`
  from {
    transform: translateX(0%);
    opacity: 1;
  }

  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

const fadeIn = keyframes`
  from {
    transform: scale(1, 1)
    opacity: 1;
  }

  to {
    transform: scale(0.3, 0.3);
    opacity: 0;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 60px;
  background-color: #f6f6f6;
  float: right;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  z-index: 999;
  margin-bottom: 14px;
  -moz-box-shadow: 0 0 14px #7d7d7d;
  -webkit-box-shadow: 0 0 14px #7d7d7d;
  box-shadow: 0 0 14px #7d7d7d;
`;

export const OpenedContainer = Container.extend`
  animation: ${fromRightToLeft} 0.5s ease-in-out;
`;

export const ClosedContainer = Container.extend`
  animation: ${fromLeftToRight} 0.5s ease-in-out;
`;

export const FadeInContainer = Container.extend`
  animation: ${fadeIn} 0.4s ease-in-out;
`;

export const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  color: #565656;
  font-weight: 600;
  margin-bottom: 3px;
`;

export const Description = styled.div`
  font-size: 14px;
  color: #717171;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 2em;
  line-height: 1em;
`;

export const ProviderImage = styled.img`
  width: 35px;
  height: 35px;
  object-fit: scale-down;
  margin: 7px 8px 0 4px;
`;

export const ContentBox = styled.div`
  width: ${props => (props.hasCloseButton ? "80%" : "100%")};
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
  cursor: pointer;
`;

export const TextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: ${props => (props.hasCloseButton ? "200px" : "100%")};
`;

export const HandleBox = styled.div`
  width: 20%;
  height: 100%;
  float: right;
  text-align: center;
  border-left: 1px solid #cfcfcf;
`;

export const CloseButton = styled.button`
  border: none;
  background: none;
  outline: none;
  font-size: 13px;
  font-weight: 600;
  color: #646464;
  text-align: center;
  height: 100%;
  width: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: #f0f0f0;
  }
`;
