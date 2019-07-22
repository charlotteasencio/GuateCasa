const graphql = require('graphql')
const Casa = require('../model/casa')

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLInt
} = graphql

const CasaType = new GraphQLObjectType({
    name: 'Casa',
    fields: () => ({
        id: {type:GraphQLID},
        address: {type: GraphQLString},
        city: {type: GraphQLString},
        state: {type: GraphQLString},
        zipcode: {type: GraphQLInt}
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        casa:{
            type: CasaType,
            args:{id: {type: GraphQLID} },
            resolve(parent, args) {
                return Casa.findById(args.id)
            }
        },
        casas: {
            type: new GraphQLList(CasaType),
            resolve(parent, args) {
                return Casa.find({})
            }
        },
        cityCasa: {
            type: new GraphQLList(CasaType),
            args: {city: {type: GraphQLString}},
            resolve(parent, args) {
                return Casa.find({city: args.city})
            }
        },
        zipcodeCasa: {
            type: new GraphQLList(CasaType),
            args: {zipcode: {type: GraphQLInt}},
            resolve(parent, args) {
                return Casa.find({zipcode: args.zipcode})
            }
        }
    }
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addCasa: {
            type: CasaType,
            args: {
                address: {type: new GraphQLNonNull(GraphQLString)},
                city: {type: new GraphQLNonNull(GraphQLString)},
                state: {type: new GraphQLNonNull(GraphQLString)},
                zipcode: {type: new GraphQLNonNull(GraphQLInt)}
            },
            resolve(parent, args) {
                let casa = new Casa({
                    address: args.address,
                    city: args.city,
                    state: args.state,
                    zipcode: args.zipcode
                })
                return casa.save()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})