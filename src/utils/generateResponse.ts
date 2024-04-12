type ResponsePayload = {
  data: unknown;
  message: string;
};

export const generateResponse = (
  message: string,
  data?: unknown
): ResponsePayload => {
  let _data = null;

  if (data) {
    _data = data;
  }

  return {
    message,
    data: _data,
  };
};

export const generateErrorResponse = (
  message: string,
  status: string,
  data?: unknown
) => {
  let _data = null;
  if (data) {
    _data = data;
  }

  return {
    message,
    status,
    data: _data,
  };
};
