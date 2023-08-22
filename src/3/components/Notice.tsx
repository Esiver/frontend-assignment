import { FunctionComponent } from "react";
import { INoticeProps } from "../Interfaces";

export const Notice: FunctionComponent<INoticeProps> = ({
  title,
  description,
  stringList,
}: INoticeProps) => {
  return (
    <div className="notice__wrapper">
      <h2>{title}</h2>
      <p>{description}</p>
      {stringList.length > 0 ? (
        <ul className="no-list">
          {stringList.map((string, index) => (
            <li key={index}>{string}</li>
          ))}
        </ul>
      ) : ""}

    </div>
  );
};
