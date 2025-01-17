import mongoose,{ Schema } from "mongoose";

export type IComment = {
  user: string;
  comment: string;
  time: Date;
}

export type IBlog = {
  title: string;
  slug: string; 
  date: Date;
  description: string; // for preview
  content: string; // for individual blog page
  img: string;
  comments: IComment[]; // array for comments
};


// mongoose schema 
const blogSchema = new Schema<IBlog>({
    title: { type: String, required: true },
    img: { type: String, required: true },
    slug: { type: String, required: true },
    date: { type: Date, required: false, default: new Date()},
    description: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{
      user: { type: String, required: true },
      comment: { type: String, required: true },
      time: { type: Date, required: false, default: new Date()},
    }]
})

// defining the collection and model
const Blog = mongoose.models['blogs'] ||
mongoose.model('blogs', blogSchema);

export default Blog;