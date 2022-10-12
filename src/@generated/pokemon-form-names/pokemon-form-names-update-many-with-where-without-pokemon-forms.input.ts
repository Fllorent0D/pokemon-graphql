import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_form_namesScalarWhereInput } from './pokemon-form-names-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_form_namesUpdateManyMutationInput } from './pokemon-form-names-update-many-mutation.input';

@InputType()
export class pokemon_form_namesUpdateManyWithWhereWithoutPokemon_formsInput {

    @Field(() => pokemon_form_namesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_form_namesScalarWhereInput)
    where!: pokemon_form_namesScalarWhereInput;

    @Field(() => pokemon_form_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_form_namesUpdateManyMutationInput)
    data!: pokemon_form_namesUpdateManyMutationInput;
}
