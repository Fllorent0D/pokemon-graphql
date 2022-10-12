import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemonCreateInput } from './pokemon-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonArgs {

    @Field(() => pokemonCreateInput, {nullable:false})
    @Type(() => pokemonCreateInput)
    data!: pokemonCreateInput;
}
