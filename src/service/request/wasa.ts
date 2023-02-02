import { TOKEN } from "@/constants";
import md5 from "js-md5";

const timestamp = Date.now();

const id = timestamp + Math.round(Math.random() * 10);

const sign = md5(
  id + ":" + "dd8ed3c8579058dd6b338ffa498a9406" + ":" + timestamp
);

const wasaRequestData = {
  data: {
    account: "test",
    password: "lamtoys123456",
  },
  // user: { userId: localStorage.getItem(TOKEN) },
  user: {
    sid: 12312,
    userId: 123123456,
  },
  client: {
    caller: "wxapp",
    ex: {
      model: "SM-G970U1",
    },
    os: "28 / 13.3.1",
    platform: "android",
    bundleId: "com.qlchat.hexiaoyu",
    ver: "1.0.6",
  },
  ip: "127.0.0.1",
  id,
  sign,
  page: {
    page: 1,
    size: 10,
  },
  timestamp,
  userAgent:
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.132 Safari/537.36",
};

export default wasaRequestData;
