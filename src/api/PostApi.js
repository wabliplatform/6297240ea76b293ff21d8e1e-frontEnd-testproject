/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import Post from '../model/Post';

/**
* Post service.
* @module api/PostApi
* @version 1.0.0
*/
export default class PostApi {

    /**
    * Constructs a new PostApi. 
    * @alias module:api/PostApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the createpost operation.
     * @callback module:api/PostApi~createpostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Creates the data
     * @param {module:model/Post} post data to be created
     * @param {module:api/PostApi~createpostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Post}
     */
    createpost(post, callback) {
      let postBody = post;
      // verify the required parameter 'post' is set
      if (post === undefined || post === null) {
        throw new Error("Missing the required parameter 'post' when calling createpost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Post;
      return this.apiClient.callApi(
        '/post', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the deletepost operation.
     * @callback module:api/PostApi~deletepostCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete the element
     * @param {String} postId the Id parameter
     * @param {module:api/PostApi~deletepostCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deletepost(postId, callback) {
      let postBody = null;
      // verify the required parameter 'postId' is set
      if (postId === undefined || postId === null) {
        throw new Error("Missing the required parameter 'postId' when calling deletepost");
      }

      let pathParams = {
        'postId': postId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/post/{postId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllpost operation.
     * @callback module:api/PostApi~getAllpostCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Post>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all the data
     * @param {module:api/PostApi~getAllpostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Post>}
     */
    getAllpost(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [Post];
      return this.apiClient.callApi(
        '/post/getAll', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the getpost operation.
     * @callback module:api/PostApi~getpostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the element
     * @param {String} postId the Id parameter
     * @param {module:api/PostApi~getpostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Post}
     */
    getpost(postId, callback) {
      let postBody = null;
      // verify the required parameter 'postId' is set
      if (postId === undefined || postId === null) {
        throw new Error("Missing the required parameter 'postId' when calling getpost");
      }

      let pathParams = {
        'postId': postId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Post;
      return this.apiClient.callApi(
        '/post/{postId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the updatepost operation.
     * @callback module:api/PostApi~updatepostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Post} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the element
     * @param {String} postId the Id parameter
     * @param {Object} opts Optional parameters
     * @param {module:model/Post} opts.post data to be updated
     * @param {module:api/PostApi~updatepostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Post}
     */
    updatepost(postId, opts, callback) {
      opts = opts || {};
      let postBody = opts['post'];
      // verify the required parameter 'postId' is set
      if (postId === undefined || postId === null) {
        throw new Error("Missing the required parameter 'postId' when calling updatepost");
      }

      let pathParams = {
        'postId': postId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = Post;
      return this.apiClient.callApi(
        '/post/{postId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
