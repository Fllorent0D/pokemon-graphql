import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesCreateInput } from '../pokemon-form-names/pokemon-form-names-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonFormNamesArgs {

    @Field(() => pokemon_form_namesCreateInput, {nullable:false})
    @Type(() => pokemon_form_namesCreateInput)
    data!: pokemon_form_namesCreateInput;
}
