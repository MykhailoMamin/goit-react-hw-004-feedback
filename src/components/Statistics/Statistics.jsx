import css from './Statistics.module.css';

export const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => {
    return (
        <div className={css.statistics}>
            <p className={css.item}>
                Good: <span className={css.value}>{good}</span>
            </p>

            <p className={css.item}>
                Neutral: <span className={css.value}>{neutral}</span>
            </p>

            <p className={css.item}>
                Bad: <span className={css.value}>{bad}</span>
            </p>

            <p className={css.item}>
                Total: <span className={css.value}>{total}</span>
            </p>

            <p className={css.item}>
                Positive feedback:
                <span className={css.value}>{positivePercentage}%</span>
            </p>
        </div>
    );
};