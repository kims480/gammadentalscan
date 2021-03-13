export default {
    data() {
        return {
            patients: [],
            doctors: []
        };
    },
    methods: {
        async loadPatientsDoctors() {
            // Items have already been loaded
            if (this.patients.length > 0) return;
            // Items have already been requested
            if (this.isLoading) return;
            this.isLoading = true;
            // Lazily load input items
            await this.$store
                .dispatch("scanRequest/getPatientDoctorList", true)
                .then(res => {
                    //console.log()
                    // const patients=[];
                    /* res.list.forEach(element => {
                          this.patients.push(element) ;
                      }) */
                    this.patients = res.patients;
                    this.doctors = res.doctors;
                    // console.log(this.patients)
                    // console.log(this.doctors)
                })
                .catch(err => {
                    console.log(err);
                })
                .finally(() => (this.isLoading = false));
            // return this.patients;
        }
    }
};
