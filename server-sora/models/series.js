const mongoose = require("mongoose")

const seriesSchema = new mongoose.Schema(
  {
    backdrop_path: {
      type: String,
      required: true
    },
    first_air_date: {
      type: Date,
      required: true
    },
    genre_ids: {
      type: [Number],
      required: true
    },
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin_country: {
      type: [String],
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { collection: "series" }
)
const crimeSchema = new mongoose.Schema(
  {
    backdrop_path: {
      type: String,
      required: true
    },
    first_air_date: {
      type: Date,
      required: true
    },
    genre_ids: {
      type: [Number],
      required: true
    },
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin_country: {
      type: [String],
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { collection: "genre_crime" }
)
const fantasySchema = new mongoose.Schema(
  {
    backdrop_path: {
      type: String,
      required: true
    },
    first_air_date: {
      type: Date,
      required: true
    },
    genre_ids: {
      type: [Number],
      required: true
    },
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin_country: {
      type: [String],
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { collection: "genre_fantasy" }
)
const actAdvSchema = new mongoose.Schema(
  {
    backdrop_path: {
      type: String,
      required: true
    },
    first_air_date: {
      type: Date,
      required: true
    },
    genre_ids: {
      type: [Number],
      required: true
    },
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin_country: {
      type: [String],
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { collection: "genre_acion_adventure" }
)

const comedySchema = new mongoose.Schema(
  {
    backdrop_path: {
      type: String,
      required: true
    },
    first_air_date: {
      type: Date,
      required: true
    },
    genre_ids: {
      type: [Number],
      required: true
    },
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin_country: {
      type: [String],
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { collection: "genre_comedy" }
)
const mysterySchema = new mongoose.Schema(
  {
    backdrop_path: {
      type: String,
      required: true
    },
    first_air_date: {
      type: Date,
      required: true
    },
    genre_ids: {
      type: [Number],
      required: true
    },
    id: {
      type: Number,
      unique: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    origin_country: {
      type: [String],
      required: true
    },
    original_language: {
      type: String,
      required: true
    },
    original_name: {
      type: String,
      required: true
    },
    overview: {
      type: String,
      required: true
    },
    popularity: {
      type: Number,
      required: true
    },
    poster_path: {
      type: String,
      required: true
    },
    vote_average: {
      type: Number,
      required: true
    },
    vote_count: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    }
  },
  { collection: "genre_mystery" }
)




const seriesModel = mongoose.model("Series", seriesSchema)
const crimeModel = mongoose.model("Crime", crimeSchema)
const comedyModel = mongoose.model("Comedy", comedySchema)
const fantasyModel = mongoose.model("Fantasy", fantasySchema)
const actionAdvModel = mongoose.model("Action/Adventure", actAdvSchema)
const mysteryModel = mongoose.model("Mystery", mysterySchema)

module.exports = {seriesModel,crimeModel,comedyModel,fantasyModel,actionAdvModel,mysteryModel}