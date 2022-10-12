import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { pokemon_species } from "../@generated/pokemon-species/pokemon-species.model";
import { PrismaService } from "../database/prisma.service";
import { FindManypokemonSpeciesArgs } from "../@generated/prisma/find-manypokemon-species.args";
import { FindManypokemonSpeciesNamesArgs } from "../@generated/prisma/find-manypokemon-species-names.args";
import { pokemon_species_names } from "../@generated/pokemon-species-names/pokemon-species-names.model";
import {
  FindManypokemonSpeciesFlavorSummariesArgs
} from "../@generated/prisma/find-manypokemon-species-flavor-summaries.args";
import { set } from "lodash";
import { pokemon_habitats } from "src/@generated/pokemon-habitats/pokemon-habitats.model";
import {
  pokemon_species_flavor_summaries
} from "../@generated/pokemon-species-flavor-summaries/pokemon-species-flavor-summaries.model";
import { pokemon_species_prose } from "../@generated/pokemon-species-prose/pokemon-species-prose.model";
import { FindFirstpokemonHabitatsArgs } from "../@generated/prisma/find-firstpokemon-habitats.args";
import { FindFirstpokemonSpeciesProseArgs } from "../@generated/prisma/find-firstpokemon-species-prose.args";

@Resolver(pokemon_species)
export class PokemonSpeciesResolver {

  constructor(
    private readonly prismaService: PrismaService
  ) {
  }

  @Query(() => [pokemon_species])
  pokemonSpecies(@Args() findManyPokemonSpeciesArgs: FindManypokemonSpeciesArgs) {
    // @ts-ignore
    return this.prismaService.pokemon_species.findMany(findManyPokemonSpeciesArgs);
  }

  @ResolveField("pokemon_species_names")
  async pokemon_species_names(
    @Parent() specie: pokemon_species,
    @Args() findManyPokemonSpeciesNamesArgs: FindManypokemonSpeciesNamesArgs
  ): Promise<pokemon_species_names[]> {
    set(findManyPokemonSpeciesNamesArgs, "where.pokemon_species_id.equals", specie.id);
    // @ts-ignore
    return await this.prismaService.pokemon_species_names.findMany(findManyPokemonSpeciesNamesArgs);
  }

  @ResolveField("pokemon_species_flavor_summaries")
  async pokemon_species_flavor_summaries(
    @Parent() specie: pokemon_species,
    @Args() findManypokemonSpeciesFlavorSummariesArgs: FindManypokemonSpeciesFlavorSummariesArgs
  ): Promise<pokemon_species_flavor_summaries[]> {
    set(findManypokemonSpeciesFlavorSummariesArgs, "where.pokemon_species_id.equals", specie.id);
    // @ts-ignore
    return await this.prismaService.pokemon_species_flavor_summaries.findMany(findManypokemonSpeciesFlavorSummariesArgs);
  }

  @ResolveField("pokemon_habitats")
  async pokemon_habitats(
    @Parent() specie: pokemon_species,
    @Args() findFirstpokemonHabitatsArgs: FindFirstpokemonHabitatsArgs
  ): Promise<pokemon_habitats> {
    return await this.prismaService.pokemon_habitats.findFirst({ where: { id: { equals: specie.habitat_id } } });
  }

  @ResolveField("pokemon_species_prose")
  async pokemon_species_prose(
    @Parent() specie: pokemon_species,
    @Args() findFirstpokemonSpeciesProseArgs: FindFirstpokemonSpeciesProseArgs
  ): Promise<pokemon_species_prose[]> {
    set(findFirstpokemonSpeciesProseArgs, "where.pokemon_species_id", specie.id);
    // @ts-ignore
    return await this.prismaService.pokemon_species_prose.findMany(findManypokemonHabitatsArgs);
  }


}
