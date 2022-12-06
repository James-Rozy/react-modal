const CHECKBOX_STYLES = {
  display: 'flex', 
  alignItems: 'center',
  gap: '5px',
}

const CustomCheckbox = ({ name, label }) => {
  return (
    <div style={CHECKBOX_STYLES} className="custom-checkbox">
      <input type="checkbox" name={name} />
      <label htmlFor={name}>{label}</label>
    </div>
  )
}

export default CustomCheckbox;