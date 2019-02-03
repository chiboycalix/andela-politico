/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export default (db, dbName, params, callback) => {
  let text = `CREATE TABLE IF NOT EXISTS ${dbName}(id SERIAL PRIMARY KEY not null,`;
  const keys = Object.keys(params);
  const { length } = keys;
  for (const param in params) {
    if (params.hasOwnProperty(param)) {
      text += `${param} ${params[param]}`;
    }
    if (keys[length - 1] === param) {
      text += '';
    } else { text += ','; }
  }
  text += ')';
  db.query(text, (error) => {
    if (error) throw error;
    if (callback) callback();
  });
};