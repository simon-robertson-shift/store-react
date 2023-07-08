import type {
    Reactive,
    ReactiveActions,
    ReactiveState,
    ReactiveStateReceiver,
    ReactiveStateSelector
} from '@nomemo/reactive/types'

import { useEffect, useState } from 'react'

/** */
export const useReactiveState = <S extends ReactiveState, T>(
    reactive: Reactive<ReactiveActions, S>,
    selector: ReactiveStateSelector<S, T>
): T => {
    const [value, setValue] = useState(() => selector(reactive.getState()))

    useEffect(() => {
        const receiver: ReactiveStateReceiver<S> = (state) => {
            setValue(selector(state))
        }

        reactive.connect(receiver)

        return () => {
            reactive.disconnect(receiver)
        }
    }, [])

    return value
}
