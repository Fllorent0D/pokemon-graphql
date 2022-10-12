import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsUpdateManyMutationInput } from '../pokemon-habitats/pokemon-habitats-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_habitatsWhereInput } from '../pokemon-habitats/pokemon-habitats-where.input';

@ArgsType()
export class UpdateManypokemonHabitatsArgs {

    @Field(() => pokemon_habitatsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_habitatsUpdateManyMutationInput)
    data!: pokemon_habitatsUpdateManyMutationInput;

    @Field(() => pokemon_habitatsWhereInput, {nullable:true})
    @Type(() => pokemon_habitatsWhereInput)
    where?: pokemon_habitatsWhereInput;
}
