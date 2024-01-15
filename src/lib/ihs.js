import { dev } from '$app/environment';
import { env } from '$env/dynamic/private';
import IHS from '@ssecd/ihs';

const ihs = new IHS({
	clientSecret: env.IHS_CLIENT_SECRET,
	secretKey: env.IHS_SECRET_KEY,
	mode: dev ? 'development' : 'production'
});

export default ihs;
