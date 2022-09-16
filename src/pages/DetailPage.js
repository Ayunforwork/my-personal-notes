import React from "react";
import NotesDetail from "../components/NotesDetail";
import { getNote } from "../utils/local-data";

class DetailPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            notes: getNote()
        };
    }

    render() {
        if (this.state.notes  === null) {
            return <p>Tidak ditemukan</p>
        }

        return (
            <section>
                <NotesDetail {...this.state.notes} />
            </section>
        );
    }
}

export default DetailPage;
