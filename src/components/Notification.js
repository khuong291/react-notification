import * as React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: true
      // flag = {
      //   canCloseOnClick: true,
      //   canDrag: false
      // },
      // drag = {
      //   start: 0,
      //   x: 0,
      //   deltaX: 0,
      //   removalDistance: 0
      // }
    };
  }

  // componentDidMount() {
  //   this.props.onOpen(this.props.children.props);
  //   if (this.props.draggable) {
  //     this.bindDragEvents();
  //   }
  // }

  // componentDidUpdate(prevProps) {
  //   if (prevProps.draggable !== this.props.draggable) {
  //     this.props.draggable ? this.bindDragEvents() : this.unbindDragEvents();
  //   }
  // }

  // componentWillUnmount() {
  //   this.props.onClose(this.props.children.props);
  //   if (this.props.draggable) {
  //     this.unbindDragEvents();
  //   }
  // }

  // pauseToast = () => {
  //   this.setState({ isRunning: false });
  // };

  // playToast = () => {
  //   this.setState({ isRunning: true });
  // };

  // bindDragEvents() {
  //   document.addEventListener("mousemove", this.onDragMove);
  //   document.addEventListener("mouseup", this.onDragEnd);

  //   document.addEventListener("touchmove", this.onDragMove);
  //   document.addEventListener("touchend", this.onDragEnd);
  // }

  // unbindDragEvents() {
  //   document.removeEventListener("mousemove", this.onDragMove);
  //   document.removeEventListener("mouseup", this.onDragEnd);

  //   document.removeEventListener("touchmove", this.onDragMove);
  //   document.removeEventListener("touchend", this.onDragEnd);
  // }

  render() {
    return (
      <Container>
        <ContentBox>
          <SenderImage src="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png" />
          <TextBox>
            <Title>Disk Not Ejected Properly</Title>
            <Description>
              Eject "Time Machine rMBP" before disconnecting or turning it off
            </Description>
          </TextBox>
        </ContentBox>
        <HandleBox>
          <CloseButton>Close</CloseButton>
        </HandleBox>
      </Container>
    );
  }
}

// Notification.propTypes = {
//   providerName: PropTypes.string,
//   title: PropTypes.string,
//   description: PropTypes.string,
//   iconURL: PropTypes.string,
//   hasCloseButton: PropTypes.boolean,
//   autoClose: PropTypes.boolean,
//   draggable: PropTypes.boolean,
//   onOpen: PropTypes.func,
//   onClose: PropTypes.func,
//   onClick: PropTypes.func
// };

// Notification.defaultProps = {
//   providerName: "",
//   title: "",
//   description: "",
//   iconURL: "",
//   hasCloseButton: false,
//   autoClose: true,
//   draggable: true,
//   onOpen: () => {},
//   onClose: () => {},
//   onClick: () => {}
// };

const Container = styled.div`
  width: 400px;
  height: 80px;
  background-color: #eae9ee;
  float: right;
  border-radius: 8px;
  display: flex;
  flex-direction: row;
  -moz-box-shadow: 0 0 14px #7d7d7d;
  -webkit-box-shadow: 0 0 14px #7d7d7d;
  box-shadow: 0 0 14px #7d7d7d;
  margin: 10px 10px 0 0;
`;

const Title = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 18px;
  color: #565656;
  font-weight: 600;
  margin-bottom: 3px;
`;

const Description = styled.div`
  font-size: 16px;
  color: #717171;
  display: block;
  text-overflow: ellipsis;
  overflow: hidden;
  max-height: 2em;
  line-height: 1em;
`;

const SenderImage = styled.img`
  width: 44px;
  height: 44px;
  object-fit: scale-down;
  margin: 7px 10px 0 0;
`;

const ContentBox = styled.div`
  width: 77%;
  height: 100%;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const TextBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  max-width: 240px;
`;

const HandleBox = styled.div`
  width: 23%;
  height: 100%;
  float: right;
  text-align: center;
  border-left: 1px solid #cfcfcf;
`;

const CloseButton = styled.button`
  border: none;
  background: none;
  outline: none;
  font-size: 16px;
  font-weight: 600;
  color: #646464;
  text-align: center;
  height: 100%;
  width: 100%;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  :hover {
    background-color: #e1e1e1;
  }
`;

export default Notification;
