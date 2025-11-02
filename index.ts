function isRequired(value: any, message: string = "is required") {
    return value !== undefined && value !== null && value !== "" ? true : message;
  }
  
  function isEmail(value: any, message: string = "is not a valid email") {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : message;
  }
  
  function isValidNumber(value: any, message: string = "is not a valid number") {
    return !isNaN(Number(value)) ? true : message;
  }
  
  function isValidPhoneNumber(
    value: any,
    message: string = "is not a valid phone number"
  ) {
    return /^\d{10}$/.test(value) ? true : message;
  }
  
  function isLessThan(
    value: any,
    max: number,
    message: string = "is greater than the max value"
  ) {
    return value < max ? true : message;
  }
  
  function isGreaterThan(
    value: any,
    min: number,
    message: string = "is less than the min value"
  ) {
    return value > min ? true : message;
  }
  
  function isLessThanOrEqualTo(
    value: any,
    max: number,
    message: string = "is greater than the max value"
  ) {
    return value <= max ? true : message;
  }
  
  function isGreaterThanOrEqualTo(
    value: any,
    min: number,
    message: string = "is less than the min value"
  ) {
    return value >= min ? true : message;
  }
  
  function isBetween(
    value: any,
    min: number,
    max: number,
    message: string = "is not between the min and max value"
  ) {
    return value >= min && value <= max ? true : message;
  }
  
  function isLengthLessThan(
    value: any,
    max: number,
    message: string = "is greater than the max length"
  ) {
    return value.length < max ? true : message;
  }
  
  function isLengthGreaterThan(
    value: any,
    min: number,
    message: string = "is less than the min length"
  ) {
    return value.length > min ? true : message;
  }
  
  function isLengthBetween(
    value: any,
    min: number,
    max: number,
    message: string = "is not between the min and max length"
  ) {
    return value.length >= min && value.length <= max ? true : message;
  }
  
  function isUrl(value: any, message: string = "is not a valid url") {
    return /^https?:\/\/[^\s]+$/.test(value) ? true : message;
  }
  
  function isIpAddress(
    value: any,
    message: string = "is not a valid ip address"
  ) {
    return /^(\d{1,3}\.){3}\d{1,3}$/.test(value) ? true : message;
  }
  
  function isPort(value: any, message: string = "is not a valid port") {
    return /^\d{1,5}$/.test(value) ? true : message;
  }
  
  function isHexColor(value: any, message: string = "is not a valid hex color") {
    return /^#([0-9a-fA-F]{6})$/.test(value) ? true : message;
  }
  
  function isDate(value: any, message: string = "is not a valid date") {
    return !isNaN(new Date(value).getTime()) ? true : message;
  }
  
  function isTime(value: any, message: string = "is not a valid time") {
    return /^([01]\d|2[0-3]):([0-5]\d)$/.test(value) ? true : message;
  }
  
  function isBeforeDate(
    value: any,
    date: any,
    message: string = "is not before the date"
  ) {
    return new Date(value) < new Date(date) ? true : message;
  }
  
  function isAfterDate(
    value: any,
    date: any,
    message: string = "is not after the date"
  ) {
    return new Date(value) > new Date(date) ? true : message;
  }
  
  function isBetweenDates(
    value: any,
    startDate: any,
    endDate: any,
    message: string = "is not between the dates"
  ) {
    return new Date(value) >= new Date(startDate) &&
      new Date(value) <= new Date(endDate)
      ? true
      : message;
  }
  
  function isFutureDate(value: any, message: string = "is not a future date") {
    return new Date(value) > new Date() ? true : message;
  }
  
  function isPastDate(value: any, message: string = "is not a past date") {
    return new Date(value) < new Date() ? true : message;
  }
  
  function isDateInLastHours(
    value: any,
    hours: number,
    message: string = "is not in the last hours"
  ) {
    return new Date(value) > new Date(Date.now() - hours * 60 * 60 * 1000)
      ? true
      : message;
  }
  
  function isDateInLastDays(
    value: any,
    days: number,
    message: string = "is not in the last days"
  ) {
    return new Date(value) > new Date(Date.now() - days * 24 * 60 * 60 * 1000)
      ? true
      : message;
  }
  
  function isDateInLastMonths(
    value: any,
    months: number,
    message: string = "is not in the last months"
  ) {
    return new Date(value) >
      new Date(Date.now() - months * 30 * 24 * 60 * 60 * 1000)
      ? true
      : message;
  }
  
  function isDateInLastYears(
    value: any,
    years: number,
    message: string = "is not in the last years"
  ) {
    return new Date(value) >
      new Date(Date.now() - years * 365 * 24 * 60 * 60 * 1000)
      ? true
      : message;
  }
  
  function isAStrongPassword(
    value: any,
    message: string = "password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character"
  ) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
      value
    )
      ? true
      : message;
  }
  
  function isAValidUsername(
    value: any,
    message: string = "is not a valid username"
  ) {
    return /^[a-zA-Z0-9_-]{3,20}$/.test(value) ? true : message;
  }
  

  function validate<T>(obj: { [K in keyof T]?: (string | true)[] }): true |{ [K in keyof T]?: (string | true)[] } {
    return (
      Object.keys(obj).every((key) =>
        //@ts-ignore
        obj[key].every((value: any) => value === true)
      ) || Object.keys(obj).filter((key) => obj[key].some((value: any) => value !== true)).reduce((acc, key) => {
        acc[key] = obj[key];
        return acc;
      }, {})
    );
  }
  const state = {
    email: "test@test.com",
    count: "12123",
    address: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
    country: "USA",
    phone: "1234567890",
    fax: "1234567890",
  };
  
  const result = validate<typeof state>({email: [isEmail(state.email)], count: [isValidNumber(state.count)]});
  if (result === true) {
    console.log("Validation passed");
  } else {;
  }
