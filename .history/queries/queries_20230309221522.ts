import { groq } from "next-sanity";

const ALLCLASSES = groq`
 *[_type == "classe" ]
`;