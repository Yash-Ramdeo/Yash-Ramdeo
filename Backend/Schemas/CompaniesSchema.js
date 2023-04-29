const mongoose = require('mongoose');

const companiesSchema = mongoose.Schema(
    {
        name: { type: "String" },
        url: { type: "String" }
    }
);

const Companies = mongoose.model("Companies", companiesSchema);

module.exports = Companies;