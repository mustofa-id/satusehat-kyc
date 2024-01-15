<script>
	export let form;
</script>

<svelte:head>
	<title>SatuSehat KYC</title>
</svelte:head>

<form method="post">
	<fieldset>
		<legend>Informasi Petugas Verifikasi</legend>

		<label>
			<span>Nama:</span>
			<input name="agent-name" autocomplete="off" spellcheck="false" required />
		</label>

		<label>
			<span>NIK:</span>
			<input
				name="agent-nik"
				autocomplete="off"
				spellcheck="false"
				pattern={`^\\d{16}$`}
				required
			/>
		</label>

		<button>Mulai</button>
	</fieldset>
</form>

{#if form?.message}
	<em>Message: {form?.message}</em>
{/if}

<style>
	fieldset {
		display: flex;
		width: min-content;
		margin-bottom: 0.5rem;
		gap: 0.5rem;
	}

	input {
		padding: 0.25rem;
	}

	em {
		color: chocolate;
	}
</style>
