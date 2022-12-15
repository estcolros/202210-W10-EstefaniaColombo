import { GentlemanType } from '../../types/gentleman.types';
import { ButtonSelect } from '../button/button.select';
import { ButtonDelete } from '../button/button.delete';

export function Gentleman({
    gentlemanInfo,
    setDeleteGentleman,
    setSelectGentleman,
}: {
    gentlemanInfo: GentlemanType;
    setDeleteGentleman: (element: number) => void;
    setSelectGentleman: (element: number) => void;
}) {
    const setGentlemanDelete = () => {
        setDeleteGentleman(gentlemanInfo.id);
    };

    const setGentlemanSelected = () => {
        setSelectGentleman(gentlemanInfo.id);
    };
    return (
        <li className="gentleman">
            <div className="gentleman__avatar-container">
                <img
                    className="gentleman__avatar"
                    src={`assets/${gentlemanInfo.picture}`}
                    alt={gentlemanInfo.alternativeText}
                />
                <span className="gentleman__initial">
                    {gentlemanInfo.name[0]}
                </span>
            </div>
            <div className="gentleman__data-container">
                <h2 className="gentleman__name">{gentlemanInfo.name}</h2>
                <ul className="gentleman__data-list">
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">
                            Profession:
                        </span>
                        {gentlemanInfo.profession}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Status:</span>
                        {gentlemanInfo.status}
                    </li>
                    <li className="gentleman__data">
                        <span className="gentleman__data-label">Twitter:</span>
                        {gentlemanInfo.twitter}
                    </li>
                </ul>
            </div>
            <ButtonSelect
                getleman={setGentlemanSelected}
                selectGentleman={gentlemanInfo.selected}
            ></ButtonSelect>
            <ButtonDelete getleman={setGentlemanDelete}></ButtonDelete>
        </li>
    );
}
