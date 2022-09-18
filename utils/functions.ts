import { exercises } from './../constants/index';
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
export const findExerciece=(setWorkout:Function,id:number)=>{
    const workout=exercises.find((exercise)=>exercise.id===id)
    setWorkout(workout)
}
export const findOtherExercieces=(setOtherWorkout:Function,id:number)=>{
    const OtherWorkouts=exercises.filter((exercise)=>exercise.id!==id)
    setOtherWorkout(OtherWorkouts)
}