import axios from 'axios'

export const learnConfig =axios.create({
    baseURL:"https://learn.steyp.com/api/v1"
})