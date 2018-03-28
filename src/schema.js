/**
 * Created by carlos on 27/03/18.
 */
export const typeDefs = `
type Lembrete {
    id: Int!
    title: String
  }

  # the schema allows the following query:
  type Query {
    lembretes: [Lembrete]
  }

  # this schema allows the following mutation:
  type Mutation {
    upLembrete (
      lembreteId: Int!
    ): Lembrete
  }
`
;