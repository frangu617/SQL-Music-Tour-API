//DEPENDENCIES
const bands = require('express').Router();
const db = require('../models');
const {Band} = db;
const { Op } = require("sequelize");


// FIND ALL BANDS
bands.get('/', async (req, res) => {
    try {
        const limit = parseInt(req.query.limit, 10) || 10; // Number of items per page
        const page = parseInt(req.query.page, 10) || 1; // Current page number

        // Using findAndCountAll to get total count and paginated rows
        const { count, rows } = await Band.findAndCountAll({
            limit: limit,
            offset: (page - 1) * limit, // Skip the previous pages' items
            order: [['name', 'ASC']], // Sorting bands by name
            where: {
                name: {
                    [Op.like]: `%${req.query.name ? req.query.name : ''}%` // Filter by name if query param is provided
                }
            }
        });

        const totalPages = Math.ceil(count / limit); // Calculate total pages

        // Include pagination info in the response
        res.status(200).json({
            data: rows, // The paginated result
            pagination: {
                totalItems: count,
                totalPages: totalPages,
                currentPage: page,
                itemsPerPage: limit
            }
        });
    } catch (error) {
        res.status(500).json(error);
    }
});


// FIND A SPECIFIC BAND
bands.get('/:id', async (req, res) => {
    try {
        const foundBand = await Band.findOne({
            where: { band_id: req.params.id }
        })
        res.status(200).json(foundBand)
    } catch (error) {
        res.status(500).json(error)
    }
})
// CREATE A BAND
bands.post('/', async (req, res) => {
    try {
        const newBand = await Band.create(req.body)
        res.status(200).json({
            message: 'Successfully inserted a new band',
            data: newBand
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// UPDATE A BAND
bands.put('/:id', async (req, res) => {
    try {
        const updatedBands = await Band.update(req.body, {
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully updated ${updatedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})

// DELETE A BAND
bands.delete('/:id', async (req, res) => {
    try {
        const deletedBands = await Band.destroy({
            where: {
                band_id: req.params.id
            }
        })
        res.status(200).json({
            message: `Successfully deleted ${deletedBands} band(s)`
        })
    } catch(err) {
        res.status(500).json(err)
    }
})


//EXPORT
module.exports = bands;


