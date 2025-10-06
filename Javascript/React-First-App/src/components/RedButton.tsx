import React from "react";

interface Props {
    children: string;
    onClick: () => void;
}
function DangerButton({ children, onClick }: Props ){
    return <button type="button" className="btn btn-danger" onClick={onClick}>Danger</button>;
}

export default DangerButton;