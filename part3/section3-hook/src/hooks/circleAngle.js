import { ref } from 'vue'

export function useCircleAngle () {
    const circleAngle = ref(0);
    function changeCircleRotate (value) {
        circleAngle.value = value;
    }

    return { circleAngle, changeCircleRotate }
}

