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
  onFocus(id: string) {
    document.getElementById(id)?.focus();
  },
  formatPrice(price: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL' // R$
    }).format(price / 100);
  },
  setCookie(name: string, value: string, hours: number) {
    const dateExpires = new Date(Date.now());
    dateExpires.setTime(dateExpires.getTime() + (hours * 60 * 60 * 1000));

    const expires = `expires=${dateExpires.toUTCString()}`;

    document.cookie = `${name}=${value};${expires};`;
  },
  getCookie(name: string) {
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(`${name}=`) === 0) {
        return c.substring(`${name}=`.length, c.length);
      }
    }
    return '';
  },
  deleteCookie(name: string) {
    var d = new Date();
    d.setTime(d.getTime() - (1000*60*60*24));
    var expires = "expires=" + d.toUTCString();
    window.document.cookie = `${name}=;${expires}`;
  },
  clearAndSetCookie(name: string, value: string, hours: number) {
    util.deleteCookie(name);
    util.setCookie(name, value, hours);
  }
};

export default util;
