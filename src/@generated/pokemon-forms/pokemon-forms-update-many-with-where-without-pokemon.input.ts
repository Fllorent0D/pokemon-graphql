import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_formsScalarWhereInput } from './pokemon-forms-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_formsUpdateManyMutationInput } from './pokemon-forms-update-many-mutation.input';

@InputType()
export class pokemon_formsUpdateManyWithWhereWithoutPokemonInput {

    @Field(() => pokemon_formsScalarWhereInput, {nullable:false})
    @Type(() => pokemon_formsScalarWhereInput)
    where!: pokemon_formsScalarWhereInput;

    @Field(() => pokemon_formsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_formsUpdateManyMutationInput)
    data!: pokemon_formsUpdateManyMutationInput;
}
