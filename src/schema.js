/**
 * Created by carlos on 27/03/18.
 */
export const typeDefs = `
type Channel {
   id: ID!                # "!" denotes a required field
   titulo: String
}
# This type specifies the entry points into our API. In this case
# there is only one - "channels" - which returns a list of channels.
type Query {
   channels: [Channel]    # "[]" means this is a list of channels
}
`;