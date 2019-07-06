module.exports = (app, db) => {
  app.get("/authors", (req, res) =>
    db.author.findAll().then(result => res.json(result))
  );

  app.get("/author/:id", (req, res) =>
    db.author.findByPk(req.params.id).then(result => res.json(result))
  );

  app.post("/author", (req, res) =>
    db.author
      .create({
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })
      .then(result => res.json(result))
  );

  app.put("/author/:id", (req, res) =>
    db.author
      .update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => res.json(result))
  );

  app.delete("/author/:id", (req, res) =>
    db.author
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(result => res.json(result))
  );
};
