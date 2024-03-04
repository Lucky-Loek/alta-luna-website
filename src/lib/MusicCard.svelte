<script lang="ts">
	import Fa from "svelte-fa/src/fa.svelte";
	import { faSpotify, faYoutube } from "@fortawesome/free-brands-svg-icons";
	import { faCloud } from "@fortawesome/free-solid-svg-icons";

	export let title: string;
	export let imageUrl: string;
	export let imageAlt: string;
	export let youtube: string;
	export let spotify: string;
	export let hyperfollow: string;
	export let photographerName: string;
	export let photographerUrl: string;
	export let acousticYoutubeUrl: string;
</script>

<div class="column is-one-quarter">
	<div class="card has-background-dark has-text-white">
		<div class="card-image">
			<figure class="image is-1by1">
				<img src={imageUrl} alt={imageAlt} />
			</figure>
		</div>
		<div class="card-content">
			<div class="content has-text-centered">
				<h3 class="has-text-white">{title}</h3>
				<p>
					<a href={spotify}>
						<Fa icon={faSpotify} size="2x" />
					</a>
					<a href={youtube}>
						<Fa icon={faYoutube} size="2x" />
					</a>
					<a href={hyperfollow}>
						<Fa icon={faCloud} size="2x" />
					</a>
				</p>
				{#if acousticYoutubeUrl !== ""}
					<hr>
					<h3 class="has-text-white">Acoustic</h3>
					<p>
						<a href="{acousticYoutubeUrl}">
							<Fa icon={faYoutube} size="2x" />
						</a>
					</p>
				{/if}
				<p>
					Photo by <a href={photographerUrl} target="_blank" rel="noreferrer"
						>{photographerName}</a
					>
				</p>
			</div>
		</div>
	</div>
</div>
