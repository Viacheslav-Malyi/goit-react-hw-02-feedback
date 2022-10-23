import PropTypes from 'prop-types';
import css from '../../components/feedback.module.css';
export const FeedbackStatistick = ({
  good,
  neutral,
  bad,
  total,
  positiveFeedback,
}) => {
  return (
    <div className={css.feedback__container}>
      <p className={css.feedback__element}>Good: {good}</p>
      <p className={css.feedback__element}>Neutral: {neutral}</p>
      <p className={css.feedback__element}>Bad: {bad}</p>
      <p className={css.feedback__element}>Total: {total}</p>
      <p className={css.feedback__element}>
        Positive feedback: {positiveFeedback}%
      </p>
    </div>
  );
};

FeedbackStatistick.propType = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
