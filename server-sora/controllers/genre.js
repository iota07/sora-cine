const {
  crimeModel,
  fantasyModel,
  actionAdvModel,
  comedyModel,
  mysteryModel,
} = require("../models/series");

const {
  getComedy,
  getMystery,
  getCrime,
  getFantasy,
  getActAdv,
} = require("../models/genres");

async function saveCrimeToDb() {
  const seriesData = await getCrime();
  // console.log(seriesData)
  for (const serie of seriesData) {
    try {
      const seriesInstance = new crimeModel({
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
      // console.error(
      //   `Erreur lors de l'enregistrement de la série ${serie.name}:`,
      //   error
      // );
    }
  }
}
async function saveFantasyToDb() {
  const seriesData = await getFantasy();
  // console.log(seriesData)
  for (const serie of seriesData) {
    try {
      const seriesInstance = new fantasyModel({
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
      // console.error(
      //   `Erreur lors de l'enregistrement de la série ${serie.name}:`,
      //   error
      // );
    }
  }
}
async function saveComedyToDb() {
  const seriesData = await getComedy();
  // console.log(seriesData)
  for (const serie of seriesData) {
    try {
      const seriesInstance = new comedyModel({
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
      // console.error(
      //   `Erreur lors de l'enregistrement de la série ${serie.name}:`,
      //   error
      // );
    }
  }
}
async function saveActionToDb() {
  const seriesData = await getActAdv();
  // console.log(seriesData)
  for (const serie of seriesData) {
    try {
      const seriesInstance = new actionAdvModel({
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
      // console.error(
      //   `Erreur lors de l'enregistrement de la série ${serie.name}:`,
      //   error
      // );
    }
  }
}
async function saveMysteryToDb() {
  const seriesData = await getMystery();
  // console.log(seriesData)
  for (const serie of seriesData) {
    try {
      const seriesInstance = new mysteryModel({
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
      // console.error(
      //   `Erreur lors de l'enregistrement de la série ${serie.name}:`,
      //   error
      // );
    }
  }

}

module.exports = {
  saveCrimeToDb,
  saveFantasyToDb,
  saveComedyToDb,
  saveActionToDb,
  saveMysteryToDb,
};
