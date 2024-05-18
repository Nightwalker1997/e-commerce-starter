import prisma from "@/libs/prismadb";

const getUsers = async() => {
    try{
        
        const users = await prisma.user.findMany({
            select:{
                id: true,
                email: true,
                orders: { select: {priceInCents: true}}
            },
            orderBy: {
                createdAt: "desc"
            }
        })

        if(!users){
            return null;
        }
        console.log("getUsers action: ", users)
        
        return users;

    } catch (error){
        
        return null;
    
    }
}

export default getUsers;