// import css from './'
import PropTypes from 'prop-types';

const FeedbackOptions = ({ states, onClickBtn }) => {
  const keys = Object.keys(states);
  return (
    <ul className="feedback_list">
      {keys.map(key => (
        <li className="feedback_list" key={key}>
          <button type="button" onClick={() => onClickBtn(key)}></button>
          {key}
        </li>
      ))}
    </ul>
  );
};
FeedbackOptions.propTypes = {
  states: PropTypes.object.isRequired,
  onClickBtn: PropTypes.func.isRequired,
};

export default FeedbackOptions;
