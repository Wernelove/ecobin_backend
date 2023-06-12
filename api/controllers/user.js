import {db} from "../db.js";

export const getUsers = (_, res)=>{
    const sql = "SELECT * FROM condominios";

    db.query(sql, (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const mediaNordeste = (_, res)=>{
    const sql = "select SUM(des.peso_reciclado)/COUNT(*) from descartes as des inner join condominios as c on des.id_condominio = c.id where c.regiao = 'nordeste'";

    db.query(sql, (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const totalporregiao = (_, res)=>{
    const sql = "select c.regiao, SUM(des.peso_reciclado), SUM(des.peso_rejeito) from descartes as des inner join condominios as c on des.id_condominio = c.id where des.data between '2022-01-01' and '2022-12-31' group by (c.regiao)";

    db.query(sql, (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const qtdpessoasresiduos = (_, res)=>{
    const sql = "select c.quantidade_moradores, AVG(des.peso_reciclado), AVG(des.peso_rejeito) from descartes as des inner join condominios as c on des.id_condominio = c.id group by c.quantidade_moradores";

    db.query(sql, (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
};

export const distclasseqtd = (_, res) =>{
    const sql = "select c.quantidade_moradores, des.peso_reciclado from descartes as des inner join condominios as c on des.id_condominio = c.id group by c.quantidade_moradores, des.peso_reciclado";

    db.query(sql, (err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}

export const bestCond = (req, res) =>{
    const {regiao} = req.query;
    const sql = "select c.nome, c.estado, c.cidade, SUM(d.peso_rejeito)/SUM(peso_reciclado) as taxa_reciclabilidade from descartes as d inner join condominios as c on c.id = d.id_condominio where c.regiao = ? group by c.nome, c.estado, c.cidade order by taxa_reciclabilidade limit 5";

    db.query(sql, [regiao],(err, data)=>{
        if(err) return res.json(err);

        return res.status(200).json(data);
    })
}
