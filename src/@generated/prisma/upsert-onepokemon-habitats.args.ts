import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsWhereUniqueInput } from '../pokemon-habitats/pokemon-habitats-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsCreateInput } from '../pokemon-habitats/pokemon-habitats-create.input';
import { pokemon_habitatsUpdateInput } from '../pokemon-habitats/pokemon-habitats-update.input';

@ArgsType()
export class UpsertOnepokemonHabitatsArgs {

    @Field(() => pokemon_habitatsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_habitatsWhereUniqueInput)
    where!: pokemon_habitatsWhereUniqueInput;

    @Field(() => pokemon_habitatsCreateInput, {nullable:false})
    @Type(() => pokemon_habitatsCreateInput)
    create!: pokemon_habitatsCreateInput;

    @Field(() => pokemon_habitatsUpdateInput, {nullable:false})
    @Type(() => pokemon_habitatsUpdateInput)
    update!: pokemon_habitatsUpdateInput;
}
