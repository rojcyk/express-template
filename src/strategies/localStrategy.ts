import passport from 'passport'
import passportLocal from 'passport-local'

const LocalStrategy = passportLocal.Strategy

passport.use(new LocalStrategy(
  (username, password, done) => {
    return done(null, {
      email: 'tmp@email.com'
    })
    // User.findOne({ username: username }, function (err, user) {
    //   if (err) { return done(err); }
    //   if (!user) {
    //     return done(null, false, { message: 'Incorrect username.' });
    //   }
    //   if (!user.validPassword(password)) {
    //     return done(null, false, { message: 'Incorrect password.' })
    //     return done(null, user);
    //   }
    // })
  }
))

passport.serializeUser(function(user, done) {
  done(null, {
    email: 'tmp@email.com'
  })
  // done(null, user.id);
})

passport.deserializeUser(function(id, done) {
  done(null, {
    email: 'tmp@email.com'
  })
  // User.findById(id, function(err, user) {
  //   done(err, user);
  // });
});