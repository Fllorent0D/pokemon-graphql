import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_habitat_namesScalarWhereInput } from './pokemon-habitat-names-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_habitat_namesUpdateManyMutationInput } from './pokemon-habitat-names-update-many-mutation.input';

@InputType()
export class pokemon_habitat_namesUpdateManyWithWhereWithoutPokemon_habitatsInput {

    @Field(() => pokemon_habitat_namesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_habitat_namesScalarWhereInput)
    where!: pokemon_habitat_namesScalarWhereInput;

    @Field(() => pokemon_habitat_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_habitat_namesUpdateManyMutationInput)
    data!: pokemon_habitat_namesUpdateManyMutationInput;
}
