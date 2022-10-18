
// import React from "react";
// import NotesList from "../components/NotesList";
// import SearchBar from "../components/SearchBar";
// import { getArchivedNotes } from "../utils/network-data";

// class ArchivePage extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {
//             notes : getArchivedNotes(),
//             keyword: props.defaultKeyword || ""
//         }
//         this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
//     }
//     onKeywordChangeHandler(keyword){
//         this.setState(()=>{
//             return{
//                 keyword,
//             }
//         })

//     }
//     render(){
//         const notes = this.state.notes.filter((note)=> {
//             return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
//         })
//         return(
//             <section className="archive-page">
//                 <h2>Catatan Arsip</h2>
//                  <SearchBar keyword={this.state.keyword} keywordChange = {this.onKeywordChangeHandler}/>
//                 {this.state.notes.length
//                   ?  <NotesList Notes={notes}/>
//                   : "Tidak ada Arsip"
//                 }

//             </section>
//         )
//     }
// }

// export default ArchivePage;
import React from "react";
import NotesList from "../components/NotesList";
import SearchBar from "../components/SearchBar";
import { getArchivedNotes, putAccessToken } from "../utils/network-data";

class ArchivePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getArchivedNotes(),
            keyword: props.defaultKeyword || ''
        }
        this.onKeywordChangeHandler = this.onKeywordChangeHandler.bind(this);
    }

    onKeywordChangeHandler(keyword) {
        this.setState(() => {
            return {
                keyword,
            }
        })
    }

    async onGetArchivedNotes() {
        const data = await getArchivedNotes()
        console.log("ini archive ", data)
    }

    render() {
        // const notes = this.state.notes?.filter((note) => {
        //     return note.title.toLowerCase().includes(this.state.keyword.toLowerCase());
        // })

        return (
            <section className="archive-page">
                {/* <h2>Catatan Arsip</h2>
                <SearchBar keyword={this.state.keyword} keywordChange={this.onKeywordChangeHandler} />
                {this.state.notes.length
                    ? <NotesList Notes={notes} />
                    : "Tidak ada Arsip"
                } */}
            </section>
        )
    }
}

export default ArchivePage;