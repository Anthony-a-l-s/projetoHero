import { forwardRef } from "react"

type Props = {
    placeholder: string;
}
export const Input = forwardRef<HTMLInputElement, Props>(({placeholder, ...rest}: Props, ref)=>{
    return(
        <input 
        ref={ref}
        type="text"
        className="outline-none shadown-lg border-2 border-gray-200 rounded-lg w-full p-2 mt-3 my-2"
        placeholder={placeholder}
        {...rest}
    />
    )
})