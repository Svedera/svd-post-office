export class BaseResponse<T> {
  success: boolean;
  message: string | null;
  value: T | null;
  validationErrors: string[] | null;

  constructor(
    success: boolean,
    message: string | null = null,
    value: T | null,
    validationErrors: string[] | null = null) {

    this.value = value;
    this.success = success;
    this.message = message;
    this.validationErrors = validationErrors;
  }
}
