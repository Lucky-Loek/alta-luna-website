<script lang="ts">
	export let date: string;
	export let location: string;
	export let url: string;

	$: renderedDate = new Date(date).toLocaleDateString("en", {
		dateStyle: "medium",
	});
</script>

<tr>
	<td>{renderedDate}</td>
	<td>{location}</td>
	<td><a href={url} target="_blank" rel="noreferrer">Link</a></td>
</tr>
