import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_BACKEND_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`
    }
})

const resolve = async (promise) => {
    const resolved = {
        data: null,
        error: null
    }

    try {
        resolved.data = await promise;
    } catch (e) {
        resolved.error = e
    }

    return resolved
}

const login = async (userName, password) => {
    const loginBody = {
        auth: {
            userName, password
        }
    }
    return await resolve(axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, loginBody).then(res => res.data))
}

const signup = async (name, userName, password, email, phoneNumber) => {
    const userDetails = {
        user: {
            name,
            userName,
            password,
            email,
            phoneNumber
        }
    }
    return await resolve(axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`, userDetails).then(res => res.data))
}

const eventList = async () => {
    return await resolve(axios.get(`/api/events`))
}

const registerEvent = async (eventId) => {
    return await resolve(instance.get(`/api/events/${eventId}/register`).then(res => res.data));
}

export {
    login,
    signup,
    eventList,
    registerEvent
}