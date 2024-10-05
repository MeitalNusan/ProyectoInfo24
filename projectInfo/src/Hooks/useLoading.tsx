import React, { useState, useRef, useEffect } from "react";

export const useLoading = () =>{
const [data, setData] = useState([]); //  
const [isLoading, setIsLoading] = useState(true)
const [error, setError] = useState<string | null>(null);


useEffect(() => {
    const fetchData = async () => {
        setIsLoading(true);
        try {     
             setData(data);
        } catch {
            setError('Error al cargar los datos.');
        } finally {
            setIsLoading(false);
        }
    };

    fetchData();
}, []);
return {data, isLoading, error }

}
