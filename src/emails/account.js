const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "angelodavid98@hotmail.com",
        subject: "Thanks for joining in!",
        text: `Welcome to the app ${name}. Let me know how to get along with the app.`
    })
};

const sendGoodbyeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: "angelodavid98@hotmail.com",
        subject: "We are sorry you leave",
        text: `You are very important to us ${name}, and we are sorry to hear you leave. Let us know if there is something we can do before you leave. You are always welcome back. We would like to know why you are leaving.
                
                Best Regards

                Angelo D. Espinoza V.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendGoodbyeEmail
}