import {configureStore} from '@reduxjs/toolkit'
import CartSlice from './slices/CartSlice'
import SearchSlice from './slices/SearchSlice'

const Store = configureStore({
    reducer: {
        cart: CartSlice,
        search: SearchSlice
    }
})

export default Store