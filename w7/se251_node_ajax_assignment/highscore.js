const express = require(`express`)
const app = express()
const fs = require(`fs`);
const hbs = require(`hbs`);
app.set('view engine', 'hbs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.get('/favicon.ico', (req, res) => res.status(204));
hbs.registerPartials(__dirname + '/views/partials', function (err) {});


const readFile = (path)=>{
  return new Promise(
    (resolve, reject)=>
    {
      fs.readFile(path, `utf8`, (err, data) => {
        if (err) {
         reject(err)
        }
        else
        {
          resolve(data)
        }
      });
    })
}

app.get(`/add`, (req, res)=>{
  const filePath = path.join(__dirname, `public`, `testform.html`)
  res.sendFile(filePath);
})

app.get('/jeep', async (req, res) => {
  var data = await readFile(`./data/jeep.json`);
  res.send(JSON.parse(data));
  });

app.post('/jeep', async (req, res) => { 
    var oldData =  await readFile(`./data/jeep.json`)
    var newData =  await JSON.parse(oldData)
    newData.push(req.body)
    const jsonString = JSON.stringify(newData);
    await fs.writeFile('./data/jeep.json', jsonString, err => {
      if (err) {
          console.log('Error writing file', err)
      } else {
          console.log('Successfully wrote file')
      }
    });
    res.send(jsonString);
});

app.post('/delete', async (req, res) => { 
    var oldData =  await readFile(`./data/jeep.json`)
    var newData =  await JSON.parse(oldData)
    var change = req.params.id.replace(":", ``);
    console.log(change)
    newData.splice(change, 1)
    console.log(newData)
      const jsonString = JSON.stringify(newData);
      console.log(jsonString)
      fs.writeFile('./data/jeep.json', jsonString, err => {
        if (err) {
          console.log('Error')
        }
        else{
          console.log('Success')
        }
      });

      res.send(jsonString);
  //add the delete functionality here.
  //read in the jeep.json file
  //splice out the correct index from the array
  //write the file again
  /*try {
    // Read the jeep.json file
    const rawData = fs.readFileSync('jeep.json');
    const jeeps = JSON.parse(rawData);

    // Assuming you have a parameter in the request body that specifies which item to delete (e.g., req.body.id)
    const itemIdToDelete = req.body.id;

    // Find the index of the item with the specified ID
    const indexToDelete = jeeps.findIndex((jeep) => jeep.id === itemIdToDelete);

    // Check if the item exists
    if (indexToDelete === -1) {
      return res.status(404).json({ message: 'Item not found' });
    }

    // Remove the item from the array using splice
    jeeps.splice(indexToDelete, 1);

    // Write the updated data back to the jeep.json file
    fs.writeFile('jeep.json', JSON.stringify(jeeps, null, 2));

    return res.status(200).json({ message: 'Item deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Internal server error' });
  }*/
});

//Start up the server on port 3000.
var port = process.env.PORT || 2100
app.listen(port, ()=>{
    console.log("Server Running at Localhost:2100")
})