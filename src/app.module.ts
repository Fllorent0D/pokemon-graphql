import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { PrismaService } from "./database/prisma.service";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { join } from "path";
import { PokemonSpeciesResolver } from "./pokemon/pokemon_species.resolver";
import { PokemonResolver } from "./pokemon/pokemon.resolver";
import { PokemonTypesResolver } from "./pokemon/pokemon_types.resolver";
import { TypesResolver } from "./pokemon/types.resolver";

const resolvers = [
  PokemonSpeciesResolver,
  PokemonResolver,
  PokemonTypesResolver,
  TypesResolver
];


@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      debug: true,
      playground: true,
      autoSchemaFile: join(process.cwd(), "src/schema.gql")
    })
  ],
  controllers: [AppController],
  providers: [
    AppService,
    PrismaService,
    ...resolvers
  ]
})
export class AppModule {
}
