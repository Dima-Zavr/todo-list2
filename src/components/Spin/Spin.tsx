import "./Spin.css";

export const Spinner = ({ size = 40, color = "#007bff" }) => {
    const spinnerStyle = {
        width: `${size}px`,
        height: `${size}px`,
        border: `4px solid ${color}`,
        borderTop: `4px solid #f3f3f3`,
        borderRadius: "50%"
    };

    return <div className="spinner" style={spinnerStyle}></div>;
};
