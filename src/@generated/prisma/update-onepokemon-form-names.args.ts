import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesUpdateInput } from '../pokemon-form-names/pokemon-form-names-update.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesWhereUniqueInput } from '../pokemon-form-names/pokemon-form-names-where-unique.input';

@ArgsType()
export class UpdateOnepokemonFormNamesArgs {

    @Field(() => pokemon_form_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_form_namesUpdateInput)
    data!: pokemon_form_namesUpdateInput;

    @Field(() => pokemon_form_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    where!: pokemon_form_namesWhereUniqueInput;
}
