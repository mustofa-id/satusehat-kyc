import ihs from '$lib/ihs.js';
import { fail, redirect } from '@sveltejs/kit';

export const actions = {
	async default({ request }) {
		const form = await request.formData();
		const name = form.get('agent-name')?.toString();
		const nik = form.get('agent-nik')?.toString();
		if (!name || !nik) return fail(400, { message: `Nama dan NIK wajib diisi` });

		const { metadata, data } = await ihs.kyc.generateValidationUrl({ name, nik });
		if ('url' in data) redirect(302, data.url);

		return fail(+metadata.code, { message: data.error });
	}
};
