import PropTypes from 'prop-types';

function Checkbox({ label, checked, onChange }) {
  return (
    <div>
      <label>{label}</label>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
