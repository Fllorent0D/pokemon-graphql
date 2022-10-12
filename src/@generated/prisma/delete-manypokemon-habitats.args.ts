import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsWhereInput } from '../pokemon-habitats/pokemon-habitats-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonHabitatsArgs {

    @Field(() => pokemon_habitatsWhereInput, {nullable:true})
    @Type(() => pokemon_habitatsWhereInput)
    where?: pokemon_habitatsWhereInput;
}
