'use server'
import { createClient } from '@/utils/supabase/server'
import {PraceType} from "@/app/configs/types/ApiDataTypes";


export async function removeTask(taskId: number | undefined) {
    const supabase = createClient()

    const {error: taskError} = await supabase
        .from('tasks')
        .delete()
        .eq('id', taskId)

    if(taskError) throw taskError
}

export async function addTask(inputData: PraceType) {
    const supabase = createClient()
    const {error} = await supabase
        .from('tasks')
        .insert(inputData)
    if(error) throw error
}

export async function updateTask(inputData: PraceType) {
    if(inputData.id !== undefined) {
        return console.error("ID is undefined")
    }
    const supabase = createClient()
    const {error} = await supabase
        .from('tasks')
        .update(inputData)
        .eq('id', inputData.id)
    if(error) throw error
}