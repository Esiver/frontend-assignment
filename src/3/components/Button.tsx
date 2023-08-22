import { IButtonProps } from "../Interfaces";

export const Button:React.FC<IButtonProps> = (props:IButtonProps) => {

    const handleButtonClick = (e:any) => {
        props.onClick(e);
        return false;
    }

    return (
        <button onClick={handleButtonClick} className="button">
            {props.text}
        </button>
    )
}