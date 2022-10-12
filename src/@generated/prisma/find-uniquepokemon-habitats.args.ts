import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsWhereUniqueInput } from '../pokemon-habitats/pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonHabitatsArgs {

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitatsWhereUniqueInput)
    where!: pokemon_habitatsWhereUniqueInput;
}
