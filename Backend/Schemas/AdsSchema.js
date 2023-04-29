const mongoose = require('mongoose');

const adSchema = mongoose.Schema(
    {
        companyId: { type: mongoose.Schema.Types.ObjectId, ref: "Companies" },
        primaryText: { type: "String" },
        headline: { type: "String" },
        CTA: { type: "String" },
        imageUrl: { type: "String" },
        description: { type: "String" },
    }
);

const Ads = mongoose.model("Ads", adSchema);

module.exports = Ads;