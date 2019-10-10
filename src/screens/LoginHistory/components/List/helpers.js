import { AndroidPhone, Laptop } from '../../../../components/icons';

export function iconHelper(name) {
  switch (name) {
    case 'Android':
      return AndroidPhone;
    case 'Mac OS':
      return Laptop;
    default:
      return Laptop;
  }
}
