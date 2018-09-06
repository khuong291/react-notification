import * as React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";
import notification from "../utils/notification";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClose: false
    };
  }

  componentDidMount() {
    if (this.props.draggable) {
      this.bindDragEvents();
    }

    setTimeout(() => {
      this.setState(
        {
          isClose: true
        },
        () => {
          setTimeout(() => {
            notification.onClose(this.props.id);
          }, 500);
        }
      );
    }, 4000);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.draggable !== this.props.draggable) {
      this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents();
    }
  }

  componentWillUnmount() {
    if (this.props.draggable) {
      this.unbindDragEvents();
    }
  }

  bindDragEvents() {
    document.addEventListener("mousemove", this.onDragMove);
    document.addEventListener("mouseup", this.onDragEnd);

    document.addEventListener("touchmove", this.onDragMove);
    document.addEventListener("touchend", this.onDragEnd);
  }

  unbindDragEvents() {
    document.removeEventListener("mousemove", this.onDragMove);
    document.removeEventListener("mouseup", this.onDragEnd);

    document.removeEventListener("touchmove", this.onDragMove);
    document.removeEventListener("touchend", this.onDragEnd);
  }

  onClose() {
    this.setState(
      {
        isClose: true
      },
      () => {
        setTimeout(() => {
          notification.onClose(this.props.id);
        }, 500);
      }
    );
  }

  render() {
    const Container = this.state.isClose ? ClosedContainer : OpenedContainer;
    return (
      <Container>
        <ContentBox>
          <ProviderImage src={this.props.providerURL} />
          <TextBox>
            <Title>{this.props.title}</Title>
            <Description>{this.props.description}</Description>
          </TextBox>
        </ContentBox>
        <HandleBox>
          <CloseButton onClick={this.onClose.bind(this)}>Close</CloseButton>
        </HandleBox>
      </Container>
    );
  }
}

Notification.propTypes = {
  id: PropTypes.number.isRequired,
  providerURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  hasCloseButton: PropTypes.bool,
  autoClose: PropTypes.bool,
  draggable: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  onClick: PropTypes.func
};

Notification.defaultProps = {
  hasCloseButton: false,
  autoClose: true,
  draggable: true,
  onOpen: () => {},
  onClose: () => {},
  onClick: () => {}
};

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

const OpenedContainer = Container.extend`
  animation: ${fromRightToLeft} 0.5s ease-in-out;
`;

const ClosedContainer = Container.extend`
  animation: ${fromLeftToRight} 0.5s ease-in-out;
`;

const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 15px;
  color: #565656;
  font-weight: 600;
  margin-bottom: 3px;
`;

const Description = styled.div`
  font-size: 14px;
  color: #717171;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 2em;
  line-height: 1em;
`;

const ProviderImage = styled.img`
  width: 35px;
  height: 35px;
  object-fit: scale-down;
  margin: 7px 8px 0 4px;
`;

const ContentBox = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 5px;
`;

const TextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 200px;
`;

const HandleBox = styled.div`
  width: 20%;
  height: 100%;
  float: right;
  text-align: center;
  border-left: 1px solid #cfcfcf;
`;

const CloseButton = styled.button`
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
  :hover {
    background-color: #f0f0f0;
  }
`;

export default Notification;
