let messages = [];
let idCounter = 1;

// PAGES
const home = (req, res) => {
    res.render('index');
};

const about = (req, res) => {
    res.render('./pages/about');
};

const blog = (req, res) => {
    res.render('./pages/blog');
};

const contact = (req, res) => {
    res.render('./pages/contact');
};

const pricing = (req, res) => {
    res.render('./pages/Pricing');
};

const services = (req, res) => {
    res.render('./pages/Services');
};

const counselor = (req, res) => {
    res.render('./pages/counselor');
}

// FORM CRUD
const submitForm = (req, res) => {
    const { name, email, service,counselor, message } = req.body;

    messages.push({
        id: idCounter++,
        name,
        email,
        service,
        counselor,
        message
    });

    res.redirect('/messages');
};

const showMessages = (req, res) => {
    res.render('pages/messages', { messages });
};

const editMessage = (req, res) => {
    const msg = messages.find(m => m.id == req.params.id);
    res.render('pages/edit', { msg });
};

const updateMessage = (req, res) => {
    const msg = messages.find(m => m.id == req.params.id);

    msg.name = req.body.name;
    msg.email = req.body.email;
    msg.service = req.body.service;
    msg.message = req.body.message;

    res.redirect('/messages');
};

const deleteMessage = (req, res) => {
    messages = messages.filter(m => m.id != req.params.id);
    res.redirect('/messages');
};

module.exports = {
    home,
    about,
    blog,
    contact,
    pricing,
    services,
    counselor,
    submitForm,
    showMessages,
    editMessage,
    updateMessage,
    deleteMessage
};