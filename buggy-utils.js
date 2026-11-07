export const getDramas = series => series.filter(show => show.genre === "Drama");//שיניתי את ההשמה לבדיקה

export const getEpisodeById = (season, idText) =>
  season.episodes.find(episode => episode.id == idText);//שיניתי את הבדיקה שרק תשווה בין הערכים לא הטיפוסים

export const addEpisodeToFirstSeason = (show, episode) => {
  const firstSeason = show.seasons[0];
  firstSeason.episodes.push(episode);
  return { ...show };
};