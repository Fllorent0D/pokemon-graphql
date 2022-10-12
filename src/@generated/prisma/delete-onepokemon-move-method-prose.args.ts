import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseWhereUniqueInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnepokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    where!: pokemon_move_method_proseWhereUniqueInput;
}
