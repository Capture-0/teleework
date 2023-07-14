<script lang="ts">
// @ts-nocheck
import { h } from "vue";
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        width: {
            type: String,
            required: true
        }
    },
    render() {
        return h(this.name, { style: { maxWidth: "90%", width: this.width, marginInline: "auto" } }, this.$slots.default())
    }
}
</script>