import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_method_proseCreateInput } from '../pokemon-move-method-prose/pokemon-move-method-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonMoveMethodProseArgs {

    @Field(() => pokemon_move_method_proseCreateInput, {nullable:false})
    @Type(() => pokemon_move_method_proseCreateInput)
    data!: pokemon_move_method_proseCreateInput;
}
