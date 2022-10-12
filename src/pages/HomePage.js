import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
//import LocaleContext from "../contexts/LocaleContext";
import { deleteNote, getActiveNotes } from "../utils/network-data";
import { LocaleConsumer } from "../contexts/LocaleContext";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });
  //const { locale } = React.useContext(LocaleContext);

  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

  async function onDeleteHandler(id) {
    await deleteNote(id);
    // update the contacts state from network.js
    const { data } = await getActiveNotes();
    setNotes(data);
  }
  function onKeywordChangeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  const filteredNotes = notes.filter((note) => {
    return note.title.toLowerCase().includes(keyword.toLowerCase());
  });

  return (
    <LocaleConsumer>
      {
        ({ locale }) => {
          return (

            <main>
              <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
              <br />
              <h2>{locale === 'id' ? 'Daftar Catatan' : 'Notes List'}</h2>
              <NotesList notes={filteredNotes} onDelete={onDeleteHandler} />
            </main>
          )
        }
      }
    </LocaleConsumer>
  );
}

export default HomePage;
// import React from "react";
// import { Link } from "react-router-dom";
// import NotesList from "../components/NotesList";
// //import { getAllNotes } from "../utils/local-data";
// import { GrAddCircle } from "react-icons/gr";
// import SearchBar from "../components/SearchBar";
// import { getActiveNotes, deleteNote } from "../utils/network-data";
// import { useSearchParams } from "react-router-dom";

// function HomePageWrapper() {
//   const [searchParams, setSearchParams] = useSearchParams();

//   const keyword = searchParams.get('keyword');

//   function changeSearchParams(keyword) {
//     setSearchParams({ keyword });
//   }

//   return <Homepage defaultKeyword={keyword} keywordChange={changeSearchParams} />
// }

// class Homepage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       notes: [],
//       keyword: props.defaultKeyword || "",
//     };

//     //this.onDelete
//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//   }



//   onKeywordChangeHandler(keyword) {
//     this.setState(() => {
//       return {
//         keyword,
//       };
//     });

//     this.props.keywordChange(keyword);
//   }

//   async componentDidMount() {
//     const { data } = await getActiveNotes();

//     this.setState(() => {
//       return {
//         notes: data
//       }
//     })
//   }

//   async onDeleteHandler(id) {
//     await deleteNote(  id);

//     //update the note from api
//     const { data } = await getActiveNotes();
//     this.setState(() => {
//       return {
//         notes: data,
//       }
//     })
//   }

//   render() {
//     const notes = this.state.notes.filter((note) => {
//       return note.title
//         .toLowerCase().includes(
//           this.state.keyword.toLowerCase()
//           );
//     });

//     return (
//       <div>
//         <section>
//           <h2>Daftar Catatan</h2>
//           <SearchBar
//             keyword={this.state.keyword}
//             keywordChange={this.onKeywordChangeHandler}
//           />
//           <NotesList notes={notes} onDelete={this.onDeleteHandler} />
//         </section>
//         <Link to="/add" className="action">
//           <GrAddCircle />
//         </Link>
//       </div>
//     );
//   }
// }

// export default HomePageWrapper;