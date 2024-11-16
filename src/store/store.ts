import {reactive} from "vue";
import {getCurrentDateTime} from "../../utils/DateTime";

export const store = reactive({
    counter: 0,
    histories: [
        {id: 1, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 2, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 3, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 4, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 5, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 6, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 7, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 8, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 9, number: 43, dateTime: '16/11/2024 03:16'},
        {id: 10, number: 43, dateTime: '16/11/2024 03:16'},
    ],
    addHistory() {
        this.counter++;
        const item = {
            id: this.histories.length - 1,
            number: this.counter,
            dateTime: getCurrentDateTime()
        }
        this.histories.push(item);

        this.$nextTick(() => {
            const lastItem = this.$refs.histories[this.histories.length - 1];
            if (lastItem) {
                lastItem.scrollIntoView({behavior: 'smooth'});
            }
        })
    },
    deleteHistory(id: number) {
        this.histories = this.histories.filter(item => item.id !== id);
    }
})