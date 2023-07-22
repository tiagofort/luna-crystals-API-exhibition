require('dotenv').config();
const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: process.env.TRANSPORTE_SERVICO,
    auth: {
      user: process.env.TRANSPORTE_EMAIL,
      pass: process.env.TRANSPORTE_SENHA
    }
});


function opcoesRecuperacaoSenha(from, to, subject, token, tipo){
  const link_destination = tipo == 1 ? process.env.URL_FRONTEND_CLIENTE : process.env.URL_FRONTEND_ADM;
  console.log(link_destination)
  let opcoesEmail = {
    from: from,
    to: to,
    subject: subject,
    html: '<html>' +
              '<head>'  +
                '<meta charset="utf-8">' +
                '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
                '<title>Changing password</title>' +
              '</head>' +
              '<body style="font-family: Arial, sans-serif;">' +
                '<table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">' +
                    '<tr>' +
                      '<td align="center" bgcolor="#ffffff" style="padding: 40px 0;">' +
                          '<img src="https://lunapedraria-imgs.s3.eu-west-1.amazonaws.com/logoLuna.jpg" alt="Logo"  style="display: block;">' +
                      '</td>' +
                    '</tr>' +
                    '<tr>' +
                      '<td bgcolor="#ffffff" style="padding: 40px 30px;">' +
                        '<h2 style="margin-bottom: 20px;">Recovering Password</h2>' +
                        '<p style="margin-bottom: 30px;">Please, click on the link bellow to proceed with your password change request.</p>' +

                        '<p style="margin-bottom: 20px;">Your request will expire in 10 minutes. After that, you will have to make a new request.</p>' +
                        `<a href="${link_destination}change_password/key=${token}">Click here to change your password</a>` +

                        '<p>Thank you,</p>' +
                        '<div>Luna Crystals</div>' +
                      '</td>' +
                    '</tr>' +
                '</table>' +
          '</html>'
  };

  transporter.sendMail(opcoesEmail, function(error, info){
    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
};

function opcoesConfirmarCadastro(from, to, subject){
  let opcoesEmail = {
    from: from,
    to: to,
    subject: subject,
    html: '<html>' +
                '<head>'  +
                  '<meta charset="utf-8">' +
                  '<meta name="viewport" content="width=device-width, initial-scale=1.0">' +
                  '<title>Email confirmation</title>' +
                '</head>' +
                '<body style="font-family: Arial, sans-serif;">' +
                  '<table cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width: 600px; margin: 0 auto;">' +
                      '<tr>' +
                        '<td align="center" bgcolor="#ffffff" style="padding: 40px 0;">' +
                            '<img src="https://lunapedraria-imgs.s3.eu-west-1.amazonaws.com/logoLuna.jpg" alt="Logo"  style="display: block;">' +
                        '</td>' +
                      '</tr>' +
                      '<tr>' +
                        '<td bgcolor="#ffffff" style="padding: 40px 30px;">' +
                          '<h2 style="margin-bottom: 20px;">Email confirmation</h2>' +
                          '<p style="margin-bottom: 30px;">Please, click on the link bellow to confirm your create account request.</p>' +

                          '<p style="margin-bottom: 20px;">It`s a procedure to make sure you are not a robot or scammer.</p>' +
                          `<a href="${process.env.URL_FRONTEND_CLIENTE}confirmar_email/email=${to}">Click here to confirm your email</a>`+

                          '<p>Thank you,</p>' +
                          '<div>Luna Crystals</div>' +
                        '</td>' +
                      '</tr>' +
                  '</table>' +
            '</html>'       
  };
  
  transporter.sendMail(opcoesEmail, function(error, info){
    if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
  });
} 

module.exports = {
    transporter,
    opcoesRecuperacaoSenha,
    opcoesConfirmarCadastro
}