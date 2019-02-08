// eslint-disable-next-line arrow-body-style
export default (response, statusCode, statusMessage, ...data) => {
  console.log(response);
  return response.status(statusCode).json({ statusMessage, data });
};
  