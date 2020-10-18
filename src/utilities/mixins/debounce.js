export default {
    data() {
        return {
            timeout: ''
        }

    },
    methods: {
        debounce: function (func, wait = 300) {
            clearTimeout(this.timeout);
            this.timeout = setTimeout(func, wait);
        }
    }
}
