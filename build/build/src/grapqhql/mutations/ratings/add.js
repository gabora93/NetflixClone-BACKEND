'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _rating = require('../../types/rating');

var _ratings = require('../../../schemas/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    type: _rating.RatingType,
    args: {
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_rating.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        var Rating = new _ratings2.default(params.data);
        var newRating = Rating.save();
        if (!newRating) {
            throw new Error('Error adding Rating');
        }
        return newRating;
    }
};