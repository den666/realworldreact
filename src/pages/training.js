import React from 'react';
import Helmet from 'react-helmet';
import withStyles from 'react-jss';
import cx from 'classnames';

import imageLetsChat from '../assets/images/messages/lets-chat.png';
import imagePatternDots from '../assets/images/patterns/dots.png';
import imageComprehensive from '../assets/images/training/comprehensive.png';
import imageBestPractices from '../assets/images/training/best-practices.png';
import imageRealWorld from '../assets/images/training/real-world.png';
import iimageProfessionalInstructors from '../assets/images/training/professional-instructors.png';
import clients from '../data/clients.json';

import { Header, Footer, Drops } from '../components';
import { Contact, SignUp, Team } from '../containers';

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
      marginTop: 0
    }
  },
  mainContainer: {
    padding: 20
  },
  mainContent: {},
  leftContent: {
    maxWidth: '100%'
  },
  trainings: {
    marginTop: 50
  },
  unitContent: {
    display: 'flex',
    marginTop: 40
  },
  trainingImage: {
    width: 60,
    '& img': {
      width: 60,
      marginTop: 5
    }
  },
  trainingContent: {
    flex: 1,
    paddingLeft: 20,
    '& h2': {
      marginTop: 0,
      fontSize: 16,
      marginBottom: 10
    },
    '& p': {
      fontSize: 14
    }
  },

  // CLIENTS
  client: {
    width: 100,
    height: 50
  },
  brand: {
    order: 3
  },
  andMore: {
    order: 3,
    textAlign: 'right',
    marginTop: -20,
    opacity: 0.4,
    fontSize: 14
  },
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  braceContainer: {
    order: 2
  },
  brace: {
    borderWidth: 1,
    borderStyle: 'solid',
    height: 25,
    borderColor: '#C7CACD',
    borderTopWidth: 1,
    borderBottomWidth: 0,
    position: 'relative',
    marginTop: 10,
    '&:after': {
      content: '""',
      position: 'absolute',
      top: -25,
      bottom: 'auto',
      left: '50%',
      width: 1,
      height: 25,
      backgroundColor: '#C7CACD'
    }
  },
  clientsFooter: {
    fontFamily: theme.typography.secondary,
    fontStyle: 'italic',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 40,
    order: 1
  },

  // TEAM
  team: {
    marginTop: 60,
    marginBottom: 20,
    padding: [0, 20]
  },

  // FOOTER
  footer: {
    backgroundColor: theme.palette.inverted.base,
    backgroundImage: `url(${imagePatternDots})`,
    position: 'relative',
    marginTop: 100
  },
  footerLetsChat: {
    position: 'absolute',
    top: -70,
    zIndex: 10,
    left: '50%',
    marginLeft: -10,
    '& img': {
      width: 100,
      height: 100
    }
  },
  footerDrops: {
    display: 'none'
  },

  // small +
  '@media screen and (min-width: 48em)': {
    // MAIN
    mainContainer: {
      paddingTop: 120
    },
    trainings: {
      marginTop: 80
    },
    leftContent: {
      maxWidth: 550
    },

    // CLIENTS
    brand: {
      order: 1
    },
    andMore: {
      order: 2
    },
    brace: {
      borderTopWidth: 0,
      borderBottomWidth: 1,
      '&:after': {
        top: 'auto',
        bottom: -25
      }
    },
    clientsFooter: {
      marginBottom: 20,
      marginTop: 40,
      order: 3
    },

    // TEAM
    team: {
      marginTop: 20
    },

    // FOOTER
    footer: {
      marginTop: 120
    },
    footerLetsChat: {
      top: -70,
      marginLeft: 120,
      '& img': {
        width: 150,
        height: 150
      }
    },
    footerDrops: {
      display: 'block'
    }
  }
});

const TrainingPage = ({ classes }) => (
  <div>
    <Helmet>
      <title>Training | Real World React</title>
    </Helmet>
    <div className={classes.root}>
      {/* HEADER */}
      <Header />

      {/* MAIN */}
      <div className={classes.main}>
        <div className={cx(classes.mainContainer, 'container')}>
          {/* INFORMATION */}
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <div className={classes.leftContent}>
                <h1>
                  <span className="text-inverted background-secondary">
                    &nbsp;Onsite Training&nbsp;
                  </span>{' '}
                  for your Engineers
                </h1>
                <p>
                  There’s more to learning a new technology than just reading
                  from the docs or watching video tutorials. You don’t just want
                  to learn fast -- you want to learn the best practices, tips,
                  and context that only comes from years of experience building
                  with and teaching the technologies you want to learn.
                </p>
              </div>
              <div className={cx(classes.trainings, classes.leftContent)}>
                <div className={classes.unitContent}>
                  <div className={classes.trainingImage}>
                    <img
                      src={imageComprehensive}
                      alt="Comprehensive Training"
                    />
                  </div>
                  <div className={classes.trainingContent}>
                    <h2>
                      <span className="text-primary">_</span>
                      <strong>00 Comprehensive Training</strong>
                    </h2>
                    <p>
                      Concise lessons to teach you in hours what it took us
                      years to master. Get your entire team on the same page to
                      be as productive in your new stack as quickly as possible.
                    </p>
                  </div>
                </div>
                <div className={classes.unitContent}>
                  <div className={classes.trainingImage}>
                    <img src={imageBestPractices} alt="01 Best Practices" />
                  </div>
                  <div className={classes.trainingContent}>
                    <h2>
                      <span className="text-primary">_</span>
                      <strong>01 Best Practices</strong>
                    </h2>
                    <p>
                      Why tredge through the jungle when a path has already been
                      laid out? We’ll show you what years of experience working
                      with these technologies has taught us.
                    </p>
                  </div>
                </div>
                <div className={classes.unitContent}>
                  <div className={classes.trainingImage}>
                    <img src={imageRealWorld} alt="02 Real-world Scenarios" />
                  </div>
                  <div className={classes.trainingContent}>
                    <h2>
                      <span className="text-primary">_</span>
                      <strong>02 Real-world Scenarios</strong>
                    </h2>
                    <p>
                      No more “hello world” examples. We’ll show you how these
                      technologies work in the context of a real-world
                      application.
                    </p>
                  </div>
                </div>
                <div className={classes.unitContent}>
                  <div className={classes.trainingImage}>
                    <img
                      src={iimageProfessionalInstructors}
                      alt="03 Professional Instructors"
                    />
                  </div>
                  <div className={classes.trainingContent}>
                    <h2>
                      <span className="text-primary">_</span>
                      <strong>03 Professional Instructors</strong>
                    </h2>
                    <p>
                      Our instructors build with the technologies they teach
                      every day. They’ve been teaching professional engineers
                      for years.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CLIENTS */}
            <div className="col-xs-12 col-sm-4">
              <div className="row">
                {clients.map((item, index) => (
                  <div
                    key={index}
                    className={cx(
                      index % 2 ? classes.right : classes.left,
                      classes.brand,
                      'col-xs-6'
                    )}
                  >
                    <img
                      src={item.logo}
                      className={classes.client}
                      alt={item.name}
                    />
                  </div>
                ))}
                <div className={cx(classes.andMore, 'col-xs-6')} />
                <div className={cx(classes.andMore, 'col-xs-6')}>and more</div>
                <div className={cx(classes.braceContainer, 'col-xs-12')}>
                  <div className={classes.brace} />
                </div>
                <div className={cx(classes.clientsFooter, 'col-xs-12')}>
                  Fig. 1 – Engineers we've trained
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEAM */}
      <div className={cx(classes.team, 'container')}>
        <Team />
      </div>

      {/* FOOTER */}
      <div className={classes.footer}>
        <div className={classes.footerLetsChat}>
          <img src={imageLetsChat} />
        </div>
        <div className={classes.footerDrops}>
          <Drops bottom />
        </div>
        <Footer footerContent={<SignUp />} headerContent={<Contact />} />
      </div>
    </div>
  </div>
);

export default withStyles(styles)(TrainingPage);
