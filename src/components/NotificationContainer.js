import * as React from "react";
import Notification from "./Notification";
import { NotificationContainerId } from "../utils/constants";
import styled from "styled-components";
import { queue } from "../utils/notification";

class NotificationContainer extends React.Component {
  render() {
    return (
      <Container id={NotificationContainerId}>
        {queue.map(notification => {
          return (
            <Notification
              key={notification.id}
              providerURL="http://icons.iconarchive.com/icons/johanchalibert/mac-osx-yosemite/1024/finder-icon.png"
              title="Disk Not Ejected Properly"
              description="Eject Time Machine before disconnecting or turning it off"
            />
          );
        })}
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
