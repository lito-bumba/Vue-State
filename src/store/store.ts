import {reactive} from "vue";
import {getCurrentDateTime} from "../../utils/DateTime";

export const store = reactive({
    counter: 0,
    isHistoryVisible: false,
    histories: [],
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