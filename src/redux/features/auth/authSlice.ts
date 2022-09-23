import { createSlice } from '@reduxjs/toolkit'
import { User } from '@/models'

interface AuthState { 
  user: User | null
  message: string
  error: string
}

const initialState: AuthState = {
  user: null,
  message: '',
  error: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {}
})