const middleware = {}

middleware['admin'] = require('..\\middleware\\admin.js')
middleware['admin'] = middleware['admin'].default || middleware['admin']

middleware['clearValidationErrors'] = require('..\\middleware\\clearValidationErrors.js')
middleware['clearValidationErrors'] = middleware['clearValidationErrors'].default || middleware['clearValidationErrors']

middleware['doctor'] = require('..\\middleware\\doctor.js')
middleware['doctor'] = middleware['doctor'].default || middleware['doctor']

middleware['guest'] = require('..\\middleware\\guest.js')
middleware['guest'] = middleware['guest'].default || middleware['guest']

export default middleware
