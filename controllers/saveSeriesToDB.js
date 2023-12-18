const { getAnimeData } = require("./api");
const seriesModel = require("../models/series");

async function saveSeriesToDatabase() {
  const seriesData = await getAnimeData();

  for (const serie of seriesData) {
    try {
      const seriesInstance = new seriesModel({
        backdrop_path: serie.backdrop_path,
        first_air_date: new Date(serie.first_air_date),
        genre_ids: serie.genre_ids,
        id: serie.id,
        name: serie.name,
        origin_country: serie.origin_country,
        original_language: serie.original_language,
        original_name: serie.original_name,
        overview: serie.overview,
        popularity: serie.popularity,
        poster_path: serie.poster_path,
        vote_average: serie.vote_average,
        vote_count: serie.vote_count,
        url: serie.url,
      });

      await seriesInstance.save();
      console.log(`Série enregistrée dans la base de données: ${serie.name}`);
    } catch (error) {
      console.error(
        `Erreur lors de l'enregistrement de la série ${serie.name}:`,
        error
      );
      // Gérer l'erreur selon vos besoins
    }
  }
}

module.exports = saveSeriesToDatabase;
