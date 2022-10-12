import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_form_namesUpdateManyMutationInput } from '../pokemon-form-names/pokemon-form-names-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesWhereInput } from '../pokemon-form-names/pokemon-form-names-where.input';

@ArgsType()
export class UpdateManypokemonFormNamesArgs {

    @Field(() => pokemon_form_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_form_namesUpdateManyMutationInput)
    data!: pokemon_form_namesUpdateManyMutationInput;

    @Field(() => pokemon_form_namesWhereInput, {nullable:true})
    @Type(() => pokemon_form_namesWhereInput)
    where?: pokemon_form_namesWhereInput;
}
