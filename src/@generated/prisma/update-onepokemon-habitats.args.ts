import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsUpdateInput } from '../pokemon-habitats/pokemon-habitats-update.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsWhereUniqueInput } from '../pokemon-habitats/pokemon-habitats-where-unique.input';

@ArgsType()
export class UpdateOnepokemonHabitatsArgs {

    @Field(() => pokemon_habitatsUpdateInput, {nullable:false})
    @Type(() => pokemon_habitatsUpdateInput)
    data!: pokemon_habitatsUpdateInput;

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitatsWhereUniqueInput)
    where!: pokemon_habitatsWhereUniqueInput;
}
