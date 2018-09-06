import eventManager from "./utils/eventManager";
import { ACTION } from "./constants";

let container = null;
let queue = [];
let notificationId = 0;
const noop = () => false;

/**
 * Dispatch notification. If the container is not mounted, the notification is enqueued
 */
function emitEvent(content) {
  if (container !== null) {
    eventManager.emit(ACTION.SHOW, content);
  } else {
    queue.push({ action: ACTION.SHOW, content });
  }
}

const notification = Object.assign(content => emitEvent(content), {
  dismiss: (id = null) => container && eventManager.emit(ACTION.CLEAR, id),
  isActive: noop,
  update(notificationId) {
    setTimeout(() => {
      if (
        container &&
        typeof container.collection[notificationId] !== "undefined"
      ) {
        const { content: oldContent } = container.collection[notificationId];

        const content =
          typeof nextOptions.render !== "undefined"
            ? nextOptions.render
            : oldContent;
        delete nextOptions.render;
        emitEvent(content, nextOptions);
      }
    }, 0);
  },
  onChange(callback) {
    if (typeof callback === "function") {
      eventManager.on(ACTION.ON_CHANGE, callback);
    }
  }
});
/**
 * Wait until the NotificationContainer is mounted to dispatch the notification
 * and attach isActive method
 */
eventManager
  .on(ACTION.DID_MOUNT, containerInstance => {
    container = containerInstance;
    notification.isActive = id => container.isNotificationActive(id);

    queue.forEach(item => {
      eventManager.emit(item.action, item.content);
    });

    queue = [];
  })
  .on(ACTION.WILL_UNMOUNT, () => {
    container = null;
    notification.isActive = noop;
    notificationId = 0;
  });

export default notification;
