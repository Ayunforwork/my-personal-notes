import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotesDetail from "../components/NotesDetail";
import { deleteNote, getNote, archiveNote, unarchiveNote } from "../utils/network-data";
import NotFound from "./404";
import PropTypes from "prop-types";
import Loading from "react-fullscreen-loading";
import Swal from "sweetalert2";

function DetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [note, setNote] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getNote(id).then(({ data }) => {
      setNote(data);
      setIsLoading(false);
    })
  }, [id]);  

  async function onDeleteHandler(id) {
    await deleteNote(id);
      navigate("/");

    
  }

  async function onArchiveHandler(id) {

    await archiveNote(id);
    navigate("/");
  }

  async function onUnArchiveHandler(id) {
    await unarchiveNote(id);
    navigate("/arsip");
  }

  return (
    <>
      {
        (() => {
          if (isLoading) {
            return <Loading />
          }

          if (note === null) {
            return (
              <div>
                <NotFound />
              </div>
            )
          }

          return (
            <div>
              <NotesDetail {...note} onDelete={onDeleteHandler} onArchive={onArchiveHandler} onUnArchive={onUnArchiveHandler} />
            </div>
          )
        })()
      }
    </>
  )
}

export default DetailPage;

// function DetailPageWrapper() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   async function onDeleteHandler(id) {
//     await deleteNote(id);
//     navigate("/");
//   }
//   return <DetailPage id={id} onDelete={onDeleteHandler} />;
// }

// class DetailPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       note: getActiveNotes(props.id),
//     };
//   }

//   render() {
//     return (
//       <section>
//         <NotesDetail {...this.state.note} onDelete={deleteNote} />
//       </section>
//     );
//   }
// }

// DetailPage.propTypes = {
//   id: PropTypes.string.isRequired,
//   onDelete: PropTypes.func.isRequired,
// };

// export default DetailPageWrapper;