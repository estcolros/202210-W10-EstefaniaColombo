export function ButtonDelete({ getleman }: { getleman: () => void }) {
    const handlerClick = () => {
        getleman();
    };

    return (
        <div>
            <i
                className="icon gentleman__icon gentleman__icon--delete fas fa-times"
                onClick={() => {
                    handlerClick();
                }}
                // eslint-disable-next-line jsx-a11y/aria-role
                role="delete"
            ></i>
        </div>
    );
}
