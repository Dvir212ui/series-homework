export const getDramas = series => series.filter(show => show.genre === "Drama");//שיניתי את ההשמה לבדיקה

export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id == idText);//שיניתי את הבדיקה שרק תשווה בין הערכים לא הטיפוסים

export const addEpisodeToFirstSeason = (show, episode) => 
({
  ...show, seasons: show.seasons.map((season, index) => //העדכון של העונה הראשונה עם הפרק החדש
  index === 0?//בדיקה אם זה העונה הראשונה
  { ...season, episodes: [...season.episodes, episode] } //אם כן מחזיר את העונה עם הפרק החדש דרך העותק שנוצר
  : season)//אם לא העונה הראשונה מחזיר את העונה ללא שינוי
});