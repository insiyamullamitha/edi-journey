export const ADD_DIARY_ENTRY = "ADD_DIARY_ENTRY";
export const DELETE_DIARY_ENTRY = "DELETE_DIARY_ENTRY";

export const addDiaryEntry = (entry) => ({
  type: ADD_DIARY_ENTRY,
  payload: entry,
});

export const deleteDiaryEntry = (id) => ({
  type: DELETE_DIARY_ENTRY,
  payload: id,
});
