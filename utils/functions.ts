import { MenuType } from './../types';
export const changeNavigationCurrent=(href:string,menu:MenuType[],setMenu:Function)=>{
    const navigation=menu.map((item)=>item.href===href?{...item,current:true}:{...item,current:false})
    setMenu(navigation)
}