import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseScalarWhereInput } from './pokemon-move-method-prose-scalar-where.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseUpdateManyMutationInput } from './pokemon-move-method-prose-update-many-mutation.input';

@InputType()
export class pokemon_move_method_proseUpdateManyWithWhereWithoutPokemon_move_methodsInput {

    @Field(() => pokemon_move_method_proseScalarWhereInput, {nullable:false})
    @Type(() => pokemon_move_method_proseScalarWhereInput)
    where!: pokemon_move_method_proseScalarWhereInput;

    @Field(() => pokemon_move_method_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_move_method_proseUpdateManyMutationInput)
    data!: pokemon_move_method_proseUpdateManyMutationInput;
}
