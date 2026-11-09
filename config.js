// Apps Script をウェブアプリとしてデプロイしたURL（保存先スプレッドシートへの送信口）。
window.APP_CONFIG = {
  ENDPOINT: "https://script.google.com/macros/s/AKfycbwoLIpbxWYeJao-BJJBXxmXIiwYotjKzDX5r7K0o8sZM94FvaOVEOJv0LoQq0xKa6dC/exec",
  // 無料運用のため空のまま（OpenStreetMap で検索）。Google Places を使う場合のみキーを入れる。
  GOOGLE_KEY: "",
  MAP_CENTER: [34.8226, 135.5246], // 検索の優先エリア（緯度, 経度）。大阪周辺
};
