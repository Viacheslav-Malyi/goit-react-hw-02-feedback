import PropTypes from 'prop-types';
import css from '../../components/feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <section className={css.feedback__container}>
      <h1 className={css.feedback__title}>{title}</h1>
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
};
