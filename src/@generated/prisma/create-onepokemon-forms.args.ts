import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_formsCreateInput } from '../pokemon-forms/pokemon-forms-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonFormsArgs {

    @Field(() => pokemon_formsCreateInput, {nullable:false})
    @Type(() => pokemon_formsCreateInput)
    data!: pokemon_formsCreateInput;
}
