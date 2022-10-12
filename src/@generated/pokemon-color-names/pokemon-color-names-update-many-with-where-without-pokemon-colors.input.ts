import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_color_namesScalarWhereInput } from './pokemon-color-names-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_color_namesUpdateManyMutationInput } from './pokemon-color-names-update-many-mutation.input';

@InputType()
export class pokemon_color_namesUpdateManyWithWhereWithoutPokemon_colorsInput {

    @Field(() => pokemon_color_namesScalarWhereInput, {nullable:false})
    @Type(() => pokemon_color_namesScalarWhereInput)
    where!: pokemon_color_namesScalarWhereInput;

    @Field(() => pokemon_color_namesUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_color_namesUpdateManyMutationInput)
    data!: pokemon_color_namesUpdateManyMutationInput;
}
