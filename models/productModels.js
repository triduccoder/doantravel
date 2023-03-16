import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
	title:{
		type: String,
		required: true,
		trim: true
	},
	price:{
		type: String,
		required: true,
		trim: true
	},
	description:{
		type: String,
		required: true,
	},
	content:{
		type: String,
		required: true,
	},
	images:{
		type: Array,
		required: true,
	},
	//the loai(trong nuoc, ngoai nuoc)
	category:{
		type: Array,
		required: true,
	},
	checked:{
		type: Boolean,
		default: false,
	},
	//ton kho
	inStock:{
		type: Number,
		default: 0,
	},
	//ban'
	sold:{
		type: Number,
		default: 0,
	}

},{
	timestamps:true,
}
)

let Dataset = mongoose.models.product || mongoose.model('product',productSchema);
export default Dataset