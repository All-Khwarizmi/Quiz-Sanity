import { groq } from "next-sanity";

const CLASSES = groq`
 *[_type == "classe" ]
`;