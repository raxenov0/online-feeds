import { useState } from "react"

export const usePost = (callback) =>{
    let [isLoading, setIsLoading] = useState(false)
    let [error, setError] = useState('')

    const fetching = async() => {
        try{
            setIsLoading(true);
            await callback()
        }
        catch(e){
            setError(e.message)
        }
        finally{
            setIsLoading(false)
        }
    }
    return[fetching,isLoading,error]
}