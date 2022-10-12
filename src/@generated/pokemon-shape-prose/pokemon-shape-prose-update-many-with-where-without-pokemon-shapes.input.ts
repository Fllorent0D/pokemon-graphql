import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_shape_proseScalarWhereInput } from './pokemon-shape-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_shape_proseUpdateManyMutationInput } from './pokemon-shape-prose-update-many-mutation.input';

@InputType()
export class pokemon_shape_proseUpdateManyWithWhereWithoutPokemon_shapesInput {

    @Field(() => pokemon_shape_proseScalarWhereInput, {nullable:false})
    @Type(() => pokemon_shape_proseScalarWhereInput)
    where!: pokemon_shape_proseScalarWhereInput;

    @Field(() => pokemon_shape_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_shape_proseUpdateManyMutationInput)
    data!: pokemon_shape_proseUpdateManyMutationInput;
}
