import { signUpRoute } from './signUpRoute';
import { logInRoute } from './logInRoute';
import { updateUserInfoRoute } from './updateUserInfoRoute';
import { testEmailRoute } from './testEmailRoute';
import { verifyEmailRoute } from './verifyEmailRoute';
import { testRoute } from './testRoute';

export const routes = [
    logInRoute,
    signUpRoute,
    updateUserInfoRoute,
    verifyEmailRoute,
    // testEmailRoute,
    testRoute,
];
