import OpenAI from "openai";


export const openai = new OpenAI({
    apiKey: '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',
    dangerouslyAllowBrowser:true,
});
 const form = document.querySelector('#generate-form') as HTMLFormElement;

 const formData = new FormData(form);

 const prompt = formData.get('prompt') as string;

const chatCompletion = await openai.chat.completions.create({
    messages: [
    {
    role:"system", content:`Tu crées des sites avec Tailwind.
    Ta tâche est généré du code HTML avec tailwind en fonction du prompt de l'utilisateur
    Tu renvoies du HTML uniquement avant ou après.
    Tu renvoies du HTML valide.
    Tu n'ajoutes jamais de syntaxe markdown.`
    },
    {role: "user", content: prompt }
    ],
    model: "gpt-3.5-turbo",
    });

    console.log(chatCompletion);
    