import css from './Statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <span className={css.statistics_item}>Good: {good} </span>
      <span className={css.statistics_item}>Neutral: {neutral} </span>
      <span className={css.statistics_item}>Bad: {bad} </span>
      <span className={css.statistics_item}>Total: {total}</span>
      <span className={css.statistics_item}>
        Positive feedback: {positivePercentage}%
      </span>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
