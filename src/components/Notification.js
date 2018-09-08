import * as React from "react";
import PropTypes from "prop-types";
import notification from "../utils/notification";
import { NotificationDisplayTime } from "../utils/constants";
import {
  OpenedContainer,
  ClosedContainer,
  FadeInContainer,
  Title,
  Description,
  ProviderImage,
  ContentBox,
  TextBox,
  HandleBox,
  CloseButton
} from "../styles/NotificationStyles";

class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isClosed: false,
      isClicked: false
    };
  }

  componentDidMount() {
    this._mounted = true;
    if (this.props.autoClose) {
      setTimeout(() => {
        if (this._mounted) {
          this.setState(
            {
              isClosed: true
            },
            () => {
              this.props.onClose();
              setTimeout(() => {
                notification.onClose(this.props.id);
              }, 500);
            }
          );
        }
      }, NotificationDisplayTime);
    }
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  _onClose() {
    this.setState(
      {
        isClosed: true
      },
      () => {
        setTimeout(() => {
          this.props.onClose();
          notification.onClose(this.props.id);
        }, 500);
      }
    );
  }

  _onClick() {
    this.setState(
      {
        isClicked: true
      },
      () => {
        setTimeout(() => {
          this.props.onClick();
          notification.onClose(this.props.id);
        }, 300);
      }
    );
  }

  render() {
    const Container = this.state.isClicked
      ? FadeInContainer
      : this.state.isClosed
        ? ClosedContainer
        : OpenedContainer;
    return (
      <Container>
        <ContentBox
          hasCloseButton={this.props.hasCloseButton}
          onClick={this._onClick.bind(this)}
        >
          <ProviderImage src={this.props.providerURL} />
          <TextBox hasCloseButton={this.props.hasCloseButton}>
            <Title>{this.props.title}</Title>
            <Description>{this.props.description}</Description>
          </TextBox>
        </ContentBox>
        {this.props.hasCloseButton && (
          <HandleBox>
            <CloseButton onClick={this._onClose.bind(this)}>
              {this.props.closeButtonText}
            </CloseButton>
          </HandleBox>
        )}
      </Container>
    );
  }
}

Notification.propTypes = {
  id: PropTypes.number.isRequired,
  providerURL: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  closeButtonText: PropTypes.string,
  hasCloseButton: PropTypes.bool,
  autoClose: PropTypes.bool,
  onClose: PropTypes.func,
  onClick: PropTypes.func
};

Notification.defaultProps = {
  hasCloseButton: true,
  autoClose: false,
  onClose: () => {},
  onClick: () => {}
};

export default Notification;
