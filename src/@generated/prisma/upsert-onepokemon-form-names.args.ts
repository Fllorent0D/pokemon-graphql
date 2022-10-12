import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesWhereUniqueInput } from '../pokemon-form-names/pokemon-form-names-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesCreateInput } from '../pokemon-form-names/pokemon-form-names-create.input';
import { pokemon_form_namesUpdateInput } from '../pokemon-form-names/pokemon-form-names-update.input';

@ArgsType()
export class UpsertOnepokemonFormNamesArgs {

    @Field(() => pokemon_form_namesWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_form_namesWhereUniqueInput)
    where!: pokemon_form_namesWhereUniqueInput;

    @Field(() => pokemon_form_namesCreateInput, {nullable:false})
    @Type(() => pokemon_form_namesCreateInput)
    create!: pokemon_form_namesCreateInput;

    @Field(() => pokemon_form_namesUpdateInput, {nullable:false})
    @Type(() => pokemon_form_namesUpdateInput)
    update!: pokemon_form_namesUpdateInput;
}
