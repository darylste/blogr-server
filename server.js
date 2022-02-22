const app = require('./app');
const mongoosee = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3001;

mongoosee
	.connect(
		`mongodb+srv://daryl:${process.env.DBPASSWORD}@blogr.mcwld.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
	)
	.then(() => {
		console.log('DB connection started');
	})
	.catch((error) => {
		console.log(error);
	});

app.listen(port, () => {
	console.log(`App is running on ${port}`);
});
