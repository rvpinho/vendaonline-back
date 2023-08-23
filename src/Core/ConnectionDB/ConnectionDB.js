const sql = require('mssql');

const config = {
  user: 'SA',
  password: 'Ravapi123',
  server: 'localhost',
  database: 'vendaonline',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

// Criando uma instância de pool de conexões
const pool = new sql.ConnectionPool(config);

async function connectToDB() {
  return new Promise((resolve, reject) => {
      pool.connect()
      .then(() => {
          console.log('Conexão com o SQL Server estabelecida.');
          resolve(pool); // Resolvendo a promessa com o pool de conexões
      })
      .catch(err => {
          console.error('Erro ao conectar ao SQL Server:', err);
          reject(err); // Rejeitando a promessa em caso de erro
      });
    });
}

const executeQuery = async (query) => {
    try {
      await pool.connect();
      const result = await pool.request().query(query);
      return result.recordset;
    } catch (error) {
      throw error;
    } finally {
      pool.close();
    }
  };

module.exports = {
    connectToDB,
    executeQuery
};


