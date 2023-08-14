import { KEY_LS } from '../constants';

function getTypeView(): string {
  const value = localStorage.getItem(KEY_LS) || 'garage';

  return value;
}

export default getTypeView;
