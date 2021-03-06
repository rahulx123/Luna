module.exports = {

    doc         : "Documentation",
    notFound    : "La commande que vous recherchez n'a pas été trouvée, vous devriez peut-être vérifier la liste de toutes les commandes disponibles.",
    pTitle      : ( cName ) => `\` ${cName[0].toUpperCase()}${cName.slice(1)} \` Informations`,
    pSName      : "Syntax",
    pSValue     : ( p, cmdUs ) => `\`\`\`${p}${cmdUs}\`\`\`\`[]\` = Arguments obligatoires, — \`{}\` = Arguments facultatifs.`,
    pEName      : "Example",
    pEValue     : ( p, cmdEx ) => `\`\`\`${cmdEx && cmdEx.map( ( ex ) => `${p}${ex}` ).join( "\n" ) || "Aucun exemple fourni" }\`\`\`\n`,
    firstTitle  : "Billi Premium - à la rescousse !",
    firstDesc   : "Billi Premium est un adorable bot discord open source entièrement personnalisable créé en javascript, utilisant Discord.js et mongoDB qui est en constante évolution !\n\nVous pouvez afficher les différentes commandes par catégories via les boutons ci-dessous, ou consulter la liste plus détaillée des commandes [ici](https://lunadoc.vercel.app/).\n\n[Ajoutez-moi à votre serveur](https://discord.com/oauth2/authorize?client_id=662331369392832512&permissions=8&scope=bot%20applications.commands) - [Achetez-moi un café](https://www.buymeacoffee.com/Asgarrrr)",
    list        : "Liste des commandes",
    footer      : ( p ) => `Vous pouvez taper ${p}help avec le nom de la commande pour plus de détails`

};