import React, { Component } from "react";
import { connect } from "react-redux";
import DiaryForm from "./components/DiaryForm";
import DiaryEntry from "./components/DiaryEntry";
import { addDiaryEntry, deleteDiaryEntry } from "./redux/actions";

export class Diary extends Component {
  render() {
    const { addDiaryEntry, diaryEntries, deleteDiaryEntry } = this.props;
    return (
      <div className="flex justify-center items-center bg-lilac-50 min-h-screen p-4 sm:p-8">
        <div className="max-w-2xl mx-auto bg-purple-200 shadow-lg rounded-lg p-4 sm:p-8 grid gap-4 sm:grid-cols-2">
          <div className="bg-purple-200 p-4 rounded-lg shadow-lg">
            <DiaryForm addDiaryEntry={(entry) => addDiaryEntry(entry)} />
          </div>
          <div className="mt-4 sm:mt-0 space-y-4 h-64 overflow-y-auto">
            {diaryEntries.map((entry) => (
              <DiaryEntry
                key={entry.id}
                entry={entry}
                deleteDiaryEntry={(entry) => deleteDiaryEntry(entry)}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  diaryEntries: state.diaryEntries,
});

const mapDispatchToProps = (dispatch) => ({
  addDiaryEntry: (entry) => dispatch(addDiaryEntry(entry)),
  deleteDiaryEntry: (entry) => dispatch(deleteDiaryEntry(entry)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Diary);
