<script lang="ts">
	import musicDb from "./db/music.json";
	import tourDb from "./db/tour.json";
	import Fa from "svelte-fa/src/fa.svelte";
	import {
		faInstagram,
		faFacebookSquare,
		faYoutube,
	} from "@fortawesome/free-brands-svg-icons";
	import { faChevronRight, faChevronDown } from "@fortawesome/free-solid-svg-icons";
	import MusicCard from "./lib/MusicCard.svelte";
	import Navbar from "./lib/Navbar.svelte";
	import Tour from "./lib/Tour.svelte";

	let showPastTours = false;

	let upcomingTours = tourDb.filter((tour) => {
		return new Date(tour.date) >= new Date();
	});
	upcomingTours.sort((a, b) => {
		return new Date(a.date) - new Date(b.date); // old to new
	});

	let pastTours = tourDb.filter((tour) => {
		return new Date(tour.date) < new Date();
	});
	pastTours.sort((a, b) => {
		return new Date(b.date) - new Date(a.date); // new to old
	});

	let currentYear = new Date().getFullYear();

	let amountOfColumns = musicDb.length;
</script>

<Navbar />

<section class="hero">
	<figure class="image">
		<img src="/img/press_foto.jpg" alt="Band members of Alta Luna laughing" />
	</figure>
</section>

<section class="section is-medium has-background-white-bis" id="about">
	<div class="container has-text-centered">
		<h2 class="title">About us</h2>
		<p>
			Imagine sitting behind the wheel of a beautiful car, driving underneath a
			clear and starry sky while on the way to your great love. Alta Luna is the
			perfect soundtrack for that trip. This group of five friends from the
			Netherlands are easily recognized by their melancholic sound, driving
			drums and honest lyrics. If you like The War On Drugs, The
			National or Inhaler, you will certainly love Alta Luna.
		</p>
	</div>
</section>

<section class="section is-medium" id="music">
	<div class="container has-text-centered">
		<h2 class="title">Music</h2>
		<div class="columns">

			{#each musicDb as release}
				<MusicCard
					title={release.title}
					imageUrl={release.image.url}
					imageAlt={release.image.alt}
					youtube={release.youtube}
					spotify={release.spotify}
					hyperfollow={release.hyperfollow}
					photographerName={release.photographer.name}
					photographerUrl={release.photographer.url}
					acousticYoutubeUrl={release.acoustic_youtube_url}
					amountOfColumns={amountOfColumns}
				/>
			{/each}
		</div>
	</div>
</section>

<section class="section is-medium has-background-white-bis" id="tour">
	<div class="container has-text-centered">
		<h2 class="title">Tour Dates</h2>
		<table class="table is-fullwidth mx-auto has-background-white-bis">
			<thead>
				<tr>
					<th class="has-text-centered">Date</th>
					<th class="has-text-centered">Location</th>
					<th class="has-text-centered">Website / Tickets</th>
				</tr>
			</thead>
			<tbody>
				{#if upcomingTours.length === 0}
					<tr>
						<td>Have a date?</td>
						<td>And a location?</td>
						<td><a href="mailto:info@altalunaband.com">Get in touch!</a></td>
					</tr>
				{/if}
				{#each upcomingTours as tour}
					<Tour date={tour.date} location={tour.location} url={tour.url} />
				{/each}
			</tbody>
		</table>

		<a on:click="{e => showPastTours = !showPastTours}">
			See past tour dates and setlists
			{#if !showPastTours}
				<Fa icon={faChevronRight} />
			{:else}
				<Fa icon={faChevronDown} />
			{/if}
		</a>
		{#if showPastTours}
		<table class="table is-fullwidth mx-auto has-background-white-bis">
			<thead>
				<tr>
					<th class="has-text-centered">Date</th>
					<th class="has-text-centered">Location</th>
					<th class="has-text-centered">Setlist</th>
				</tr>
			</thead>
			<tbody>
				{#each pastTours as tour}
					<Tour date={tour.date} location={tour.location} url={tour.url} />
				{/each}
			</tbody>
		</table>
		{/if}
	</div>
</section>

<section class="section is-medium" id="contact">
	<div class="container has-text-centered">
		<h2 class="title">Contact</h2>
		<p>Visit our socials:</p>
		<div class="content has-text-centered">
			<p>
				<a href="https://www.facebook.com/AltaLunaMusic" target="_blank" rel="noreferrer">
					<Fa icon={faFacebookSquare} size="2x" />
				</a>
				<a href="https://www.instagram.com/altalunaband/" target="_blank" rel="noreferrer">
					<Fa icon={faInstagram} size="2x" />
				</a>
				<a href="https://www.youtube.com/@altalunaband/" target="_blank" rel="noreferrer">
					<Fa icon={faYoutube} size="2x" />
				</a>
			</p>
		</div>
		<p>Or send us an email for booking requests or other information:</p>
		<a href="mailto:info@altalunaband.com">info@altalunaband.com</a>
		<p><strong>Presskit: </strong><a href="presskit">find it here</a></p>
	</div>
</section>

<footer class="footer">
	<div class="container has-text-centered">
		&copy; 2021 - {currentYear} Alta Luna. All rights reserved. If you would like
		to use our creative work, please contact us at
		<a href="mailto:info@altalunaband.com">info@altalunaband.com</a>. Cover
		photo by
		<a href="https://ziggymarlissa.com/" target="_blank" rel="noreferrer"
			>Ziggy Marlissa (ZM Creative)</a>.
	</div>
</footer>
