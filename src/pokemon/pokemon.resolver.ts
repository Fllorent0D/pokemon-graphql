import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { pokemon } from "../@generated/pokemon/pokemon.model";
import { pokemon_species } from "../@generated/pokemon-species/pokemon-species.model";
import { set } from "lodash";
import { FindManypokemonArgs } from "../@generated/pokemon/find-manypokemon.args";
import { PrismaService } from "../database/prisma.service";
import { FindManypokemonTypesArgs } from "../@generated/prisma/find-manypokemon-types.args";
import { pokemon_types } from "../@generated/pokemon-types/pokemon-types.model";

@Resolver(pokemon)
export class PokemonResolver {

  constructor(
    private readonly prismaService: PrismaService
  ) {
  }

  @Query(() => [pokemon])
  pokemon(@Args() findManypokemonArgs: FindManypokemonArgs) {
    // @ts-ignore
    return this.prismaService.pokemon.findMany(findManypokemonArgs);
  }


  @ResolveField("pokemon_species")
  async pokemon_species(
    @Parent() pokemon: pokemon
  ): Promise<pokemon_species> {
    return await this.prismaService.pokemon_species.findFirst({ where: { id: { equals: pokemon.species_id } } });
  }

  @ResolveField("pokemon_types")
  async pokemon_types(
    @Parent() pokemon: pokemon,
    @Args() findFirstpokemonSpeciesProseArgs: FindManypokemonTypesArgs
  ): Promise<pokemon_types[]> {
    set(findFirstpokemonSpeciesProseArgs, "where.pokemon_id.equals", pokemon.id);
    // @ts-ignore
    return await this.prismaService.pokemon_types.findMany(findFirstpokemonSpeciesProseArgs);
  }

}
