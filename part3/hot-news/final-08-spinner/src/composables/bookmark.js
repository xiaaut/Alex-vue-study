import { ref } from "vue";

export function useBookmark () {
    const showBookmark = ref(false);
    function toggleShowBookmark () {
        showBookmark.value = !showBookmark.value;
    }

    return { showBookmark, toggleShowBookmark }
}