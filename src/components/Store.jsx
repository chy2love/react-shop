import { atom, useRecoilState } from 'recoil';
import fakeApi from './fakeApi';
export const themeState = atom({ key: 'themeState', default: 'dark' });
export const itemListState = atom({ key: 'itemListState', default: [] });
export const cartItemCountState = atom({
  key: 'cartItemCountState',
  default: 0,
});
function Store() {
  const [itemList, setItemList] = useRecoilState(itemListState);
  setItemList(fakeApi);
}
export default Store;
