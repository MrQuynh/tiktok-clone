import PropTypes from 'prop-types';
import './GlobalStyles.scss';
import './Gridsystem.scss';
function GlobalStyles({ children }) {
    return children;
}

GlobalStyles.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GlobalStyles;
