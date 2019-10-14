import { useEffect } from 'react';

const accessKey = 'e2b08c92c42108fdd3f90a5f1ea01f465d284c8da2c17a4879a9bc189f700d86';
const API_URL = `https://api.unsplash.com/photos/?client_id=${accessKey}`;

const fetchData = async (url) => {
    const r = await fetch(url);
    const data = await r.json();
    const urls = await data.map(item => ({ id: item.id, url: item.urls.full }));
    return urls;
};

export const useData = ({ images, setImages }) => {
    useEffect(() => {
            fetchData(API_URL)
                .then(response => {
                    setImages([...images, ...response]);
                })
                .catch(console.error);        
    }, []); 
};