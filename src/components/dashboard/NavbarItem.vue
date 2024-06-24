<script>
export default {
    props: {
        link: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
    },
};
</script>
<template>
    <a :href="link" class="smooth flex justify-center items-center gap-3 w-full py-3 rounded-xl
        bg-back2 hover:rounded-md hover:bg-accent hover:bg-opacity-30 hover:py-4 text-primary">
        {{title}}
    </a>
</template>
