import conn from "../config/conn.js";

const tableFeedback = /*sql*/ `
    CREATE TABLE IF NOT EXISTS feedbacks( 
        feedback_id VARCHAR(60) PRIMARY KEY,
        participante_id VARCHAR(60) NOT NULL,
        evento_id VARCHAR(60) NOT NULL,
        nota INT NOT NULL,
        comentarios VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP

        FOREIGN KEY (participante_id) REFERENCES participantes(participante_id)
        FOREIGN KEY (evento_id) REFERENCES eventos(evento_id)
    )
`

conn.query(tableFeedback, (err) => {
    if(err) {
        console.error(err)
        return
    }
    console.log("Tabela de [Feedback] criado com sucesso")
})