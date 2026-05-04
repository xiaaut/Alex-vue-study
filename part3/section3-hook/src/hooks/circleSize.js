import { ref } from 'vue'

export function useCircleSize () {
    const circleSize = ref(200);
    function changeCircleSize (value) {
        circleSize.value = value;
    }

    return { circleSize, changeCircleSize }
}

