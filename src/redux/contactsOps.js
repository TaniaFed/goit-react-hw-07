import axios from "axios";
import { createAsyncThunk} from '@reduxjs/toolkit'

axios.defaults.baseURL = "https://67fb12f68ee14a542629316b.mockapi.io";

export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const response = await axios.get('/contacts');
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})

export const addContact = createAsyncThunk('contacts/addContact', async ({name, number}, thunkAPI) => {
    try {
        const response = await axios.post('/contacts', {name, number})
        return response.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})
    
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (contactId, thunkAPI) => {
    try {
        await axios.delete(`/contacts/${contactId}`)
        return contactId;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
    
})   

// export const filteredContacts = createAsyncThunk('filters/filteredContacts', async (value, thunkAPI) => {
//     try {
//         const response = await axios.get(`/contacts?name=${value}`)
//         return response.data;
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// })


