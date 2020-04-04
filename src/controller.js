import axios from 'axios'


const home = async (req, res) => {
    return res.json({ success: true })
}


/**
 * 
 * @param {request} req 
 * @param {result} res 
 */
const stocks = async (req, res) => {
    try {
        const api = axios.create({
            baseURL: 'https://secure.selfwealth.com.au/api',
            widthCredentials: true,
            timeout: 60000,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Cache: 'no-cache',
                Cookie: req.headers.authorization
            }
        })

        const response = await api.get(req.body.url)
        
        if (response) {
            return res.json(response.data)
        }

        return res.status(400).json({
            error: 'Could not decode request: JSON parsing failed'
        })
    }
    catch (e) {
        console.log('Request Error => ', e)
        return res.status(400).json(e)
    }
}


/**
* POST full URL 
*
* @param {request} req 
* @param {result} res 
*/
const post = async (req, res) => {
    try {
        const api = axios.create({})
        const response = await api.post(req.headers.url, req.body)
        
        if (response) {
            return res.json(response.data)
        }

        return res.status(400).json({
            error: 'Could not decode request: JSON parsing failed'
        })
    }
    catch (e) {
        console.log('Request Error => ', e)
        return res.status(400).json(e)
    }
}


/**
* GET full URL 
*
* @param {request} req 
* @param {result} res 
*/
const get = async (req, res) => {
    try {
        const api = axios.create({})
        const response = await api.get(req.body.url)
        
        if (response) {
            return res.json(response.data)
        }

        return res.status(400).json({
            error: 'Could not decode request: JSON parsing failed'
        })
    }
    catch (e) {
        console.log('Request Error => ', e)
        return res.status(400).json(e)
    }
}


export const MainController = { home, stocks, post, get }
