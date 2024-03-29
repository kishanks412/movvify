export const netflix_Logo =
  "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const user_Avatar =
  "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png";

export const signin_Background =
  "https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg";


const key = process.env.REACT_APP_TMDB_KEY
// console.log(key)

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer " + key,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500/";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "bhojpuri", name: "Bhojpuri" },
  { identifier: "bengali", name: "Bangla" },
  { identifier: "tamil", name: "Tamil" },
  { identifier: "telugu", name: "Telugu" },
  { identifier: "malayalam", name: "Malayalam" },
  { identifier: "spanish", name: "Spanish" },
  { identifier: "french", name: "French" },

];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;