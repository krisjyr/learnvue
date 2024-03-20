<script setup>
import { watch } from 'vue';
const props = defineProps(['ctx', 'x', 'y']);

props.ctx.rect(props.x, props.y, 30, 30);
props.ctx.fill();

watch(() => props.x, (newX, oldX) => {
    //props.ctx.clearRect(oldX, props.y, 60, 60);
    props.ctx.reset();
    props.ctx.rect(newX, props.y, 30, 30);
    props.ctx.fill();
});
watch(() => props.y, (newY, oldY) => {
    props.ctx.reset();
    //props.ctx.clearRect(props.x, oldY, 60, 60);
    props.ctx.rect(props.x, newY, 30, 30);
    props.ctx.fill();
});

</script>