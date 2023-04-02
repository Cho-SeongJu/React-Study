import Badge from './Badge';
import styles from './ListItem.module.css';
import ListItemLayout from './ListItemLayout';
import dayjs from 'dayjs';

const ListItem = ({ data, checked, onChangeCheckBox, onClickTitle }) => {
  const state = data.state === 'open' ? 'opened' : 'closed';
  const date = data.state === 'open' ? data.created_at : data.closed_at;
  const relativeTime = require('dayjs/plugin/relativeTime');
  dayjs.extend(relativeTime);

  return (
    <ListItemLayout>
      <div>
        <div
          role="button"
          className={styles.title}
          onClick={onClickTitle}
        >
          {data.title}
          {data.labels.length > 0 &&
            data.labels.map((badgeProps, idx) => (
              <Badge
                key={idx}
                {...badgeProps}
              />
            ))}
        </div>
        <div className={styles.description}>
          #{data.number} {state} {dayjs(date).fromNow()} {data.user.login}
        </div>
      </div>
    </ListItemLayout>
  );
};

export default ListItem;
