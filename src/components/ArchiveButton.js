import React from "react";
import { useNavigate } from "react-router-dom";
import { BiArchive } from "react-icons/bi"

function ArchiveButton({ id, onArchiveHandler }) {
    const navigate = useNavigate();

    async function onArchiveHandler(id) {
        console.log("manggil")
        await onArchiveHandler(id)
    }

    return (
        <div>
            <button className='action' onClick={
                () => {
                    onArchiveHandler(id);
                    // navigate("/arsip");
                }
            }>
                <BiArchive />
            </button>
        </div>
    )
}

export default ArchiveButton;