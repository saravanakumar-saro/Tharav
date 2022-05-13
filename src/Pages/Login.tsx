import React from 'react';
// import axios from "./axios";
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

// import Css
import '../css/login.css';

// import widgets
import { TextField, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Checkbox } from '@material-ui/core';

interface IProps {}
interface IState {
  darkModeTheme: any;
  showPassword: any;
  reenterShowPassword: any;
  showLoginScreen: any;
  showSetNewPasswordScreen: any;
}
class Login extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
    props = {};
    this.state = {
      darkModeTheme: false,
      showPassword: false,
      reenterShowPassword: false,
      showLoginScreen: true,
      showSetNewPasswordScreen: false,
    };
  }
  componentDidMount() {}

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleMouseDownPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };
  handleClickShowPasswordReenter = () => {
    this.setState({ reenterShowPassword: !this.state.reenterShowPassword });
  };
  handleMouseDownPasswordReenter = () => {
    this.setState({ reenterShowPassword: !this.state.reenterShowPassword });
  };
  openSignUpScreen = () => {
    this.setState({ showLoginScreen: false });
  };
  openLoginScreen = () => {
    this.setState({ showLoginScreen: true });
    this.setState({ showSetNewPasswordScreen: false });
  };
  openForgetPasswordScreen = () => {
    this.setState({ showSetNewPasswordScreen: false });
    this.setState({ showLoginScreen: false });
  };
  render() {
    return (
      <div>
        <div className='loginBoxContent'>
          <div className='loginBox_inner'>
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
              <img
                style={{ width: '160px' }}
                alt='icon'
                src='/assets/Login/logo_icon.svg'
              />
            </div>
            {/* login  */}
            {this.state.showLoginScreen && (
              <>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '15px',
                    color: '#000000',
                    fontWeight: 'bold',
                  }}
                >
                  Login
                </div>
                <div
                  style={{
                    marginTop: '25px',
                    marginLeft: '12px',
                    marginRight: '12px',
                  }}
                >
                  <div
                    style={{
                      marginTop: '40px',
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                  >
                    <TextField
                      className='textFieldCss'
                      label=''
                      variant='outlined'
                      placeholder='Email'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img
                              style={{ width: '24px' }}
                              alt='icon'
                              src='/assets/Login/email_icon.svg'
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '25px',
                    marginLeft: '12px',
                    marginRight: '12px',
                  }}
                >
                  <div
                    style={{
                      marginTop: '5px',
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                  >
                    <TextField
                      className='textFieldCss'
                      label=''
                      variant='outlined'
                      placeholder='Password'
                      type={this.state.showPassword ? 'text' : 'password'}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img
                              style={{
                                width: '17px',
                              }}
                              alt='icon'
                              src='/assets/Login/password_icon.svg'
                            />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position='end'>
                            <IconButton
                              aria-label='toggle password visibility'
                              onClick={this.handleClickShowPassword}
                              onMouseDown={this.handleMouseDownPassword}
                            >
                              {this.state.showPassword ? (
                                <Visibility />
                              ) : (
                                <VisibilityOff />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '50px',
                    marginLeft: '12px',
                    marginRight: '12px',
                    textAlign: 'center',
                  }}
                >
                  <button
                    className='ActiveButtonColor'
                    style={{
                      width: '140px',
                      background:
                        'transparent linear-gradient(90deg, #1D54B6 0%, #437FEC 100%) 0% 0% no-repeat padding-box',
                      boxShadow: '0px 0px 10px #0000001A',
                      borderRadius: '40px',
                    }}
                  >
                    Login
                  </button>
                  <div
                    style={{
                      textAlign: 'center',
                      marginTop: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    <span style={{ fontSize: '12px' }}>New user?</span>
                    <span
                      className='loginLink'
                      style={{ marginLeft: '2px' }}
                      onClick={this.openSignUpScreen}
                    >
                      Register now
                    </span>
                  </div>
                </div>
              </>
            )}
            {/* sign up */}
            {!this.state.showLoginScreen && (
              <>
                <div
                  style={{
                    textAlign: 'center',
                    marginTop: '15px',
                    color: '#000000',
                    fontWeight: 'bold',
                  }}
                >
                  Registration
                </div>
                <div
                  style={{
                    marginTop: '18px',
                    marginLeft: '12px',
                    marginRight: '12px',
                  }}
                >
                  <Grid container alignItems='stretch'>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <div
                        style={{
                          marginTop: '25px',
                          marginRight: '8px',
                          marginLeft: '8px',
                        }}
                      >
                        <TextField
                          className='textFieldCss'
                          label=''
                          variant='outlined'
                          placeholder='First Name'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <img
                                  style={{ width: '18px' }}
                                  alt='icon'
                                  src='/assets/Login/user_icon.svg'
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                      <div
                        style={{
                          marginTop: '25px',
                          marginLeft: '8px',
                          marginRight: '8px',
                        }}
                      >
                        <TextField
                          className='textFieldCss'
                          label=''
                          variant='outlined'
                          placeholder='Last Name'
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position='start'>
                                <img
                                  style={{ width: '18px' }}
                                  alt='icon'
                                  src='/assets/Login/user_icon.svg'
                                />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div
                  style={{
                    marginTop: '25px',
                    marginLeft: '12px',
                    marginRight: '12px',
                  }}
                >
                  <div
                    style={{
                      marginTop: '5px',
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                  >
                    <TextField
                      className='textFieldCss'
                      label=''
                      variant='outlined'
                      placeholder='Email'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img
                              style={{ width: '24px' }}
                              alt='icon'
                              src='/assets/Login/email_icon.svg'
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '25px',
                    marginLeft: '12px',
                    marginRight: '12px',
                  }}
                >
                  <div
                    style={{
                      marginTop: '5px',
                      marginLeft: '8px',
                      marginRight: '8px',
                    }}
                  >
                    <TextField
                      className='textFieldCss'
                      label=''
                      variant='outlined'
                      placeholder='Company Name'
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position='start'>
                            <img
                              style={{ width: '24px' }}
                              alt='icon'
                              src='/assets/Login/company_icon.svg'
                            />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
                <div
                  style={{
                    marginTop: '50px',
                    marginLeft: '12px',
                    marginRight: '12px',
                    textAlign: 'center',
                  }}
                >
                  <button
                    className='ActiveButtonColor'
                    style={{
                      width: '140px',
                      background:
                        'transparent linear-gradient(90deg, #1D54B6 0%, #437FEC 100%) 0% 0% no-repeat padding-box',
                      boxShadow: '0px 0px 10px #0000001A',
                      borderRadius: '40px',
                    }}
                  >
                    Register
                  </button>
                  <div
                    style={{
                      textAlign: 'center',
                      marginTop: '15px',
                      fontWeight: 'bold',
                    }}
                  >
                    <span style={{ fontSize: '12px' }}>
                      Already registered?
                    </span>
                    <span
                      className='loginLink'
                      style={{ marginLeft: '2px' }}
                      onClick={this.openLoginScreen}
                    >
                      Log In
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
