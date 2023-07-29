import { KEY_LS } from '../data';

function checkTypeView(): string {
  const value = localStorage.getItem(KEY_LS) || 'garage';

  return value;
}

export default checkTypeView;
