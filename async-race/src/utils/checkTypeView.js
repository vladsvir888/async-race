import { KEY_LS } from '../data';

function checkTypeView() {
  const value = localStorage.getItem(KEY_LS) || 'garage';

  return value;
}

export default checkTypeView;
