// import liraries
import React, { Component } from 'react';
import { View, StyleSheet, Button, ImageBackground } from 'react-native';
import { connect } from 'react-redux';// permite adornar el componente e integrarle la store y el dispatch
import SignUpForm from './Formas/SignUpForm';

// create a component
class SignUp extends Component {
  render() {
    console.log(this.props.numero);


    const { navigation } = this.props;
    return (

      <View style={styles.container}>
        <SignUpForm />
        <Button
          title="SignIn"
          onPress={() => {
            navigation.goBack();
          }}
        />

      </View>

    );
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: 16,

  },

});
// Pasa el state "reducerPrueba"
const mapStateToProps = state => ({
  numero: state.reducerPrueba,
});
// un dispatch tiene una llave type
const mapDispatchToProps = dispatch => ({
  aumentar: () => {
    dispatch({ type: 'AUMENTAR_REDUCER_PRUEBA' });
  },
});

// make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
