export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => 
    show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = (show) => 
    show.seasons[show.seasons.length -1]?.number ?? 0;//no seasons returns 0

export const getNextSeasonYear = (show) =>
    show.nextSeason?.year ?? "No announcement";

export const getById = (series, id) => 
    series.find((show) => show.id === id);//בודק שהמזהה שהתקבל זהה למזהה של סדרה מסויימת

export const getSeasonsCount = (series) =>
    series.map((show) => ({title: show.title, seasons: show.seasons.length}));//מצמצם את תכונות האובייקט לתכונות נבחרות

export const hasTopEpisode = (show, minRating) =>
    show.seasons.some((season) =>//פונקציה ראשונה בשביל לסרוק עונות
        season.episodes.some((episode) => episode.rating >= minRating))//בשביל לגשת לנתוני המערך משתמשים בעוד פונקציה

export const getCreatorsFrom = (series, country) => {
  const result = []; // יצירת מערך חדש

  series.map((show) => {//תחליף ללולאה של כל הסדרות
    // בודקים אם היוצר הבודד בסדרה קיים והמדינה שלו תואמת
    if (show.creator && show.creator.country === country) {
      result.push(show.creator.name); // מוסיפים את השם שלו
    }
  });

  return result; // החזרת המערך החדש
};

export const sortByStartYear = (series) =>//העתקה עמוקה של כל המערך ומיון לפי תאריך
    [...series].sort((a ,b) => a.startYear - b.startYear)