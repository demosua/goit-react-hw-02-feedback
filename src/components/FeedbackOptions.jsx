import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
  <>
    <h2>Please leave feedback</h2>
      <ul>
      
        {options.map(option => (
          <li key = {option}>
            <button name={option} onClick={onLeaveFeedback}>{option}</button>
          </li>
        ))}

      </ul>
  </>
  )
};
  
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

