import axios from "axios";

export default {
  // Gets all posts
  createUser: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: '/user',
        data: postdata
      })

  },
  // Gets the post with the given id
  login: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: '/api/login',
        data: postdata
      })

  },
  // Deletes the post with the given id
  logout: function() {
    return axios.get("/logout");
  },
  // Saves a post to the database
 
  userGreeting: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: '/api/user',
        data: postdata
      })

  },

  budget: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: '/setBudget',
        data: postdata
      })
  },
  
  bills: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: '/setBills',
        data: postdata
      })
  },

  addBills: function(postdata) {
    return axios({
          method: 'post',
          headers: { 'content-type': 'application/json' },
          url: '/addBills',
          data: postdata
        })
    },
    recentBills: function(postdata) {
      return axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: '/recentBills',
            data: postdata
          })
    },

  getLeaders: function() {
    return axios({
      method: 'post',
      headers: { 'content-type': 'application/json' },
      url: `/getleaders`
    })
  }

};