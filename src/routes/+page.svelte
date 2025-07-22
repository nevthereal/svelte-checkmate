<script lang="ts">
	import { login } from './auth.remote.js';
</script>

<main class="mx-auto max-w-3xl pt-8">
	<h1 class="mb-4 text-2xl font-bold">Login Form example</h1>
	<form {...login}>
		<input class="rounded-lg border border-gray-300 p-2" type="text" name="email" />
		<input class="rounded-lg border border-gray-300 p-2" type="password" name="password" />
		<button class="rounded-lg bg-black p-2 text-white" type="submit">Login</button>
	</form>
</main>
