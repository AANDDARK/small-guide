import { supabase } from "@/lib/supabase"

export const useDataFromDB = async(table: string, col: string) => {
    
let { data: data, error } = await supabase
.from(table)
.select(col)
       if(!data){
        return error
       }
       return data
}