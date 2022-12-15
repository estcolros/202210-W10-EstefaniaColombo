import { useState } from 'react';
import { gentlemanInfo } from '../../mocks/gentleman.moks';
import { Gentleman } from '../gentleman/gentleman';
import { Header } from '../header/header';
import { Info } from '../info/info';
export function App() {
    const [gentlemen, setGentlemen] = useState(gentlemanInfo);

    const allSelectGentleman = () => {
        const allSelectGentleman = gentlemen.map((item) =>
            item ? { ...item, selected: true } : item
        );
        setGentlemen(allSelectGentleman);
    };
    const getSelectGentleman = (id: number) => {
        const getSelectGentleman = gentlemen.map((item) =>
            item.id === id ? { ...item, selected: true } : item
        );
        setGentlemen(getSelectGentleman);
    };
    const getDeleteGentleman = (id: number) => {
        const getDeleteGentleman = gentlemen.filter((item) => id !== item.id);
        setGentlemen(getDeleteGentleman);
    };

    return (
        <div className="container">
            <Header></Header>
            <Info
                gentlemanInfo={gentlemen}
                setAllGentlemen={allSelectGentleman}
            ></Info>
            <main className="main">
                <ul className="gentlemen">
                    {gentlemen.map((gentleman) => (
                        <Gentleman
                            key={gentleman.id}
                            gentlemanInfo={gentleman}
                            setDeleteGentleman={getDeleteGentleman}
                            setSelectGentleman={getSelectGentleman}
                        ></Gentleman>
                    ))}
                </ul>
            </main>
        </div>
    );
}

export default App;
