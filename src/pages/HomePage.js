import React from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { deleteNote, getAllNotes } from "../utils/local-data";
import { useSearchParams } from 'react-router-dom';

function HomePageWrapper() {
    const [searchParams, setSearchParams] = useSearchParams();

    const keyword = searchParams.get('keyword');

    function changeSearchParams({ keyword }) {
        setSearchParams({ keyword });
    }

    return <HomePage defaultKeyword={keyword} keywordChange={changeSearchParams} />
}

class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getAllNotes(),
            keyword: props.defaultKeyword || '',
        }

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onDeleteHandler(id) {
        deleteNote(id);

        //update the note state from local-data.js
        this.setState(() => {
            return {
                notes: getAllNotes(),
            }
        });
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        });

        this.props.keywordChange(keyword);
    }


    render() {
        return (
            <section>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                <h2>Daftar Catatan</h2>
                <NotesList notes={this.state.notes} onDelete={this.onDeleteHandler} />
            </section>
        )
    }
}

export default HomePageWrapper;