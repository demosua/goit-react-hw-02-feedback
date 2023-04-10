import PropTypes from 'prop-types';

const Statistics = ({good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
        <h3>Statistics</h3>
        <p>Good: <span>{good}</span></p>
        <p>Neutral: <span>{neutral}</span></p>
        <p>Bad: <span>{bad}</span></p>
        <h4>Total: <span>{total}</span></h4>
        <h4>Positive feedback: <span>{positivePercentage}%</span></h4>
    </>
  )
};
  
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
};