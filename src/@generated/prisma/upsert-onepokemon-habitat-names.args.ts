import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereUniqueInput } from '../pokemon-habitat-names/pokemon-habitat-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesCreateInput } from '../pokemon-habitat-names/pokemon-habitat-names-create.input';
import { pokemon_habitat_namesUpdateInput } from '../pokemon-habitat-names/pokemon-habitat-names-update.input';

@ArgsType()
export class UpsertOnepokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    where!: pokemon_habitat_namesWhereUniqueInput;

    @Field(() => pokemon_habitat_namesCreateInput, {nullable:false})
    @Type(() => pokemon_habitat_namesCreateInput)
    create!: pokemon_habitat_namesCreateInput;

    @Field(() => pokemon_habitat_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_habitat_namesUpdateInput)
    update!: pokemon_habitat_namesUpdateInput;
}
