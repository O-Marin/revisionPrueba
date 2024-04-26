import pool from "../config/db.js";

const addSkaterQuery = async (skater) => {
  try {
    const values = Object.values(skater);
    const consultaSkater = {
      text: `insert into skaters (email, nombre, password, anos_experiencia, especialidad, foto, estado) values($1,$2,$3,$4,$5,$6,'f') returning * `,
      values: values,
    };

    const result = await pool.query(consultaSkater);
    console.log(result.rows[0]);
    return result.rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getSkatersQuery = async()=>{
    try {
        const consultaGetSKater = {
            text: `select * from skaters`,
        }
        const result = await pool.query(consultaGetSKater);
        console.log(result.rows);
        return result.rows;
    } catch (error) {
        console.log(error);
    }
}

const getSkaterQuery = async(email,password)=>{
    const getSkater = {
        text:`SELECT * FROM skaters WHERE email = '${email}' AND password = '${password}'`,
        values:[email, password],
    }
    const result = await pool.query(getSkater);
    return result.rows;
}

export {addSkaterQuery, getSkatersQuery, getSkaterQuery};
