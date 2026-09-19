import {useState} from 'react'

function useFetch (val) {
    const [data, setData] = useState('custom hook state data')

    function doSomething () {
        console.log('your logic', val);      
    }

    return { data, doSomething }
}

export default useFetch