import { Container } from 'unstated';
import update from 'immutability-helper';

class NotificationsContainer extends Container {
  state = {
    notifications: []
  };

  addNotification = (message) => {
    const id = Date.now();
    const notification = {
      message: message || 'Missing notification!',
      id,
      removeNotification: () => this.removeNotification(id)
    };
    this.setState((prevState) => ({
      notifications: [...prevState.notifications, notification]
    }));
  };

  removeNotification = (id) => {
    const notifications = this.state.notifications.filter(
      (notification) => id !== notification.id
    );

    this.setState({
      notifications
    });
  };
}

export default NotificationsContainer;
