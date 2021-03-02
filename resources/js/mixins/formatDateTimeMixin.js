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
        },
        statusColor(status) {
            return status == "Dispatched"
                ? "cyan darken-1"
                : status == "Accepted"
                ? "indigo darken-3"
                : status == "On-Process"
                ? "warning"
                : status == "Done"
                ? "light-green darken-2"
                : status == "Delivered"
                ? "green darken-4"
                : status == "Rejected"
                ? "error"
                : status == "Canceled"
                ? "grey darken-2"
                : "teal darken-4";
        },
        statusAColor(status) {
            return status == "Dispatched"
                ? "cyan--text text--darken-1"
                : status == "Accepted"
                ? "indigo--text text--darken-3"
                : status == "On-Process"
                ? "warning"
                : status == "Done"
                ? "light-green--text text--darken-2"
                : status == "Delivered"
                ? "green--text text--darken-4"
                : status == "Rejected"
                ? "error"
                : status == "Canceled"
                ? "grey--text text--darken-2"
                : "teal--text text--darken-4";
        }
    }
};
