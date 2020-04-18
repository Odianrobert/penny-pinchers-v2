import axios from "axios";

export default {
  // Gets all posts
  createUser: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:7001/user',
        data: postdata
      })

  },
  // Gets the post with the given id
  login: function(postdata) {
    return axios({
        method: 'post',
        headers: { 'content-type': 'application/json' },
        url: 'http://localhost:7001/api/login',
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
        url: 'http://localhost:7001/api/user',
        data: postdata
      })

  }
};