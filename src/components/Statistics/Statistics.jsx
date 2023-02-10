// import css from './'
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      <span>Good:{good} </span>
      <span>Neutral:{neutral} </span>
      <span>Bad:{bad} </span>
      <span>Total:{total}</span>
      <span>Positive feedback:{positivePercentage}</span>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};

export default Statistics;
