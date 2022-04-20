export default function UserModel(mongoose){
    mongoose.model('user', 
        mongoose.Schema(
            {  userid: String,
                phone: String,
                password: String,
                name: String,
                email:String,
                birth:String,
                address:String
            }, { timestamps: true}
        )
    )
}

