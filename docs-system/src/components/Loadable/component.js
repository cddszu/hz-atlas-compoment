import React from 'react'
import Loadable from 'react-loadable'
const Loading = (props) => {
  if (props.isLoading) {
    if (props.timedOut) {
      return <div>Loader timed out!</div>;
    } else if (props.pastDelay) {
      return <div>Loading...</div>;
    } else {
      return null;
    }
  } else if (props.error) {
    return <div>Error! Component failed to load</div>;
  } else {
    return null;
  }
}

export default (Component) => {
  return Loadable({
    loader: () => Component,
    loading: Loading,
  })
}
