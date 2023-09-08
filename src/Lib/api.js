const baseUrlforProduct = 'https://dummyjson.com/';
const baseUrlforCategory = 'https://dummyjson.com/products/';
const baseUrlforSpecificCategory = 'https://dummyjson.com/products/category/';
const allProducts = async payload => {
  try {
    const request = baseUrlforProduct + `${payload.url}`;
    const response = await fetch(request, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

const allCategories = async payload => {
  try {
    const request = baseUrlforCategory + `${payload.url}`;
    const response = await fetch(request, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};
const specificCategory = async payload => {
  try {
    const request = baseUrlforSpecificCategory + `${payload.url}`;
    const response = await fetch(request, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export {allProducts, allCategories, specificCategory};
