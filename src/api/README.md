# Guide to Adding Your Own Mail for Contact Form

If you're contributing to the contact form feature and want to use your own email to receive messages, you can follow these steps:

1. Create a new `.env` file in the root of the project.
2. Add the email and password as environment variables in the `.env` file using the format `EMAIL_USER=<email>` and `EMAIL_PASSWORD=<password>`.
3. Modify the `createTransport` function in the server file to use these environment variables instead of hardcoded values.
4. Commit and push the changes to the repository.

That's it! With these steps, you should be able to use your own email to receive messages from the contact form.
