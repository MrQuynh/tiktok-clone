import { useContext, useSyncExternalStore } from 'react';
import { StoreContext } from '~/store';

const useStore = () => useContext(StoreContext);

export default useStore;
