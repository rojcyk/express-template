import passport from 'passport'
import passportJWT from 'passport-jwt'

const {
  Strategy: JWTStrategy,
  ExtractJwt: ExtractJWT,
} = passportJWT

const opts = {
  jwtFromRequest: ExtractJWT.fromAuthHeaderWithScheme('jwt'),
  secretOrKey: process.env.JWT_SECRET
}
passport.use(new JWTStrategy(opts, function(jwtPayload, done) {
  // retrieve mail from jwt payload
  const email = jwtPayload.email;

  done(null, {
    email: 'tmp@email.com'
  })

  // if mail exist in database then authentication succeed
  // User.findOne({email: email}, (error, user) => {
  //   if (error) {
  //     return done(error, false);
  //   } else {
  //     if (user) {
  //       done(null, user);
  //     } else {
  //       done(null, false);
  //     }
  //   }
  // });
}))