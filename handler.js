const { Validator } = require('@chainlink/external-adapter')
const web3 = require('web3')
const axios = require('axios')

const customParams = {}

const call_drand = (input, callback) => {

    // initialize validator

    const validator = new Validator(callback, input, customParams)
    const jobRunId = validator.validated.id

    // latest round from drand.love

    axios.get('https://api.drand.sh/public/latest')
        .then(res => {

            callback(200, {
                "jobRunID": jobRunId,
                "data": web3.utils.fromAscii(res)
            })
        })

}

module.exports.drand_handler = (event, context, callback) => {
    call_drand(JSON.parse(event.body), (statusCode, data) => {
        callback(null, {
            statusCode: statusCode,
            body: JSON.stringify(data),
            isBase64Encoded: false
        })
    })
}
