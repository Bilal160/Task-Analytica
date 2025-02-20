import openai from "../config/openAi";

export const chatFunc = async (prompt: string) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are an AI assistant.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      max_tokens: 150,
    });
    return response.choices[0].message.content;
  } catch (error: any) {
    return error.message;
  }
};
