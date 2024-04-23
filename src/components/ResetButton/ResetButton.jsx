
import PropTypes from 'prop-types';
import css from './ResetButton.module.css';

export const ResetButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={css.resetButton}>
      Reset Contacts
    </button>
  );
};

ResetButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};