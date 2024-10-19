
const fetchData = async (endpoint, queryParams = "") => {
  try {
    const url = `${import.meta.env.VITE_SERVER_URL}/${endpoint}?${queryParams}`;
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

export const getSatelliteByNoradId = (id) => {
  return fetchData('satellites', `stationId=${id}`);
}
