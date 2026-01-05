import z from 'zod';

z.config({
  customError: (iss) => {
    switch (iss.code) {
      case 'too_small':
        if (iss.minimum === 1) {
          return 'This field is required';
        }

        return `Minimum length is ${iss.minimum}`;
      case 'too_big':
        return `Maximum length is ${iss.maximum}`;
      default:
        return 'Unknown error';
    }
  },
});
