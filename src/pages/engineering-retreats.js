import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imagePatternDots from '../assets/images/patterns/dots.png';
import { Header, Footer, Drops } from '../components';
import SignUp from '../containers/SignUp';
import { TextField, Button } from '../components/forms';
import Gallery from '../components/common/Gallery';

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column'
  },

  // MAIN
  main: {
    flex: '1',
    '& h1': {
      marginTop: 0,
      fontSize: 20
    }
  },
  mainContent: {
    paddingTop: 20,
    margin: [0, 20]
  },
  leftContent: {
    maxWidth: '100%'
  },
  formContainer: {
    marginTop: 60
  },
  input: {
    marginBottom: 20
  },
  inputQuestion: {
    minHeight: 90,
    paddingTop: 10,
    marginBottom: 20
  },
  textArea: {
    borderBottomWidth: 0,
    minHeight: 180,
    paddingTop: 10
  },
  gallery: {
    marginTop: 40
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    position: 'relative',
    marginTop: 0
  },
  footerDrops: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    main: {
      '& h1': {
        fontSize: 32
      }
    },
    mainContent: {
      paddingTop: 120,
      margin: [0, 10]
    },
    leftContent: {
      maxWidth: 550
    },
    formContainer: {
      marginTop: 80
    },
    gallery: {
      marginTop: 0
    },

    // FOOTER
    footer: {
      marginTop: 120
    },
    footerDrops: {
      display: 'block'
    }
  }
});

const EngineeringRetreatsPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Engineering Retreats | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className="container">
          <div className={cx(classes.mainContent, 'row')}>
            <div className="col-xs-12 col-sm-8">
              <div className={classes.leftContent}>
                <h1>
                  <div>Offsite Retreats to</div>
                  <span className="text-inverted background-secondary">
                    &nbsp;Supercharge your Engineers&nbsp;
                  </span>
                </h1>
              </div>
              <div className={classes.leftContent}>
                <p>
                  If you think that retreats are only for senior management, or
                  you just don’t believe that they provide demonstrable value,
                  then you haven’t heard of React Retreat.
                </p>
                <p>
                  With React Retreat, we seamlessly blend our training and
                  consulting services with outings and activities to not only
                  solve your technical problems and train your team, but also to
                  bring your team closer together. That way your engineers can
                  level up their skills while forging a bond with their
                  colleagues and managers.
                </p>
                <p>
                  Experience the most productive fun you’ve ever had with React
                  Retreat.
                </p>
              </div>
              <div className={cx(classes.leftContent, classes.formContainer)}>
                <h1>
                  Tell us about your{' '}
                  <span className="text-inverted background-secondary">
                    &nbsp;Dream Retreat&nbsp;
                  </span>
                </h1>
                <div className="row">
                  <div className="col-sm-6 col-xs-12">
                    <TextField
                      className={classes.input}
                      palette="primary"
                      type="text"
                      placeholder="Name*"
                    />
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <TextField
                      className={classes.input}
                      palette="primary"
                      type="email"
                      placeholder="Email*"
                    />
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <TextField
                      className={classes.input}
                      palette="primary"
                      type="text"
                      placeholder="Company*"
                    />
                  </div>
                  <div className="col-sm-6 col-xs-12">
                    <TextField
                      className={classes.input}
                      palette="primary"
                      type="text"
                      placeholder="Phone*"
                    />
                  </div>
                  <div className="col-xs-12">
                    <TextField
                      isTextarea
                      palette="primary"
                      type="text"
                      placeholder="Question about something?"
                      fieldProps={{
                        className: classes.inputQuestion
                      }}
                    />
                  </div>
                  <div className="col-xs-12">
                    <TextField
                      isTextarea
                      palette="primary"
                      type="text"
                      placeholder="Question about something?"
                      fieldProps={{
                        className: classes.inputQuestion
                      }}
                    />
                  </div>
                  <div className="col-xs-12">
                    <TextField
                      isTextarea
                      palette="primary"
                      type="text"
                      placeholder="Question about something?"
                      fieldProps={{
                        className: classes.inputQuestion
                      }}
                    />
                  </div>
                  <div className="col-xs-12">
                    <TextField
                      isTextarea
                      palette="primary"
                      type="text"
                      placeholder="Message*"
                      fieldProps={{
                        className: classes.textArea
                      }}
                    />
                    <Button
                      showArrow
                      textAlign="left"
                      palette="text"
                      children="Submit"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={cx(classes.gallery, 'col-xs-12 col-sm-4')}>
              <Gallery />
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <div className={classes.footerDrops}>
          <Drops bottom />
        </div>
        <Footer footerContent={<SignUp />} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(EngineeringRetreatsPage);
