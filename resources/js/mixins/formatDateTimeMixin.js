export default {
    methods: {
        GetFormattedDate(date) {
            let current_datetime = new Date(date);
            let formatted_date =
                current_datetime.getFullYear() +
                "-" +
                (current_datetime.getMonth() + 1).toString().padStart(2, 0) +
                "-" +
                current_datetime
                    .getDate()
                    .toString()
                    .padStart(2, 0) +
                " " +
                current_datetime
                    .getHours()
                    .toString()
                    .padStart(2, 0) +
                ":" +
                current_datetime
                    .getMinutes()
                    .toString()
                    .padStart(2, 0);

            return formatted_date;
        }
    }
};
