import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ states, onClickBtn }) => {
  const keys = Object.keys(states);
  return (
    <ul className={css.feedback_list}>
      {keys.map(key => (
        <li className={css.feedback_list} key={key}>
          <button
            className={css.feedback_btn}
            type="button"
            onClick={() => onClickBtn(key)}
          >
            {key}
          </button>
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
