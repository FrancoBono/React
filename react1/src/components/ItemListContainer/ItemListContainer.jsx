import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from "../../utils/firebase";
import { ItemList } from '../ItemList/ItemList';
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
    //console.log(useParams());
    const { categoryId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const queryRef = categoryId ? query(collection(db, 'productos'), where('categoria', '==', categoryId)) : collection(db, 'productos');
        getDocs(queryRef).then((response) => {
                const results = response.docs;
                const docs = results.map(doc => {
                    return {
                        ...doc.data(),
                        id: doc.id
                    }
                });
            setProductos(docs)
            setLoading(false)
            });
    }, [categoryId])

    return (
        <div className="contenedor">
            {/* <p>item list container</p> */}
            {
            loading ? <p>cargando...</p> :
            <ItemList items={productos} otraPropiedad={123} />
            }
        </div>
    )
}