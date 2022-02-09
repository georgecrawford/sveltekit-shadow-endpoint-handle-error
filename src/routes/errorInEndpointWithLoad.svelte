<script context="module">
    export async function load({fetch}) {
        const res = await fetch('/errorInEndpointWithLoad.json');
        const data = await res.json();
        return {props: data}
    }
</script>

<script>
    export let data;
</script>

errorInEndpointWithLoad
{JSON.stringify(data)}
