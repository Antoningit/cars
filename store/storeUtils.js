import {
  SERVER_HOST,
  CarBodysValues,
  CarsEnginesValues,
  CarsDrivesValues,
  CarsKppsValues,
  CarsTitles,
  CarsWheelsValues,
} from "../constants";

export const filterQueries = (queries) => {
  return Object.fromEntries(
    Object.entries(queries).filter(([_, v]) => v !== "" && v !== null)
  );
};

export const resolveMappedData = (data) => {
  return data.map((car) => {
    const image = `${SERVER_HOST}uploads/${car.image}`;
    return {
      ...car,
      body: CarBodysValues[car.body],
      drive: CarsDrivesValues[car.drive],
      kpp: CarsKppsValues[car.kpp],
      title: CarsTitles[car.title],
      wheel: CarsWheelsValues[car.wheel],
      image,
      //images: car.images.map((image) => `${SERVER_HOST}uploads/${image}`),
      engine: CarsEnginesValues[car.car_engine],
      mod: car.car_mod,
    };
  });
};

export const resolveFetchString = (payload, api) => {
  const queries = {
    title: payload?.title ?? null,
    model: payload?.model ?? "",
    car_engine: payload?.car_engine ?? null,
    kpp: payload?.kpp ?? null,
    body: payload?.body ?? null,
    year_from: payload?.year_from ?? null,
    take: payload?.take ?? null,
    skip: payload?.skip ?? null,
    id: payload?.id ?? null,
  };
  const filteredQueries = filterQueries(queries);
  return api != null
    ? `${SERVER_HOST}car/${api}?${new URLSearchParams(filteredQueries)}`
    : `${SERVER_HOST}car/?${new URLSearchParams(filteredQueries)}`;
};
