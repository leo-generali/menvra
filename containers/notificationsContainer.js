import { Container } from 'unstated';

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

    const notifications = [...this.state.notifications, notification];
    this.setState({ notifications });
  };

  removeNotification = (id) => {
    const notifications = this.state.notifications.filter(
      (notification) => id !== notification.id
    );

    this.setState({ notifications });
  };
}

export default NotificationsContainer;
