import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import * as loadingActions from "../actions/loader";
import { connect } from "react-redux";

const Example = props => {
  useEffect(() => {
    someFunction(props);
  }, []);

  const loading = () => {
    if (props.isLoading) {
      return <div>Esta cargando</div>;
    }
  };

  return (
    <div>
      <h1>Este es un componente ejemplo</h1>
      {loading()}
      <button
        type="button"
        onClick={() => {
          someFunction(props);
        }}
      >
        Cargar
      </button>
    </div>
  );
};

const someFunction = props => {
  const promise = new Promise((resolve, reject) => {
    props.actions.loading();
    setTimeout(() => {
      resolve();
    }, 4000);
  });

  promise.then(() => {
    props.actions.loadingSuccess();
  });
};

const mapStateToProps = state => {
  return {
    isLoading: state.loading.isLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...loadingActions }, dispatch)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
