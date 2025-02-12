import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: JSON.parse(localStorage.getItem('cartItem')) || [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }) => {
			let index = state.value.findIndex(({ id }) => id === payload.id)
			if (index < 0) {
				state.value.push({ ...payload, amount: 1 })
			}
			localStorage.setItem('cartItem', JSON.stringify(state.value))
		},
		amountIncrement: (state, { payload }) => {
			let index = state.value.findIndex(({ id }) => id === payload.id)
			state.value = state.value.map((item, inx) =>
				index === inx ? { ...item, amount: item.amount + 1 } : item
			)
		},
		amountDecrement: (state, { payload }) => {
			let index = state.value.findIndex(({ id }) => id === payload.id)
			state.value = state.value.map((item, inx) =>
				index === inx ? { ...item, amount: item.amount - 1 } : item
			)
		},
		removeFromCart: (state, { payload }) => {
			state.value = state.value.filter(item => item.id !== payload)
		},
		clearCart: () => {},
	},
})

export const {
	addToCart,
	amountDecrement,
	amountIncrement,
	clearCart,
	removeFromCart,
} = cartSlice.actions

export default cartSlice.reducer
