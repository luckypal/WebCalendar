// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
	production: false,
	isMockEnabled: true, // You have to switch this, when your real back-end is done
	authTokenKey: 'authce9d77b308c149d5992a80073637e4d5',

	firebase: {
		apiKey: "AIzaSyAqzzTu-krNNd0dgyCDLMSNbwfaEYlMK4M",
		authDomain: "wgcr-c9763.firebaseapp.com",
		databaseURL: "https://wgcr-c9763.firebaseio.com",
		projectId: "wgcr-c9763",
		storageBucket: "",
		messagingSenderId: "1017037592517",
		appId: "1:1017037592517:web:9b450685766eea9c"
	},

	serverUrl: "http://127.0.0.1:3000"
};
