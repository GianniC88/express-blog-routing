const express = require('express')
const router = express.Router()


//index
router.get('/', (req, res) => {
	res.json('post list')
});

//show
router.get('/:id', (req, res) => {
	res.json('posts detail')
});

//store
router.post('/', (req, res) => {
	res.json('Creazione un nuovo posts');
});

//update
router.patch('/:id', (req, res) => {
	res.json('modifica integrale del post')
})


//destroy
router.delete('/:id', (req, res) => {
	res.json('eliminazione post')
})


module.exports = router