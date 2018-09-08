import * as React from "react";
import PropTypes from "prop-types";
import Notification from "./Notification";
import { NotificationContainerId } from "../utils/constants";
import styled from "styled-components";
import { queue } from "../utils/notification";

class NotificationContainer extends React.Component {
  render() {
    return (
      <Container id={NotificationContainerId}>
        {queue.map(
          ({ id, providerURL, title, description, closeButtonText }) => {
            return (
              <Notification
                key={id}
                id={id}
                providerURL={providerURL}
                title={`${title} ${id}`}
                description={description}
                closeButtonText={closeButtonText}
                onClick={this.props.onClick}
                onClose={this.props.onClose}
              />
            );
          }
        )}
      </Container>
    );
  }
}

NotificationContainer.propTypes = {
  onClick: PropTypes.func,
  onClose: PropTypes.func
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 4px 10px 0 0;
  width: 350px;
  float: right;
`;

export default NotificationContainer;
