import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_typesScalarWhereInput } from './pokemon-types-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_typesUpdateManyMutationInput } from './pokemon-types-update-many-mutation.input';

@InputType()
export class pokemon_typesUpdateManyWithWhereWithoutTypesInput {

    @Field(() => pokemon_typesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_typesScalarWhereInput)
    where!: pokemon_typesScalarWhereInput;

    @Field(() => pokemon_typesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_typesUpdateManyMutationInput)
    data!: pokemon_typesUpdateManyMutationInput;
}
