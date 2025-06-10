import mysql from "mysql2/promise";

// Create the connection pool with error handling
let pool;
try {
    pool = mysql.createPool({
        host: process.env.host,
        user: process.env.user,
        password: process.env.password,
        database: process.env.database
    });
    console.log("Database connection pool created successfully.");
} catch (error) {
    console.error("Error creating database connection pool:", error);
}

const UserMessage = async (request, response) => {
    try {
        const { name, email, subject, message } = request.body;
        if (!name || !email || !subject || !message) {
            return response.status(401).json({ error: "Enter all inputs" });
        }

        // Check if pool is initialized
        if (!pool) {
            return response.status(500).json({ error: "Database connection pool was not initialized." });
        }

        const connection = await pool.getConnection();
        try {
            await connection.execute(
                "INSERT INTO user (name, email, subject, message) VALUES (?, ?, ?, ?)",
                [name, email, subject, message]
            );
            response.status(201).json({ message: "Sent successfully" });
        } finally {
            connection.release();
        }
    } catch (error) {
        console.error("Database operation failed:", error);
        response.status(501).json({ error: "Internal server error", details: error.message });
    }
};

export default UserMessage;
