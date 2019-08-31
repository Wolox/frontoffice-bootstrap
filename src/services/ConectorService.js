import api from '~config/api';

import { data } from '~redux/Resource/data';

export const getList = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({ ok: true, data });
    }, 1000);
  });

// api.get(`/${resource}`, params);

export const getDetail = (resource, id) => api.get(`/${resource}/${id}`);

export const createResource = (resource, body) => api.post(`/${resource}`, body);

export const editResource = (resource, body) => api.put(`/${resource}/${body.id}`, body);

export const deleteResource = (resource, id) => api.delete(`/${resource}/${id}`);
