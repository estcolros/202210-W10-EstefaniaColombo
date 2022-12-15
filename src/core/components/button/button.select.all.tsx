export function ButtonSelectAll({ getleman }: { getleman: () => void }) {
    const handlerClick = () => {
        getleman();
    };
    return (
        <div>
            <button
                className="button button--select"
                onClick={() => {
                    handlerClick();
                }}
                // eslint-disable-next-line jsx-a11y/aria-role
                role="all"
            >
                Select all
            </button>
        </div>
    );
}
