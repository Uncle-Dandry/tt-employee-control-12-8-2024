const trimFormValues = <T>(formValues: T): T => {
  return Object.entries(formValues as Record<string, unknown>).reduce(
    (accum, [formValueKey, formValue]) => {
      // @ts-ignore
      accum[formValueKey] = typeof formValue === 'string' ? formValue?.trim() : formValue;

      return accum;
    },
    {} as T,
  );
};

export default trimFormValues;
