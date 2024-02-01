export const toFormData = (obj) => {
  let formData = new FormData();
  for (let key in obj) {
    formData.append(key, obj[key]);
  }
  return formData;
};

export const filterQueries = (queries) => {
  return Object.fromEntries(
    Object.entries(queries).filter(
      ([_, v]) => v !== "" && v !== null && v !== -1
    )
  );
};
