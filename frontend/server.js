const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:5000";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "form.html"));
});

app.post("/submit", async (req, res) => {
    try {
        const response = await fetch(`${BACKEND_URL}/submittodoitem`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                itemName: req.body.itemName,
                itemDescription: req.body.itemDescription
            })
        });

        const result = await response.json();

        if (!response.ok) {
            return res.status(response.status).send(`
                <h2>Error</h2>
                <p>${result.message}</p>
                <a href="/">Go back</a>
            `);
        }

        res.send(`
            <h2>${result.message}</h2>
            <p><strong>Item Name:</strong> ${result.data.itemName}</p>
            <p><strong>Item Description:</strong> ${result.data.itemDescription}</p>
            <a href="/">Submit another item</a>
        `);

    } catch (error) {
        console.error(error);

        res.status(500).send(`
            <h2>Backend connection error</h2>
            <p>Could not connect to Flask backend.</p>
            <a href="/">Go back</a>
        `);
    }
});

app.listen(PORT, () => {
    console.log(`Frontend running on http://localhost:${PORT}`);
});