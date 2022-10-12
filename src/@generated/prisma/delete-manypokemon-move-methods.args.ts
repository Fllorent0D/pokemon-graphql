import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsWhereInput } from '../pokemon-move-methods/pokemon-move-methods-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManypokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsWhereInput, {nullable:true})
    @Type(() => pokemon_move_methodsWhereInput)
    where?: pokemon_move_methodsWhereInput;
}
