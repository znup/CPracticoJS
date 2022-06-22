require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const toCsv = require('to-csv');

const PORT = process.env.REACT_APP_PORT;
const app = express();
const name = 'John Doe';
let billingCommission = 52000.21;
let coverageCommission = 31654.78;
let commissionSellin = billingCommission + coverageCommission;
commissionSellin = Number(commissionSellin.toFixed(2));
// const commissionSellout = 58654.77;
let commissionSellout = 58654.77;
let totalSellinSellout = commissionSellin + commissionSellout;
totalSellinSellout = Number(totalSellinSellout.toFixed(2));
const month = 'Mayo';
const year = '2040';
const content = [
  {
    name,
    moneySellin: commissionSellin,
    moneySellout: commissionSellout,
  },
  {
    name,
    moneySellin: commissionSellin,
    moneySellout: commissionSellout,
  },
  {
    name,
    moneySellin: commissionSellin,
    moneySellout: commissionSellout,
  },
];
// const myArray = [54864, 8716841, 897611, 81644068, 68400654];

const separator = (commissions) => {
  let str = commissions.toString().split('.');
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return str.join('.');
};
commissionSellin = separator(commissionSellin);
commissionSellout = separator(commissionSellout);
totalSellinSellout = separator(totalSellinSellout);
billingCommission = separator(billingCommission);
coverageCommission = separator(coverageCommission);
// const myNewArray = myArray.map((commission) => separator(commission));
// console.log(myNewArray);

// mailtrap
// app.post('/mail', (req, res) => {
//   let transporter = nodemailer.createTransport({
//     host: 'smtp.mailtrap.io',
//     port: 2525,
//     auth: {
//       user: '7619f6ee336427',
//       pass: '96f6c1fe98a067',
//     },
//   });
app.post('/mail', (req, res) => {
  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_EMAIL,
      pass: process.env.MAIL_EMAIL_PASSWORD,
    },
  });
  // Si se usa promesa
  // let info = await transporter.sendMail({
  return transporter.sendMail(
    {
      from: '"💵 BumiMail 🪙👻" <process.env.MAIL_EMAIL>',
      to: process.env.MAIL_TESTS,
      subject: '🪙💵Llego su Bomisión 💵✔🪙',
      html: `<table
      width="50%"
      height="auto"
      cellpadding="0"
      cellspacing="0"
      textalign="center"
      align="center"
      color="#000000"
      bgcolor="#ffffff"
      backgroundcolor="#ffffff"
      style="width: 100%; max-width: 600px; border-right: 3px solid #13322b;border-left: 3px solid #13322b;">
        <tr bgcolor="#13322B">
        <td
          height="180px"
          align="center"
          style="padding-top: 20px; padding-bottom: 20px">
          <a
            border="0"
            style="text-decoration: none">
            <img
              src="cid:bomucalogo"
              alt=" Logo bomuca del sistema comisiones con el pseudonimo Bomisiones"
              width="100%"
              bg="black"
              style="
                min-width: 320px;
                max-width: 400px;
                height: auto;
                display: block;"/>
          </a>
        </td>
        </tr>
        <tr>
          <td align="center">
            <table cellpadding="0" cellspacing="0" border="0" width="100%">
              <tr>
                <td style="padding: 36px 0 0 0; color: #242424">
                  <p
                    style="
                      margin: 0 0 0 0;
                      font-size: 24px;
                      font-family: Arial, sans-serif;
                      text-align: center;">
                    Notificación de Comisiones
                  </p>
                </td>
              </tr>
              <tr>
                <td
                  height="50"
                  style="
                    display: block;
                    padding-top: 30px;
                    padding-bottom: 20px;
                    color: #242424;
                    font-family: Arial, Helvetica, sans-serif;
                    font-size: 28px;
                    font-weight: bold;
                    text-align: center;
                    text-transform: capitalize;">
                  Hola, ${name}!
                </td>
              </tr>
              <tr>
                <td
                  style="
                    display: block;
                    margin-top: -40px;
                    margin-bottom: 20px;
                    color: #242424;
                    font-size: 20px;
                    font-family: Arial, sans-serif;
                    text-align: center;">
                  Fecha: ${month} - ${year}
                </td>
              </tr>
              <tr>
                <td>
                  <table
                    role="presentation"
                    style="
                      width: 100%;
                      border-collapse: collapse;
                      border: 0;
                      border-spacing: 0;
                      background-color: #13322b;
                      font-weight: bold;">
                    <tr>
                      <td
                        style="
                          width: 10px;
                          padding: 0;
                          background-color: #ffffff;
                          font-size: 0;
                          line-height: 0;">
                        &nbsp;
                      </td>
                      <td
                        style="
                          width: 260px;
                          padding: 0;
                          vertical-align: top;
                          color: #ffffff;
                          font-family: Arial, sans-serif;
                          font-size: 16px;
                          text-align: center;
                          text-transform: uppercase;">
                        <p style="
                        padding: 0px;">SellIn</p>
                        <p
                          style="
                            padding: 10px;
                            background-color: #ffffff;
                            color: #242424;
                            font-family: Arial, sans-serif;
                            font-size: 18px;
                            text-align: center;">
                          $${commissionSellin}
                        </p>      
                        <td
                          style="
                            width: 10px;
                            padding: 0;
                            background-color: #ffffff;
                            font-size: 0;
                            line-height: 0;">
                          &nbsp;
                        </td>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <tr>
              <td>
                <table
                  role="presentation"
                  style="
                    width: 100%;
                    border-collapse: collapse;
                    border: 0;
                    border-spacing: 0;
                    background-color: #ffffff;
                    font-size: 14px;">
                    <tr>
                      <td style="
                        width: 100%;
                        padding: 0 0 0 100px;
                        vertical-align: top;
                        background-color: #ffffff;
                        color: #242424;
                        font-family: Arial, sans-serif;
                        text-align: left;
                        font-size: 14px;
                        text-transform: uppercase;
                        line-height: 5px; ">
                        <p style="font-weight: bold; ">
                          Facturación
                        </p>
                        <p style="font-weight: bold">
                          Cobertura
                        </p>
                      </td>
                      <td style="
                        width: 260px;
                        padding: 0 100px 0 0;
                        vertical-align: top;
                        color: #242424;
                        font-family: Arial, sans-serif;
                        font-size: 14px;
                        text-align: right;
                        text-transform: uppercase;
                        line-height: 5px; ">
                        <p >$${billingCommission}</p>
                        <p >$${coverageCommission}</p>
                      </td>
                    </tr>               
                </table>
              </td>
            </tr>  
          </td>
        </tr>
        <tr>
          <td style="
            margin: 0 10px 0 10px;
            padding: 0 20px 0 20px;
            vertical-align: top;
            color: #ffffff;
            font-family: Arial, sans-serif;
            font-size: 16px;
            text-align: center;
            text-transform: uppercase; ">
            <p style="
              margin: 5px 0;
              padding: 15px;
              background-color: #13322b;
              font-weight: bold; ">
                SellOut
            </p>
            <p style="
              margin: 5px 0;
              padding: 5px;
              background-color: #ffffff;
              color: #242424;
              font-family: Arial, sans-serif;
              font-size: 18px;
              font-weight: bold;
              text-align: center;">
                $${commissionSellout}
            </p>
          </td>         
        </tr>
        <tr>
          <td style="
            width: 260px;
            margin: 0 10px 0 10px;
            padding: 0 20px 0 20px;
            vertical-align: top;
            color: #ffffff;
            font-family: Arial, sans-serif;
            text-align: center;
            text-transform: uppercase; ">
            <p style="
              margin: 5px 0;
              padding: 20px;
              background-color: #13322b;
              font-size: 24px;
              font-weight: bold; ">
                TOTAL
            </p>
            <p style="
              margin: 5px 0;
              padding: 5px;
              background-color: #ffffff;
              color: #242424;
              font-family: Arial, sans-serif;
              font-size: 22px;
              font-weight: bold;
              text-align: center;">
                $${totalSellinSellout}
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding: 30px 0; border-bottom: 3px solid #13322b" align="center">
            <p style="font-size: 14px; font-family: Arial, sans-serif;">*Comisión calculada antes de impuestos.</p>
            <p style="font-size: 14px; font-family: Arial, sans-serif;">*Detalles de Bomisiones en el excel adjunto.</p>
            <p style="font-size: 10px; font-family: Arial, sans-serif;">"Esta es una cuenta de correo no monitoreada. \nSu contenido es un mensaje automático generado por nuestro sistema. \nPor favor no responda a este correo.</p>
            <img
              src="cid:emoji-coins"
              width="10%"/>
          </td>
        </tr>
      </table>`,
      attachments: [
        {
          filename: 'LogoBomucaBlanco.png',
          path: './src/img/LogoBomucaBlanco.png',
          cid: 'bomucalogo',
        },
        {
          filename: 'emoji-coins.png',
          path: './src/img/emoji-coins.png',
          cid: 'emoji-coins',
        },
        {
          filename: `DetalleComision${month}_${year}` + '.csv',
          content: toCsv(content),
        },
      ],
    },
    // (err, info) => {
    (err) => {
      if (err) res.status(500).send({ success: false, error: err });
      return res.status(200).send({
        success: true,
        message: 'Email enviado',
      });
    }
  );
});

app.listen(PORT, () => console.log(`Server corriendo sobre el puerto ${PORT}`));
