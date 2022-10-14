import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, setError] = useState(null);

    
    useEffect(() => {
        const abortConst = new AbortController ();
        setTimeout (()=> {
            fetch(url, {signal: abortConst.signal } )
            .then(res => {
                if (!res.ok){
                    throw Error ('couldnt fetch the data')
                }


                return res.json();
            })
            .then(data => {
                setData(data);
                setisPending(false);
                setError(null);
            })
            .catch(err=> { 
                if (err.message === 'AbortError' ){
                    console.log('fetch aborted');
                }else {
                    setisPending(false);
                    setError(err.message);
                }
                
            })
        }, 1000);
        return ()=> abortConst.abort() ;
    }, [url]);

    return {data, isPending, error}
}
export default useFetch ; 