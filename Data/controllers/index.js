//Index controllers to models

module.exports = {
    getIndex: async (req, res) => {
        console.log("connected")
        const test = {
            id:0, 
            question: 'connected ?', 
            answer: 'Yes'
        };

        res.json(test);
    }
}