import React from 'react';
// import './App.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as c from '../actions/ActionTypes';
import * as a from '../actions/index';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import Header from './Header'
import NeighborList from './NeighborList';
import NeighborDetails from './NeighborDetails';
import NewNeighborForm from './NewNeighborForm';
import EditNeighborForm from './EditNeighborForm';
import DeleteConfirm from './DeleteConfirm';
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import MapContainer from './Loc';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';
// import { BrowserRouter, Route, Link } from "react-router-dom";
import './App.css';

const Home = () => <span>Home</span>;

const About = () => <span>About</span>

const Users = () => <span>Users</span>

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
    // const auth = this.props.firebase.auth();
    // if (!isLoaded(auth)) {
    //   return (
    //     <React.Fragment>
    //       <h1>Loading...</h1>
    //     </React.Fragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser == null)) {
    //   return (
    //     <React.Fragment>
    //       <h1>You must be signed in to volunteer.</h1>
    //     </React.Fragment>
    //   )
    // }
    // if ((isLoaded(auth)) && (auth.currentUser != null)) {
      // Handle determing what to display:
      let displayComponent;
      // let buttonText;
      console.log(this.props.displayStateReducer.display);
      console.log(this.props.displayStateReducer.selectedNeighbor);
      if (this.props.displayStateReducer.display === c.NEIGHBOR_LIST) {
        displayComponent = <NeighborList onNeighborSelection={this.handleChangingSelectedNeighbor} />
      } else if (this.props.displayStateReducer.display === c.NEIGHBOR_DETAILS) {

        displayComponent = <NeighborDetails onClickingEdit={this.handleClickingEdit} onClickingDelete={this.handleClickingDelete}/>
      } else if (this.props.displayStateReducer.display === c.NEW_FORM) {
        displayComponent = <NewNeighborForm onNewNeighborCreation={this.returnHome} />
      } else if (this.props.displayStateReducer.display === c.EDIT_FORM) {
        displayComponent = <EditNeighborForm selectedNeighbor={this.props.displayStateReducer.selectedNeighbor} onEditNeighbor={this.returnHome} />
      } else if (this.props.displayStateReducer.display === c.DELETE_NEIGHBOR) {
        displayComponent = <DeleteConfirm selectedNeighbor={this.props.displayStateReducer.selectedNeighbor} onDeleteNeighbor={this.returnHome} onDeleteForReals={this.handleDeletingNeighbor} />
      }
      const bodyStyle = {
        // backgroundColor: 'black',
        color: 'Black',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: 'green',
        
      }
      console.log(displayComponent)
      return (
        <React.Fragment>
            <Header />
            <Container fluid style={bodyStyle}>
            <MemoryRouter>
            <h1 className="header">Welcome To Your Neighborhood</h1>
          <h2>
          
          {/* Current Page is{' '} */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </h2>
        <h2>
          {/* Navigate to{' '} */}
          <ButtonToolbar className="custom-btn-toolbar">
            <LinkContainer to="/">
              <Button>Home</Button>
            </LinkContainer>
            <LinkContainer to="/about">
              <Button>About</Button>
            </LinkContainer>
            <LinkContainer to="/users">
              <Button>Users</Button>
            </LinkContainer>
          </ButtonToolbar>
        </h2>
            
            <CardColumns>
              {displayComponent}
              
            </CardColumns>
            <MapContainer />
            {/* <Footer /> */}
          
          </MemoryRouter>
          </Container>
        </React.Fragment>
      )
    // }
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