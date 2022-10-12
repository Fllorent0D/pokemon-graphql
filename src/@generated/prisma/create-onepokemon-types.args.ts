import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_typesCreateInput } from '../pokemon-types/pokemon-types-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonTypesArgs {

    @Field(() => pokemon_typesCreateInput, {nullable:false})
    @Type(() => pokemon_typesCreateInput)
    data!: pokemon_typesCreateInput;
}
