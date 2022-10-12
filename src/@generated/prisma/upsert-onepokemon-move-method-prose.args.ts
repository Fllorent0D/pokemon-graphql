import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereUniqueInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseCreateInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-create.input';
import { pokemon_move_method_proseUpdateInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-update.input';

@ArgsType()
export class UpsertOnepokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    where!: pokemon_move_method_proseWhereUniqueInput;

    @Field(() => pokemon_move_method_proseCreateInput, {nullable:false})
    @Type(() => pokemon_move_method_proseCreateInput)
    create!: pokemon_move_method_proseCreateInput;

    @Field(() => pokemon_move_method_proseUpdateInput, {nullable:false})
    @Type(() => pokemon_move_method_proseUpdateInput)
    update!: pokemon_move_method_proseUpdateInput;
}
