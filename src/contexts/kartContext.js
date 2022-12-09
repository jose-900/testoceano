import React , {useState , createContext} from 'react';
import pilotos from '../components/Pilotos';

export const KartContext = createContext({});

function KartProvider({ children }){
    const [kart, setKart] = useState([]);

    // Verificando se o item já esta selecionado , caso não estiver adiciona.
    function addItemKart(newItem){
        const indexItem = kart.findIndex(item=> item.id === newItem.id)
        
            if(indexItem !== -1){
            // caso entre neste condição, iremos adiconar na quantidade pois ele já existe na lista.
            let kartList = kart;
            kartList[indexItem].amount = kartList[indexItem].amount + 1;
            kartList[indexItem].total = kartList[indexItem].amount + kartList[indexItem].id

            setKart(kartList)
             return;
        }
        let data = {
            ...newItem,
            amount: 1,
            total: newItem.item,
            cd_piloto:newItem.id,
             
        }

        setKart(pilotos => [...pilotos, data])
    }
    return(
        <KartContext.Provider
            value={{
                kart , 
                addItemKart
                
            }}
        >
            {children}
        </KartContext.Provider>
    )
}

export default KartProvider;