import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitat_namesWhereUniqueInput } from '../pokemon-habitat-names/pokemon-habitat-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonHabitatNamesArgs {

    @Field(() => pokemon_habitat_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitat_namesWhereUniqueInput)
    where!: pokemon_habitat_namesWhereUniqueInput;
}
