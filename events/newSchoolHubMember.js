const client = require("../index.js");

client.on("guildMemberAdd", async (member) => {

    if(member.guild.id == '619548608898793502') {
        
    let classmates = [
        "931529194972794900",
        "542696612573609992",
        "801103063078928418",
        "934473696071000084",
        "777121915369684993",
        "801395509356003388",
        "901858787110060112",
        "565245955864002609"
   ]

   if(member.user.bot) member.roles.add('943165938851778650')

   if (classmates.indexOf(member.id.toString()) > -1) {
       member.roles.add('943166093973942272')
   } 
   else {
       member.roles.add('949664926169972776')
   }
}
})