import { useNavigate,useParams } from "react-router-dom";
import { archiveNote, deleteNote,getNote, unarchiveNote } from "../utils/local-data";
import PropTypes from 'prop-types'
import NotesDetail from "../components/NotesDetail";
import React from "react";
import NotFound from "./404";

function ContentWrapper(){
    const {id} = useParams();
    const navigate = useNavigate();

    function onDeleteHandler(id){
        deleteNote(id);
        navigate("/")
    }

    function onArchiveHandler(id)
    {
        archiveNote(id);
        navigate("/archives")
    }
    
    function onUnArchiveHandler(id)
    {
        unarchiveNote(id);
        navigate("/");
    }
    return <Content id={id} onDelete={onDeleteHandler} onArchive={onArchiveHandler} unArchive={onUnArchiveHandler}/>
}

class Content extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            notes:getNote(props.id)
        }
    }
    render(){
      
        return(
            <section className="detail-page">
                { this.state.notes
                    ? <NotesDetail {...this.state.notes} onDelete={deleteNote} onArchive={archiveNote} unArchive={unarchiveNote} archive={this.state.notes.archived}/>
                    : <NotFound/>
                }
               
            </section>
        )
    }
}


Content.propTypes = {
    id:PropTypes.string.isRequired,
    onDelete:PropTypes.func.isRequired,
    onArchive:PropTypes.func.isRequired
}

export default ContentWrapper;