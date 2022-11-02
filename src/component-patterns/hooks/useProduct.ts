import { useState } from 'react';


export const useProduct = (initValue = 0) => {
    const [counter, setCounter] = useState(initValue)    

    function increaseBy(value: number) {
        setCounter((prev) => Math.max(prev + value, 0));
    }

    return {counter, increaseBy}
}