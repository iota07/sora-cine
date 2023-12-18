const seriesModel = require("../models/series");
const { getAnimeData } = require("../controllers/api");


async function getAllSeries() {
    const allSeries = await getAnimeData();
    return allSeries
}

async function getCrime() {
    try {
        const allSeriesData = await getAllSeries();
        const crimeSeries = allSeriesData.filter(serie => serie.genre_ids.includes(80));
        // console.log(crimeSeries);
        return crimeSeries;
    } catch (error) {
        console.error('Error:', error);
    }
}
async function getFantasy() {
    try {
        const allSeriesData = await getAllSeries();
        const fantasySeries = allSeriesData.filter(serie => serie.genre_ids.includes(10765));
        // console.log(fantasySeries);
        return fantasySeries;
    } catch (error) {
        console.error('Error:', error);
    }
}
async function getActAdv() {
    try {
        const allSeriesData = await getAllSeries();
        const adventureSeries = allSeriesData.filter(serie => serie.genre_ids.includes(10759));
        // console.log(crimeSeries);
        return adventureSeries;
    } catch (error) {
        console.error('Error:', error);
    }
}
async function getComedy() {
    try {
        const allSeriesData = await getAllSeries();
        const comedySeries = allSeriesData.filter(serie => serie.genre_ids.includes(35));
        // console.log(comedyeries);
        return comedySeries;
    } catch (error) {
        console.error('Error:', error);
    }
    
}
async function getMystery() {
    try {
        const allSeriesData = await getAllSeries();
        const mysterySeries = allSeriesData.filter(serie => serie.genre_ids.includes(9648));
        // console.log(mysterySeries);
        return mysterySeries;
    } catch (error) {
        console.error('Error:', error);
    }
}


module.exports = {getCrime,getFantasy,getActAdv,getComedy,getMystery,getAllSeries}