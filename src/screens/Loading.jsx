import '../Popup.css';
import { MoonLoader } from 'react-spinners';
// import PropTypes from 'prop-types';

function Loading() {
  const spinnerColor = '#146eb8';
  return (
    <div className="screen">
      <div className="loading-div">
        <div className="loading-spinner">
          <MoonLoader size={60} color={spinnerColor} />
        </div>
        <p>Loading...</p>
      </div>
    </div>
  );
}

// Loading.propTypes = {
//   loading: PropTypes.bool.isRequired,
// };

export default Loading;
