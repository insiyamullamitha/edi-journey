import { ADD_DIARY_ENTRY, DELETE_DIARY_ENTRY } from "./actions";

const initialState = {
  diaryEntries: [],
};

const diaryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DIARY_ENTRY:
      let id = 1;
      if (state.diaryEntries.length > 0) {
        id = state.diaryEntries[0].id + 1;
      }
      let newEntry = {
        id: id,
        title: action.payload.title,
        date: action.payload.date,
        details: action.payload.details,
      };
      return {
        ...state,
        diaryEntries: [newEntry, ...state.diaryEntries],
      };
    case DELETE_DIARY_ENTRY:
      return {
        ...state,
        diaryEntries: state.diaryEntries.filter(
          (entry) => entry.id !== action.payload
        ),
      };

    default:
      return state;
  }
};

export default diaryReducer;
