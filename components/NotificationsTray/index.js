import { Subscribe } from 'unstated';
import { NotificationsContainer } from '../../containers';

import Notification from '../Notification';

// Styles
import { Tray } from './styles';
import { P } from '../../styles/typography';

const NotificationsTray = () => {
  return (
    <Subscribe to={[NotificationsContainer]}>
      {(notifications) => (
        <Tray>
          {notifications.state.items.map((notification, index) => {
            return (
              <Notification
                key={index}
                removeNotificiation={notifications.removeNotification}
              >
                <P style={{ color: 'white' }}>{notification}</P>
              </Notification>
            );
          })}
        </Tray>
      )}
    </Subscribe>
  );
};

export default NotificationsTray;
