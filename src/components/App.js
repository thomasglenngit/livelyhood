import React from 'react';
// import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as c from '../actions/ActionTypes';
import * as a from '../actions/index';
import { withFirestore } from 'react-redux-firebase';
import Header from './Header'
import NeighborList from './NeighborList';
import NeighborDetails from './NeighborDetails';
import NewNeighborForm from './NewNeighborForm';
import EditNeighborForm from './EditNeighborForm';
import DeleteConfirm from './DeleteConfirm';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';


class App extends React.Component {

  constructor(props) {
    super(props);
  }
  // functions here...
  handleChangingSelectedNeighbor = (id) => {
    console.log(id);
    const { dispatch } = this.props;
    const action = a.neighborDetails(id);
    dispatch(action);
  }

  returnHome = () => {
    const { dispatch } = this.props;
    const action = a.homeList();
    dispatch(action);
  }

  handleClickingEdit = (id) => {
    const { dispatch } = this.props;
    const action = a.editForm(id);
    dispatch(action);
  }

  handleClickingDelete = (id) => {
    console.log(id);
    const { dispatch } = this.props;
    const action = a.deleteNeighbor(id);
    dispatch(action);
  }

  handleDeletingNeighbor = (id) => {
    const { dispatch } = this.props;
    this.props.firestore.delete({ collection: 'neighbors', doc: id });
    const action = a.homeList();
    dispatch(action);
  }

  render() {
    // Handle determing what to display:
    let displayComponent;
    // let buttonText;
    console.log(this.props.displayStateReducer.display);
    console.log(this.props.displayStateReducer.selectedNeighbor);
    if (this.props.displayStateReducer.display === c.NEIGHBOR_LIST) {
      displayComponent = <NeighborList onNeighborSelection={this.handleChangingSelectedNeighbor} />
    } else if (this.props.displayStateReducer.display === c.NEIGHBOR_DETAILS) {

      displayComponent = <NeighborDetails onClickingEdit={this.handleClickingEdit} onClickingDelete={this.handleClickingDelete} />
    } else if (this.props.displayStateReducer.display === c.NEW_FORM) {
      displayComponent = <NewNeighborForm onNewNeighborCreation={this.returnHome} />
    } else if (this.props.displayStateReducer.display === c.EDIT_FORM) {
      displayComponent = <EditNeighborForm selectedNeighbor={this.props.displayStateReducer.selectedNeighbor} onEditNeighbor={this.returnHome} />
    } else if (this.props.displayStateReducer.display === c.DELETE_NEIGHBOR) {
      displayComponent = <DeleteConfirm selectedNeighbor={this.props.displayStateReducer.selectedNeighbor} onDeleteNeighbor={this.returnHome} onDeleteForReals={this.handleDeletingNeighbor} />
    }
    console.log(displayComponent)
    return (
      <React.Fragment>
        <Container>
          <Header />
          <CardColumns>
          {displayComponent}
          </CardColumns>
          <Footer />
        </Container>
      </React.Fragment>
    )
  }
}

App.propTypes = {
  display: PropTypes.object,
  selectedNeighbor: PropTypes.string,
  buttonText: PropTypes.func
}

const mapStateToProps = state => {
  return {
    displayStateReducer: state.displayStateReducer,
    selectedNeighbor: state.selectedNeighbor,
  }
}

App = connect(mapStateToProps)(App);

export default withFirestore(App);