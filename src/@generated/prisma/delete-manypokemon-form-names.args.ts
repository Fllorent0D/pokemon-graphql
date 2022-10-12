import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesWhereInput } from '../pokemon-form-names/pokemon-form-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonFormNamesArgs {

    @Field(() => pokemon_form_namesWhereInput, {nullable:true})
    @Type(() => pokemon_form_namesWhereInput)
    where?: pokemon_form_namesWhereInput;
}
