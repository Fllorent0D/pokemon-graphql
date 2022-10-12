import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../database/prisma.service";
import { pokemon_types } from "../@generated/pokemon-types/pokemon-types.model";
import { types } from "../@generated/types/types.model";

@Resolver(pokemon_types)
export class PokemonTypesResolver {

  constructor(
    private readonly prismaService: PrismaService
  ) {
  }

  @ResolveField("types")
  async types(
    @Parent() pokemonTypes: pokemon_types
  ): Promise<types> {
    return await this.prismaService.types.findFirst({ where: { id: { equals: pokemonTypes.type_id } } });
  }


}
