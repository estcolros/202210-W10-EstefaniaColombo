import { GentlemanType } from '../../types/gentleman.types';
import { ButtonSelectAll } from '../button/button.select.all';

export function Info({
    gentlemanInfo,
    setAllGentlemen,
}: {
    gentlemanInfo: Array<GentlemanType>;
    setAllGentlemen: () => void;
}) {
    let count = 0;

    const counterSelectedsGentlemen = () => {
        gentlemanInfo.forEach((item) => (item.selected ? count++ : item));
    };
    counterSelectedsGentlemen();

    return (
        <section className="controls">
            <p className="info">{count} gentlemen pointing at you</p>
            <ButtonSelectAll getleman={setAllGentlemen}></ButtonSelectAll>
        </section>
    );
}
