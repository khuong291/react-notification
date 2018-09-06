import * as React from "react";
import Notification from "./Notification";
import eventManager from "../utils/eventManager";
import { ACTION } from "../utils/constants";
import styled from "styled-components";

class NotificationContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifications: []
    };
  }

  componentDidMount() {
    eventManager
      .on(ACTION.SHOW, content => this.show(content))
      .on(
        ACTION.CLEAR,
        id => (id !== null ? this.removeNotification(id) : this.clear())
      )
      .emit(ACTION.DID_MOUNT, this);
  }

  removeNotification(id) {
    this.setState(
      {
        notifications: this.state.notifications.filter(
          notification => notification !== id
        )
      },
      eventManager.emit(ACTION.ON_CHANGE, this.state.notifications.length)
    );
  }

  renderNotifications() {
    <Notification
      providerURL="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png"
      title="Disk Not Ejected Properly"
      description="Eject Time Machine before disconnecting or turning it off"
    />;
  }

  render() {
    return (
      <Container>
        <Notification
          providerURL="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png"
          title="Disk Not Ejected Properly"
          description="Eject Time Machine before disconnecting or turning it off"
        />
        <Notification
          providerURL="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png"
          title="Disk Not Ejected Properly"
          description="Eject Time Machine before disconnecting or turning it off"
        />
        <Notification
          providerURL="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png"
          title="Disk Not Ejected Properly"
          description="Eject Time Machine before disconnecting or turning it off"
        />
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 10px 0 0;
  width: 350px;
  float: right;
`;

export default NotificationContainer;
