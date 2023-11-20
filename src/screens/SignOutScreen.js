import React, { useState, useEffect } from 'react';
import { View, } from 'react-native';

import { useAuth } from '../contexts/auth';

const SignOutScreen = ({ navigation }) => {
  const { signOut } = useAuth();

  useEffect(() => {
    console.log('---------- entrou no logout --------')

    signOut();
  }, [])

  return (<View></View>);};

export default SignOutScreen;

