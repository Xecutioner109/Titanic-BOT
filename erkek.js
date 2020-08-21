 const Discord = require('discord.js');
const db = require("quick.db")

exports.run = async (client, message, args) => {

  const emoji = client.emojis.find(emoji => emoji.name === "bildirim")
const emoji1 = client.emojis.find(emoji => emoji.name === "kitap")
const emoji2 = client.emojis.find(emoji => emoji.name === "mor")

 if (!message.member.roles.has('743191985153900706') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilginize` , `${emoji1}  Bu komutu kullanmak için gerekli yetkiye sahip değilsin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
let rochelle1 = message.mentions.users.first() || client.users.get(args.join(' ')) || message.guild.members.find(c=> c.id === args[0])
  if (!rochelle1) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1}   Bir kullanıcı etiketlemeli ve ya id girmelisin!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
  let user = message.mentions.users.first();
  let rochelle = message.guild.member(rochelle1)
let isim = args[1]
if(!isim) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir İsim Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 let yas = args[2]
if(!yas) return message.channel.sendEmbed(new Discord.RichEmbed().addField(`${emoji}  Bilgi` , `${emoji1} Geçerli bir Yaş Yazmalısın!`).setColor("2e0101").setFooter(message.author.tag ,message.author.avatarURL).setTimestamp());
 
rochelle.setNickname(`ᛉ ${isim} '${yas}`)
  rochelle.addRole('743135376670982151'); // erkek 1
  rochelle.addRole(''); // erkek 1
  rochelle.addRole(''); // erkek 1
  rochelle.addRole('')
  rochelle.addRole('')

  rochelle.removeRole('743192427497521213'); // kadın 1
  rochelle.removeRole('')
  rochelle.removeRole('')

  rochelle.removeRole('743135376670982149') // kayıtsız 1
  rochelle.removeRole('') // cezalı 1 717777340708552807 717743735705960448
  

    message.react("TEPKİ");
db.add(`erkek.${message.author.id}`, 1);
    const kanal = message.guild.channels.find(c => c.id == "727908216708792435") 
    const embed1 = new Discord.RichEmbed() 
    .setDescription(`${emoji2}  ${rochelle.user}  **Aramıza Hoş Geldin , Seninle Beraber \`${rochelle.guild.memberCount}\` Üyeye Ulaştık**`)
    .setColor("#B0E0E6")
    .setFooter(message.author.tag ,message.author.avatarURL)
    .setTimestamp()
        kanal.send(embed1).then(m => m.delete(10000));
  let embed = new Discord.RichEmbed() 
  .setColor("#E0FFFF")
  .setTitle('Menthe Krallığı', message.author.avatarURL)
  .setDescription(`**${emoji2} ${rochelle.user} Adlı Üye <@&727908153886507098> <@&727951645555687456> <@&727908153068486686> Rolüyle Kayıt Oldu.** `)
.setFooter('Kalite Tesadüf Değildir')
  .setTimestamp()
  return message.channel.send(embed).then(m => m.delete(6000));

 
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["e", "er"],
  kategori: "Yetkili Komutları",
  permLevel: 0
};
exports.help = {
  name: "erkek",
  description: "Sunucuya kaydolmaya ne dersin ?",
  usage: "kayıt isim yaş"
};
