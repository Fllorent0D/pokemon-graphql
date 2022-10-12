import { Args, Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { PrismaService } from "../database/prisma.service";
import { pokemon_types } from "../@generated/pokemon-types/pokemon-types.model";
import { types } from "../@generated/types/types.model";
import { FindFirstpokemonHabitatsArgs } from "../@generated/prisma/find-firstpokemon-habitats.args";
import { FindManypokemonTypesArgs } from "../@generated/prisma/find-manypokemon-types.args";
import { FindManytypesArgs } from "../@generated/types/find-manytypes.args";
import { set } from "lodash";
import { FindManymovesArgs } from "../@generated/moves/find-manymoves.args";

@Resolver(types)
export class TypesResolver {

  constructor(
    private readonly prismaService: PrismaService
  ) {
  }

  @ResolveField("moves")
  async moves(
    @Parent() types: types,
    @Args() findManymovesArgs: FindManymovesArgs
  ): Promise<types> {
    set(findManymovesArgs, 'where.type_id.equals', types.id)
    // @ts-ignore
    return await this.prismaService.moves.findMany(findManymovesArgs);
  }


}
