import moment from "moment"

export default {
  methods: {
    convertToDisplay(datetime) {
      if (!datetime || datetime == "01-01-1970 01:00:00") {
        return ""
      }

      let dt = moment(datetime) // removed input format to alow moment to figure it.
      let value = dt.format("DD-MM-YYYY HH:mm")
      return value === "Invalid date" ? "" : value
    },
    convertToModel(datetime) {
      if (!datetime || datetime == "01-01-1970 01:00:00") {
        return ""
      }

      let dt = moment(datetime, "DD-MM-YYYY HH:mm")
      let value = dt.format("YYYY-MM-DD HH:mm")

      return value === "Invalid date" ? "" : value
    },

    convertToDisplayDate(datetime) {
      if (!datetime || datetime == "01-01-1970 01:00:00") {
        return ""
      }

      let dt = moment(datetime, "YYYY-MM-DD HH:mm")
      let value = dt.format("DD-MM-YYYY")
      return value === "Invalid date" ? "" : value
    },

    convertToDisplayTime(datetime) {
      if (!datetime || datetime == "01-01-1970 01:00:00") {
        return ""
      }

      let dt = moment(datetime, "YYYY-MM-DD HH:mm")
      let value = dt.format("HH:mm")
      return value === "Invalid date" ? "" : value
    },
  },
}
