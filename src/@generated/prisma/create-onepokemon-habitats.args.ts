import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_habitatsCreateInput } from '../pokemon-habitats/pokemon-habitats-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonHabitatsArgs {

    @Field(() => pokemon_habitatsCreateInput, {nullable:false})
    @Type(() => pokemon_habitatsCreateInput)
    data!: pokemon_habitatsCreateInput;
}
