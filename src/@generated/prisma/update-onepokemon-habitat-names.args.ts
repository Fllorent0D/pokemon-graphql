import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesUpdateInput } from '../pokemon-habitat-names/pokemon-habitat-names-update.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesWhereUniqueInput } from '../pokemon-habitat-names/pokemon-habitat-names-where-unique.input';

@ArgsType()
export class UpdateOnepokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_habitat_namesUpdateInput)
    data!: pokemon_habitat_namesUpdateInput;

    @Field(() => pokemon_habitat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    where!: pokemon_habitat_namesWhereUniqueInput;
}
