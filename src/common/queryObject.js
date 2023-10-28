export default class queryObject {
  constructor() {
    return this
  }

  query = []
  criteriaGroupid = 0
  addCriteriaGroup = () => {
    this.criteriaGroupid++
    return this.criteriaGroupid
  }
  addCriteria = ({ group, field, value, operator }) => {
    group = parseInt(group)
    if (!group || isNaN(group)) {
      group = 0
    }

    if (!this.query[group]) {
      this.query[group] = []
    }

    this.query[group].push({ field, value, operator })
  }

  getQueryParams = () => {
    return this.query
  }
}

export const operatorType = Object.freeze({
  equals: "=",
  like: "LIKE",
  between: "BETWEEN",
  in: "IN",
  notIn: "NOT IN",
  greater: ">",
  less: "<",
  notEqual: "<>",
  null: "IS NULL",
})
