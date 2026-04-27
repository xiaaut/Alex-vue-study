import { ref } from 'vue'

export function useTogglePurple () {
    const isPurple = ref(false);
    function togglePurple () {
        console.log("togglePurple ");
        isPurple.value = !isPurple.value;
    }

    return { isPurple, togglePurple }
}

