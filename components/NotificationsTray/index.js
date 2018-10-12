import { Component } from 'react';
import { Subscribe } from 'unstated';
import { NotificationsContainer } from '../../containers';

import { Transition, config } from 'react-spring';

import Notification from '../Notification';

// Styles
import { Tray } from './styles';
import { P } from '../../styles/typography';

class NotificationsTray extends Component {
  render() {
    return (
      <Subscribe to={[NotificationsContainer]}>
        {(notifications) => (
          <Tray>
            <Transition
              keys={notifications.state.notifications.map((item) => item.id)}
              from={{ opacity: 0, transform: 'translateX(5rem)' }}
              enter={{ opacity: 1, transform: 'translateX(0px)' }}
              leave={{ opacity: 0, transform: 'translateX(5rem)' }}
              config={config.wobbly}
            >
              {notifications.state.notifications.map(
                (notification) => (style) => {
                  return (
                    <Notification
                      style={style}
                      id={notification.id}
                      removeNotification={notification.removeNotification}
                    >
                      {notification.message}
                    </Notification>
                  );
                }
              )}
            </Transition>
          </Tray>
        )}
      </Subscribe>
    );
  }
}

export default NotificationsTray;
