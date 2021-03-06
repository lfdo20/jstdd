'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.searchPlaylists = exports.searchTracks = exports.searchArtist = exports.searchAlbum = exports.search = undefined;

var _config = require('./config');

var _utils = require('./utils');

/* global fetch */

var search = exports.search = function search(query, type) {
  return fetch(_config.API_URL + 'search?q=' + query + '&type=' + type).then(_utils.toJSON);
};

var searchAlbum = exports.searchAlbum = function searchAlbum(query) {
  return search(query, 'albums');
};

var searchArtist = exports.searchArtist = function searchArtist(query) {
  return search(query, 'artist');
};

var searchTracks = exports.searchTracks = function searchTracks(query) {
  return search(query, 'tracks');
};

var searchPlaylists = exports.searchPlaylists = function searchPlaylists(query) {
  return search(query, 'playlist');
};