const { Validator } = require('@chainlink/external-adapter')
const axios = require('axios')
const bigInt = require('big-integer')

const customParams = {}

const call_drand = async (input, callback) => {

    // initialize validator

    const validator = new Validator(callback, input, customParams)
    const jobRunId = validator.validated.id

    // latest round from drand.love

    await axios.get('https://api.drand.sh/public/latest')
        .then(res => {

            callback(200, {
                "jobRunID": jobRunId,
                "data": bigInt(res.data.randomness, 16).toString()
            })
        })

}

module.exports.drand_ea = (event, context, callback) => {
    call_drand(JSON.parse(event.body), (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,
            body: JSON.stringify(data),
            isBase64Encoded: false
        })
    })
}
