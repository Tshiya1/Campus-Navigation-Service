import express from "express"
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc , getDoc} from 'firebase/firestore';
import { firestore } from './firebaseConfig.js';
const app = express();


// Define a port

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/poi', async (req,res) =>{
    try {
        const querySnapshot = await getDocs(collection(firestore, 'POI'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: 'Error retrieving documents: ' + error.message });
      }
});

app.get('/poi/:id', async (req,res) =>{

    const { id } = req.params;
    try {
      const docRef = doc(firestore, 'POI', id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        res.status(200).json({ id: docSnap.id, ...docSnap.data() });
      } else {
        res.status(404).json({ error: 'No such document!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching document: ' + error.message });
    }

});

app.get('/rental',async (req,res) =>{
    try {
        const querySnapshot = await getDocs(collection(firestore, 'Rental'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: 'Error retrieving documents: ' + error.message });
      }
});

app.get('/rental/:id',async (req,res) =>{

    const { id } = req.params;
    try {
      const docRef = doc(firestore, 'Rental', id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        res.status(200).json({ id: docSnap.id, ...docSnap.data() });
      } else {
        res.status(404).json({ error: 'No such document!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching document: ' + error.message });
    }

});

app.get('/bus',async (req,res) =>{
    try {
        const querySnapshot = await getDocs(collection(firestore, 'BusStops'));
        const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        res.status(200).json(items);
      } catch (error) {
        res.status(500).json({ error: 'Error retrieving documents: ' + error.message });
      }
});

app.get('/bus/:id', async (req,res) =>{

    const { id } = req.params;
    try {
      const docRef = doc(firestore, 'BusStops', id);
      const docSnap = await getDoc(docRef);
  
      if (docSnap.exists()) {
        res.status(200).json({ id: docSnap.id, ...docSnap.data() });
      } else {
        res.status(404).json({ error: 'No such document!' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Error fetching document: ' + error.message });
    }

});



export default app;


// Start the server