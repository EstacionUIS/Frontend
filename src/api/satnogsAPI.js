
const BASE_URL = `http://localhost:${import.meta.env.VITE_BACKEND_PORT}/api`; 

const fetchData = async (endpoint, queryParams = "") => {
  try {
    const url = `${BASE_URL}/${endpoint}?${queryParams}`;
    const response = await fetch(url);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(`Station not found.`);
      } else if (response.status === 400) {
        throw new Error(`Invalid request parameters.`);
      } else {
        throw new Error(
          `Error fetching data: ${response.status} ${response.statusText}`,
        );
      }
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getObservationsByStationId = (id) => {
  return fetchData('observations', `stationId=${id}`);
};

export const getStationById = (id) => {
  return fetchData('stations', `stationId=${id}`);
};
