import { exercises, workouts } from './../constants/index';
import { MenuType } from './../types';
export const changeNavigationCurrent=(href:string,menu:MenuType[],setMenu:Function)=>{
    const navigation=menu.map((item)=>item.href===href?{...item,current:true}:{...item,current:false})
    setMenu(navigation)
}
export const getIdFromPath=(path:string):number=>{
    const parts=path.split('/')
    const id=parts[parts.length-1]
    return parseInt(id)
}
export const getCategoryIdFromPath=(path:string):number=>{
    const parts=path.split('/')
    const id=parts[parts.length-2]
    return parseInt(id)
}
export const findExerciece=(setExerciece:Function,id:number)=>{
    const exerciece=exercises.find((exercise)=>exercise.id===id)
    setExerciece(exerciece)
}
export const findExercieces=(setExercieces:Function,id:number)=>{
    const exercieces=exercises.filter((exercise)=>exercise.workoutId!==id)
    setExercieces(exercieces)
}
export const findOtherExercieces=(setOtherExerciece:Function,id:number)=>{
    const OtherExercieces=exercises.filter((exercise)=>exercise.id!==id)
    setOtherExerciece(OtherExercieces)
}
export const findOtherWorkouts=(setOtherWorkouts:Function,id:number)=>{
    const OtherWorkouts=workouts.filter((exercise)=>exercise.id!==id)
    setOtherWorkouts(OtherWorkouts)
}