const util = {
  onlyNumbers(value: string) {
    return value.replace(/\D/g, '');
  },
  removeHoursDateTimeApi(value: string) {
    if (value === '0001-01-01T00:00:00') return '';

    return value.replace('T00:00:00', '');
  },
  includesToLowerCase(valueOne: string, valueTwo: string): boolean {
    return valueOne.toLowerCase().includes(valueTwo.toLowerCase());
  },
  includesToArray(values: string[], compare: string): boolean {
    for (const value of values) {
      if (util.includesToLowerCase(value, compare)) return true;
    }
    return false;
  },
  getFormatDate(value: string) {
    const date = new Date(util.removeHoursDateTimeApi(value));

    const day = `0${date.getDate()}`.slice(-2);
    const month = `0${date.getMonth() + 1}`.slice(-2);

    return `${day}/${month}/${date.getFullYear()}`;
  },
  emptyValue(value: string, id: string) {
    if (value !== '') return true;

    document.getElementById(id)?.focus();
    return false;
  },
};

export default util;
