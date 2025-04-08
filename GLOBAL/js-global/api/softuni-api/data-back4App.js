import * as api from './api.js';

const endpoints = {
    catalog: '/data/books?sortBy=_createdOn%20desc', // GET
    details: (itemId) => `/data/books/${itemId}`, // GET
    create: '/data/books', // POST
    update: (itemId) => `/data/books/${itemId}`, // PUT
    delete: (itemId) => `/data/books/${itemId}`, // DELETE
    profile: (userId) => `/data/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`, // GET
    like: '/data/likes', // POST / { bookId }
    total: (itemId) => `/data/likes?where=bookId%3D%22${itemId}%22&distinct=_ownerId&count`, // GET
    own: (itemId, userId) => `/data/likes?where=bookId%3D%22${itemId}%22%20and%20_ownerId%3D%22${userId}%22&count` // GET

};

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

// ###############################################
export async function getSearchResults(query) {
    return await api.get(endpoints.search(query));
}

// ###############################################
export async function sendLike(itemId) {
    return api.post(endpoints.like, { bookId: itemId });
}

export async function getTotalLikes(itemId) {
    return api.get(endpoints.total(itemId));
}

export async function getOwnLikes(itemId, userId) {
    return api.get(endpoints.own(itemId, userId));
}

// ###############################################
export async function getAllItems() {
    return await api.get(endpoints.catalog);
}

export async function getById(id) {
    return await api.get(endpoints.details(id));
}

export async function getProfile(userId) {
    return await api.get(endpoints.profile(userId));
}

export async function createItem(obj) {
    return await api.post(endpoints.create, obj);
}

export async function updateItem(id, obj) {
    return await api.put(endpoints.update(id), obj);
}

export async function deleteItem(id) {
    return await api.del(endpoints.delete(id));
}
