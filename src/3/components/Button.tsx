import { ButtonProps } from "../Interfaces";

export const Button:React.FC<ButtonProps> = (props:ButtonProps) => {

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