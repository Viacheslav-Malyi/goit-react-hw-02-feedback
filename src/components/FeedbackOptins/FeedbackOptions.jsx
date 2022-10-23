import PropTypes from 'prop-types';
import css from '../../components/feedback.module.css';
export const FeedbackOption = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <ul className={css.button__box}>
        {options.map(option => {
          return (
            <li key={option} className={css.feedback__item}>
              <button type="button" onClick={onLeaveFeedback(option)}>
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

FeedbackOption.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
