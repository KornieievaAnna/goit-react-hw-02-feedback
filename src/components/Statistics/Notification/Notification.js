import PropTypes from 'prop-types';
import css from './Notification.module.css'

export const Notification = ({ message }) => (
  <div className={css.message}>
    <h2>{message}</h2>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};



Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

