import { sendEmail } from "../util/sendEmail";

export const testEmailRoute = {
    path: "/api/test-email",
    method: "post",
    handler: async (req, res) => {
        try {
            await sendEmail({
                to: 'sarwar.business+01@gmail.com',
                from: 'sarwar.business@gmail.com',
                subject: 'Hello from the backend!',
                text: 'This is a test email!',
                html: '<strong>This is a test email!</strong>'
            });
            res.sendStatus(200);
        } catch (e) {
            console.log(e);
            res.sendStatus(500);
        }
    }

}