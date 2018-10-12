import { Container } from 'unstated';
import update from 'immutability-helper';

class NotificationsContainer extends Container {
  state = { items: ['1', '2', '3'] };

  addNotification = () => {
    const items = update(this.state.items, { $push: ['test'] });
    this.setState({ items });
  };

  removeNotification = () => {
    const items = update(this.state.items, {
      $splice: [[0, 1]]
    });
    this.setState({ items });
  };
}

export default NotificationsContainer;
