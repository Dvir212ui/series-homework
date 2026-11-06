export const getEpisodeTitle = (show, seasonIndex, episodeIndex) => 
    show.seasons[seasonIndex].episodes[episodeIndex].title;

export const getLastSeasonNumber = (show) => 
    show.seasons[show.seasons.length -1]?.number ?? 0;//no seasons returns 0

export const getNextSeasonYear = (show) =>
    show.nextSeason?.year ?? "No announcement";