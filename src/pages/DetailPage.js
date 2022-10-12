// import React from "react";
// import { useParams } from "react-router-dom";
// import { getNote } from "../utils/network-data";
// //import { showFormattedDate } from "../utils/api";

// const DetailNote = () => {
//   const { id } = useParams();
//   const note = getNote(id);

//   return (
//     <div className="note-app__main">
//       <div className="note-app__detail-note">
//         <h1 className="note-app__detail-note_title">{note.title}</h1>
//         <p className="note-app__detail-note_date">
//           {note.createdAt}
//         </p>
//         <p className="note-app__detail-note_body">{note.body}</p>
//       </div>
//     </div>
//   );
// };

// export default DetailNote;
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesDetail from "../components/NotesDetail";
import { deleteNote, getNote, getActiveNotes } from "../utils/network-data";
import PropTypes from "prop-types";

function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();

  async function onDeleteHandler(id) {
    await deleteNote(id);
    navigate("/");
  }
  return <DetailPage id={id} onDelete={onDeleteHandler} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getActiveNotes(props.id),
    };
  }

  render() {
    return (
      <section>
        <NotesDetail {...this.state.note} onDelete={deleteNote} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DetailPageWrapper;