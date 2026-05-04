import { ref } from 'vue'

export function useCircleColor () {
    const circleColor = ref('');
    function changeCircleColor (value) {
        circleColor.value = value;
    }

    return { circleColor, changeCircleColor }
}

