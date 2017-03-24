var passport = require('passport');
var GitHubStrategy = require('passport-github').Strategy;
var findOrCreate = require('mongoose-findorcreate');
var mongoose = require('mongoose');

module.exports = function() {
	
	var Usuario = mongoose.model('Usuario');

    //profile -> perfil no github
    //done -> funcal callback para dados que armazenaremos na sessao
	passport.use(new GitHubStrategy({
		clientID: '0277063e8d2e1825d3cd',
		clientSecret: '93ba85da6aa658aa439b0c2fc086bad4abfdedbf',
		callbackURL: 'http://localhost:3000/auth/github/callback'
	}, function(accessToken, refreshToken, profile, done) {
		
		Usuario.findOrCreate(
			{ "login" : profile.username}, 
			{ "nome" : profile.username},  
			function(erro, usuario) {
				if(erro) {
					return done(erro);
				} 
				return done(null, usuario);
			}
		);
	}));

	passport.serializeUser(function(usuario, done) {
	  done(null, usuario._id);
	});

	passport.deserializeUser(function(id, done) {
	  Usuario.findById(id).exec()
	  .then(function(usuario) {
	  	done(null, usuario);	
	  });
	});
};