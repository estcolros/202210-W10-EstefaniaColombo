export function ButtonSelect({
    getleman,
    selectGentleman,
}: {
    getleman: () => void;
    selectGentleman: boolean;
}) {
    const handlerClick = () => {
        getleman();
    };

    return (
        <div>
            <i
                className={`icon ${
                    selectGentleman
                        ? 'gentleman__icon--selected'
                        : 'gentleman__icon'
                } fas fa-check`}
                onClick={() => {
                    handlerClick();
                }}
                // eslint-disable-next-line jsx-a11y/aria-role
                role="select"
            ></i>
        </div>
    );
}
