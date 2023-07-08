import type { Store, StoreActions, StoreState, StoreStateReceiver, StoreStateSelector } from '@nomemo/store/types'
import { useEffect, useState } from 'react'

export const useStoreState = <S extends StoreState, T>(
    store: Store<StoreActions, S>,
    selector: StoreStateSelector<S, T>
): T => {
    const [value, setValue] = useState(() => selector(store.getState()))

    useEffect(() => {
        const receiver: StoreStateReceiver<S> = (state) => {
            setValue(selector(state))
        }

        store.connect(receiver)

        return () => {
            store.disconnect(receiver)
        }
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

    return value
}
