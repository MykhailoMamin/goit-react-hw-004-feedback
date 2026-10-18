import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <div className={css.container}>
            {options.map(option => (
                <button
                    className={css.button}
                    key={option}
                    name={option}
                    onClick={() => onLeaveFeedback(option)}
                >
                    {option}
                </button>
            ))}
        </div>
    );
};