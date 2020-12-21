import Vue from 'vue'
import ServicesConst from '@/services/ServicesConst.js'
const actions = {
  // table data
  getItems ({ commit, getters, dispatch }) {
    commit('setLoadingStatus', true)
    ServicesConst.myApiClient.get(getters.path('i'))
      .then((response) => {
        // console.log(response.data.users)
        commit('setItems', response.data.users)
        commit('setLoadingStatus', false)
      }, (error) => {
        dispatch('openAlertBox', [
          'alertError',
          error.statusText,
        ], { root: true })
      })
  },
  getItemsServerSide ({ commit, getters, dispatch }, [params]) {
    return new Promise((resolve, reject) => {
      commit('setLoadingStatus', true)
      ServicesConst.myApiClient.post(`${getters.path('i')}/search`, params)
        .then((response) => {
          commit('setItemsServerSide', response.body)
          resolve()
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText,
          ], { root: true })
          reject(error)
        })
    })
  },
  // item details
  getItem ({ commit, getters, dispatch }, [id]) {
    return new Promise((resolve, reject) => {
      commit('setDetailsLoader', true)
      ServicesConst.myApiClient.get(`${getters.path('sh')}/${id}`)
        .then((response) => {
          commit('setItem', response.body)
          commit('setDetailsLoader', false)
          resolve()
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText,
          ], { root: true })
          reject(error)
        })
    })
  },
  updateItem ({
    getters, dispatch,
  }, [
    id,
    params,
    successText,
    errorText,
  ]) {
    return new Promise((resolve, reject) => {
        ServicesConst.myApiClient.put(`${getters.path('u')}/${id}`, params)
        .then((response) => {
          if (response.body.status === 0) {
            dispatch('openAlertBox', [
              'alertSuccess',
              successText,
            ], { root: true })
            dispatch('runItemsViewRefreshing')
            resolve()
          } else if (response.body.status === -1) {
            dispatch('openAlertBox', [
              'alertError',
              response.body.msg,
            ], { root: true })
          } else if (response.body.status === -2) {
            dispatch('openAlertBox', [
              'alertValidationError',
              response.body.msg,
            ], { root: true })
          }
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            errorText,
          ], { root: true })
          reject(error)
        })
    })
  },
  storeItem ({
    commit, state, getters, dispatch,
  }, [
    params,
    successText,
    errorText,
  ]) {
    return new Promise((resolve, reject) => {
      ServicesConst.myApiClient.post(getters.path('st'), params)
        .then((response) => {
          if (response.body.status === 0) {
            dispatch('openAlertBox', [
              'alertSuccess',
              successText,
            ], { root: true })
            dispatch('runItemsViewRefreshing')
            resolve()
          } else if (response.body.status === -1) {
            dispatch('openAlertBox', [
              'alertError',
              response.body.msg,
            ], { root: true })
          } else if (response.body.status === -2) {
            dispatch('openAlertBox', [
              'alertValidationError',
              response.body.msg,
            ], { root: true })
          }
          if (state.createdElement.mode === 'inform') {
            console.log('response id', response.body.id)
            commit('setCreatedItemStatus', [
              true,
              response.body.id,
            ])
          }
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            errorText,
          ], { root: true })
          reject(error)
        })
    })
  },
  deleteItem ({
    getters, dispatch,
  }, [
    id,
    successText,
    errorText,
  ]) {
    ServicesConst.myApiClient.delete(`${getters.path('d')}/${id}`)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText,
        ], { root: true })
        dispatch('runItemsViewRefreshing')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  mulitipleItemsUpdate ({
    getters, dispatch,
  }, [
    params,
    successText,
    errorText,
  ]) {
    ServicesConst.myApiClient.post(`${getters.path('mu')}/multiple-update`, params)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText,
        ], { root: true })
        dispatch('runItemsViewRefreshing')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  mulitipleItemsDelete ({
    getters, dispatch,
  }, [
    ids,
    successText,
    errorText,
  ]) {
    ServicesConst.myApiClient.post(`${getters.path('md')}/multiple-delete`, ids)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText,
        ], { root: true })
        dispatch('runItemsViewRefreshing')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  // item elements
  getItemElements ({ commit, state }) {
    const url = state.itemElements.url.replace('{id}', state.itemElements.id)
    ServicesConst.myApiClient.get(url)
      .then(response => commit('setItemElements', response.body))
  },
  addItemElement ({
    dispatch, state,
  }, [
    params,
    successText,
    errorText,
  ]) {
    ServicesConst.myApiClient.post(state.itemElements.controller, params)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText,
        ], { root: true })
        dispatch('getItemElements')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  removeItemElement ({
    dispatch, state,
  }, [
    id,
    successText,
    errorText,
  ]) {
    ServicesConst.myApiClient.delete(`${state.itemElements.controller}/${id}`)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText,
        ], { root: true })
        dispatch('getItemElements')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  addManyItemElements ({
    dispatch, state,
  }, [
    params,
    successText,
    errorText,
  ]) {
    ServicesConst.myApiClient.post(`${state.itemElements.controller}/multiple-add`, params)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText,
        ], { root: true })
        dispatch('getItemElements')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  removeManyItemElements ({
    dispatch, state,
  }, [
    ids,
    successText,
    errorText,
  ]) {
    ServicesConst.myApiClient.post(`${state.itemElements.controller}/multiple-delete`, ids)
      .then(() => {
        dispatch('openAlertBox', [
          'alertSuccess',
          successText,
        ], { root: true })
        dispatch('getItemElements')
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  // extented details
  getItemDetails ({ commit, getters, dispatch }, [id]) {
    return new Promise((resolve, reject) => {
      commit('setDetailsLoader', true)
      ServicesConst.myApiClient.get(`${getters.path('sh')}/${id}`)
        .then((response) => {
          commit('itemDetails', response.body)
          commit('setDetailsLoader', false)
          resolve()
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText,
          ], { root: true })
          reject(error)
        })
    })
  },
  updateItemDetail ({
    dispatch, state, getters,
  }, [
    id,
    params,
    successText,
  ]) {
    ServicesConst.myApiClient.put(`${getters.path('u')}/${id}`, params)
      .then((response) => {
        if (response.body.status === 0) {
          dispatch('openAlertBox', [
            'alertSuccess',
            successText,
          ], { root: true })
        } else if (response.body.status === -1) {
          dispatch('openAlertBox', [
            'alertError',
            response.body.msg,
          ], { root: true })
        } else if (response.body.status === -2) {
          dispatch('openAlertBox', [
            'alertValidationError',
            response.body.msg,
          ], { root: true })
        }
        dispatch('getItemDetails', [state.item[state.itemIdColumn]])
      }, (error) => {
        dispatch('openAlertBox', [
          'alertError',
          error.statusText,
        ], { root: true })
      })
  },
  // child details
  updateChild ({
    dispatch, state,
  }, [
    id,
    params,
    successText,
    path,
  ]) {
    return new Promise((resolve, reject) => {
      ServicesConst.myApiClient.put(`${path}/${id}`, params)
        .then((response) => {
          if (response.body.status === 0) {
            dispatch('openAlertBox', [
              'alertSuccess',
              successText,
            ], { root: true })
            resolve()
          } else if (response.body.status === -1) {
            dispatch('openAlertBox', [
              'alertError',
              response.body.msg,
            ], { root: true })
          } else if (response.body.status === -2) {
            dispatch('openAlertBox', [
              'alertValidationError',
              response.body.msg,
            ], { root: true })
          }
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText,
          ], { root: true })
          reject(error)
        })
    })
  },
  deleteChild ({
    dispatch, state,
  }, [
    id,
    successText,
    errorText,
    path,
  ]) {
    ServicesConst.myApiClient.delete(`${path}/${id}`)
      .then((response) => {
        if (response.body.status === 0) {
          dispatch('openAlertBox', [
            'alertSuccess',
            successText,
          ], { root: true })
        } else if (response.body.status === -1) {
          dispatch('openAlertBox', [
            'alertError',
            response.body.msg,
          ], { root: true })
        } else if (response.body.status === -2) {
          dispatch('openAlertBox', [
            'alertValidationError',
            response.body.msg,
          ], { root: true })
        }
        dispatch('getItemDetails', [state.item[state.itemIdColumn]])
      }, () => {
        dispatch('openAlertBox', [
          'alertError',
          errorText,
        ], { root: true })
      })
  },
  storeChild ({
    dispatch, state,
  }, [
    params,
    successText,
    path,
  ]) {
    return new Promise((resolve, reject) => {
      ServicesConst.myApiClient.post(path, params)
        .then((response) => {
          if (response.body.status === 0) {
            dispatch('openAlertBox', [
              'alertSuccess',
              successText,
            ], { root: true })
            resolve()
          } else if (response.body.status === -1) {
            dispatch('openAlertBox', [
              'alertError',
              response.body.msg,
            ], { root: true })
          } else if (response.body.status === -2) {
            dispatch('openAlertBox', [
              'alertValidationError',
              response.body.msg,
            ], { root: true })
          }
          dispatch('getItemDetails', [state.item[state.itemIdColumn]])
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText,
          ], { root: true })
          reject(error)
        })
    })
  },
  getChild ({ commit, dispatch }, [
    id,
    path,
    childItemName,
  ]) {
    return new Promise((resolve, reject) => {
      ServicesConst.myApiClient.get(`${path}/${id}`)
        .then((response) => {
          commit('setChild', [
            response.body,
            childItemName,
          ])
          resolve()
        }, (error) => {
          dispatch('openAlertBox', [
            'alertError',
            error.statusText,
          ], { root: true })
        })
    })
  },
  runItemsViewRefreshing ({ commit }) {
    commit('refreshTable', true)
    setTimeout(() => {
      commit('refreshTable', false)
    }, 2000)
  },
}

export default actions
