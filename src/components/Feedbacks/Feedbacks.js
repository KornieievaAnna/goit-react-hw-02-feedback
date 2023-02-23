import PropTypes from 'prop-types';
import css from './Feedbacks.module.css';

export const Feedback = ({ options, onLeaveFeedback }) => (
  <div className={css.button__list}>
    {options.map(option => (
      <button
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
        className={css.button}
      >
        {option}
      </button>
    ))}
  </div>
);

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
