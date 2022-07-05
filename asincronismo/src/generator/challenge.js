import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

const fetchData = async (urlApi) => {
  const response = await fetch(urlApi);
  const data = await response.json();
  return data;
};

const iterData = async function* (urlApi) {
  try {
    const products = await fetchData(`${urlApi}/products`);
    yield console.log(products[103]);
    const product = await fetchData(`${urlApi}/products/${products[103].id}`);
    yield console.log(product.title);
    const category = await fetchData(
      `${urlApi}/categories/${product.category.id}`
    );
    yield console.log(category.name);
  } catch (error) {
    console.error(error);
  }
};

const generateDataIt = iterData(API);
generateDataIt.next();
generateDataIt.next();
generateDataIt.next();
