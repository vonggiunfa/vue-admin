let BASE_URL = "";
const TIME_OUT = 5000;

if (process.env.NODE_ENV === "development") {
  BASE_URL = "";
}
if (process.env.NODE_ENV === "production") {
  BASE_URL = "http://xxx";
}

export default { BASE_URL, TIME_OUT };
