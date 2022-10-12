import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsUpdateInput } from '../pokemon-move-methods/pokemon-move-methods-update.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsWhereUniqueInput } from '../pokemon-move-methods/pokemon-move-methods-where-unique.input';

@ArgsType()
export class UpdateOnepokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsUpdateInput, {nullable:false})
    @Type(() => pokemon_move_methodsUpdateInput)
    data!: pokemon_move_methodsUpdateInput;

    @Field(() => pokemon_move_methodsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_methodsWhereUniqueInput)
    where!: pokemon_move_methodsWhereUniqueInput;
}
