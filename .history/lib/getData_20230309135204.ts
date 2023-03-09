
// this is the 
export const getData = async () => {
  let response = await fetch(
    'https://wvgewzcu.api.sanity.io/v2021-10-21/data/query/production?query=*%0A%5B_type%20%3D%3D%20%22memo%22%5D'
  );
  const data = await response.json();
  return data;
};
