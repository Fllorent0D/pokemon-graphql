import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsWhereUniqueInput } from '../pokemon-move-methods/pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniquepokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_methodsWhereUniqueInput)
    where!: pokemon_move_methodsWhereUniqueInput;
}
