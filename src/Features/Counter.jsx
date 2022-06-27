import { createReducer, createAction } from '@reduxjs/toolkit'

const initialState = {
    counter: 0,
}

export const plus = createAction('plus')
export const minus = createAction('minus')
export const reset = createAction('reset')

const counterReducer = createReducer(initialState, builder => {
    builder.addCase(plus, (state) => {
        state.counter += 1
    })
    builder.addCase(minus, (state) => {
        state.counter -= 1
    })
    builder.addCase(reset, (state) => {
        state.counter *= 0
    })
})

export default counterReducer