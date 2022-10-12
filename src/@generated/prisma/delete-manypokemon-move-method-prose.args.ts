import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseWhereInput, {nullable:true})
    @Type(() => pokemon_move_method_proseWhereInput)
    where?: pokemon_move_method_proseWhereInput;
}
