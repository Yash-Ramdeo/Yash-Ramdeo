const Companies = require("../Schemas/CompaniesSchema");

const searchResults = async (req, res) => {
    const { keyword } = req.body;               //assigning the keyword send via POST request



    const result = await Companies.aggregate([      //aggregating(joining in sql) both the collections
        {
            '$lookup': {
                'from': 'ads',
                'localField': '_id',
                'foreignField': 'companyId',
                'as': 'result'
            }
        }, {
            '$match': {
                '$or': [            //using regex to match the fields with the keyword
                    {
                        'name': {
                            '$regex': keyword, '$options': 'i'
                        }
                    }, {
                        'result.primaryText': {
                            '$regex': keyword, '$options': 'i'
                        }
                    }, {
                        'result.headine': {
                            '$regex': keyword, '$options': 'i'
                        }
                    },
                    {
                        'result.description': {
                            '$regex': keyword, '$options': 'i'
                        }
                    },
                    {
                        'result.CTA': {
                            '$regex': keyword, '$options': 'i'
                        }
                    }
                ]
            }
        }
    ]);

    res.send(result);
}

module.exports = searchResults;