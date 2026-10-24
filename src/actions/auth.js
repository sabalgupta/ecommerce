import { connectDatabase } from "@/lib/connect";
import { User } from "@/models/users";
import bcrypt from "bcrypt";

export const handleSignup = async (formData) => {
    "use server"
    try {
        const username = formData.get("username");
        const password = formData.get("password");
    
        await connectDatabase();
        let user = await User.findOne({ username });
        if (user) throw new Error("Username already taken.");
    
        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ username, password: hashedPassword });
        await user.save();
    } catch (error) {
        console.log(error);
    }

}
