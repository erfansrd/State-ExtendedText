import { useState } from "react";

interface Props {
    children: string;
    maxChars: number;
}




const ExpandableText = ({ children, maxChars }: Props) => {
    let [isExtanded, setExtanded] = useState(false);

    if(children.length <= maxChars) return <p className="m-3 p-3 bg-danger">{children}</p>
    let text = (isExtanded ? children : children.substring(0, maxChars))
    let handleClick = () => {
        setExtanded(!isExtanded);
        
    }
  return (
    <>
        <div className="m-3 p-3 bg-danger">{text}...</div>
        <button type="button" className="btn btn-outline-danger m-3" onClick={handleClick}>{isExtanded ? 'hide' : 'show'}</button>
    </>
  )
}

export default ExpandableText