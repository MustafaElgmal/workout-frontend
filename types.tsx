import { SVGProps } from "react"

export interface AppProp{
    
}

export interface Person {
    id: number,
    name:string,
    avatar: string
}

export interface MenuType{
    name:string,
    href:string,
    icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    current:Boolean
    
}

