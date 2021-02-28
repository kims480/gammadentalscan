import { ProgressTracker, StepItem } from "vue-bulma-progress-tracker";
export default {
    components: {
        ProgressTracker,
        StepItem
    },
    data() {
        return {
            trackerSteps: [
                {
                    id: 1,
                    title: "Requested",
                    text: "Requested",
                    labelmob: "RQ"
                },
                {
                    id: 2,
                    title: "Accepted",
                    text: "Accepted",
                    textmob: "A",
                    labelmob: "A"
                },
                {
                    id: 3,
                    title: "Processing",
                    text: "Processing",
                    labelmob: "P"
                },
                { id: 4, title: "Done", text: "Done", labelmob: "F" },

                { id: 5, title: "Delivered", text: "Delivered", labelmob: "R" },

                { id: 9, title: "Rejected", text: "Reject", labelmob: "Rej" }
            ],
            currentprogress: []
        };
    },
    methods: {
        getCurrentProgress(caseId) {
            return;
        }
    }
};
