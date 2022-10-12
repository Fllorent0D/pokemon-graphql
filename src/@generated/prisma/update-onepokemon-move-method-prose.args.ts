import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseUpdateInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-update.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseWhereUniqueInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where-unique.input';

@ArgsType()
export class UpdateOnepokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseUpdateInput, {nullable:false})
    @Type(() => pokemon_move_method_proseUpdateInput)
    data!: pokemon_move_method_proseUpdateInput;

    @Field(() => pokemon_move_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    where!: pokemon_move_method_proseWhereUniqueInput;
}
