import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesWhereUniqueInput } from '../pokemon-form-names/pokemon-form-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonFormNamesArgs {

    @Field(() => pokemon_form_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    where!: pokemon_form_namesWhereUniqueInput;
}
