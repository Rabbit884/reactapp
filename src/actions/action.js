import fetch from 'isomorphic-fetch';

export const REQUEST_POSTS = 'REQUEST_POSTS';
function requestPosts(reddit) {
  return {
    type: REQUEST_POSTS,
    reddit
  };
}

export const RECEIVE_POSTS = 'RECEIVE_POSTS'
function receivePosts(reddit, json) {
  return {
    type: RECEIVE_POSTS,
    reddit,
    posts: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  };
}

function fetchPosts(reddit) {
  return dispatch => {
    dispatch(requestPosts(reddit));
    return fetch(`http://localhost:9000/api/test`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(reddit, json)));
  };
}

function shouldFetchPosts(state, reddit) {
  const posts = state.postsByReddit[reddit];
  if (!posts) {
    return true;
  } else if (posts.isFetching) {
    return false;
  } else {
    return posts.didInvalidate;
  }
}

export function fetchPostsIfNeeded(reddit) {

  // Note: この関数が返すfunctionは、次にdispatchする関数を決めるgetState()も受け取る。
  // Redux ThunkミドルウェアがdispatchとgetStateを渡す。

  // キャッシュしている値が既にあるのであれば、
  // ネットワークリクエストを避けるのに使える。

  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), reddit)) {
      // thunkからthunkを呼び出せる！
      return dispatch(fetchPosts(reddit));
    } else {
      // 下記コードを呼び、wait forには何もないことを知らせる
      return Promise.resolve();
    }
  };
}