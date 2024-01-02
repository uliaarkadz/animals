module.exports = { index, newForm, create, destroy, update, edit, show };
/**
 * route controllers
 */

async function index(req, res) {
  let animals = await req.model.Animal.find({});
  res.render("index.ejs", { animals: animals });
}

async function newForm(req, res) {
  res.render("new.ejs");
}

async function destroy(req, res) {
  let deletedAnimal = await req.model.Animal.findByIdAndDelete(req.params.id);
  res.redirect("/animals");
}
async function edit(req, res) {
  try {
    // find the animal to edit
    let foundAnimal = await req.model.Animal.findById(req.params.id);
    res.render("edit.ejs", {
      animal: foundAnimal,
    });
  } catch (error) {
    res.send("hello from the error");
  }
}

async function update(req, res) {
  if (req.body.extinct === "on") {
    req.body.extinct = true;
  } else {
    req.body.extinct = false;
  }
  let updatedAnimal = await req.model.Animal.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.redirect(`/animals/${updatedAnimal._id}`);
}

async function create(req, res) {
  if (req.body.extinct === "on") {
    // if checked
    req.body.extinct = true;
  } else {
    // if not checked
    req.body.extinct = false;
  }
  let newAnimal = await req.model.Animal.create(req.body);
  res.redirect("/animals");
}

async function show(req, res) {
  let foundAnimal = await req.model.Animal.findById(req.params.id);
  res.render("show.ejs", { animal: foundAnimal });
}
