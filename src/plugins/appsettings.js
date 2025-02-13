import axios from "axios";
const appsettingss = await axios.get("appsettings.json");
export const appSettings = appsettingss.data;
