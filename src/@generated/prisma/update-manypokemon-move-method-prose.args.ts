import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseUpdateManyMutationInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseWhereInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where.input';

@ArgsType()
export class UpdateManypokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_move_method_proseUpdateManyMutationInput)
    data!: pokemon_move_method_proseUpdateManyMutationInput;

    @Field(() => pokemon_move_method_proseWhereInput, {nullable:true})
    @Type(() => pokemon_move_method_proseWhereInput)
    where?: pokemon_move_method_proseWhereInput;
}
