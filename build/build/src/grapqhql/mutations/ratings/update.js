'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

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
        id: {
            name: 'ID',
            type: new _graphql.GraphQLNonNull(_graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_rating.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _ratings2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (data) {
            return _ratings2.default.findById(data.id).exec();
        }).catch(function (err) {
            return new Error('Couldnt upddate rating data', err);
        });
    }
};