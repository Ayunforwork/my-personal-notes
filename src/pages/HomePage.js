import React from "react";
import { useSearchParams } from "react-router-dom";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { deleteNote, getActiveNotes } from "../utils/network-data";
import { LocaleConsumer } from "../contexts/LocaleContext";
import { Link } from 'react-router-dom';
import { GrAddCircle } from "react-icons/gr";

function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notes, setNotes] = React.useState([]);
  const [keyword, setKeyword] = React.useState(() => {
    return searchParams.get("keyword") || "";
  });


  React.useEffect(() => {
    getActiveNotes().then(({ data }) => {
      setNotes(data);
    });
  }, []);

 
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
            <div>
              <section>
                <SearchBar keyword={keyword} keywordChange={onKeywordChangeHandler} />
                <br />
                <h2>{locale === 'id' ? 'Daftar Catatan' : 'Notes List'}</h2>
                <NotesList notes={filteredNotes} />
              </section>
              <Link to="/add" className="action">
                <GrAddCircle />
              </Link>
            </div>
          )
        }
      }
    </LocaleConsumer>
  );
}

export default HomePage;
