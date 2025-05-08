// * Form
export function getFormData(formElem) {
  const formData = new FormData(formElem);

  formData.forEach((value, key) => {
    formData.set(key, value.trim());
  });

  const mapToObject = map => Object.fromEntries(map.entries());
  const formDataAsObj = mapToObject(formData);

  return formDataAsObj;
}
