import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsWhereUniqueInput } from '../pokemon-move-methods/pokemon-move-methods-where-unique.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsCreateInput } from '../pokemon-move-methods/pokemon-move-methods-create.input';
import { pokemon_move_methodsUpdateInput } from '../pokemon-move-methods/pokemon-move-methods-update.input';

@ArgsType()
export class UpsertOnepokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsWhereUniqueInput, {nullable:false})
    @Type(() => pokemon_move_methodsWhereUniqueInput)
    where!: pokemon_move_methodsWhereUniqueInput;

    @Field(() => pokemon_move_methodsCreateInput, {nullable:false})
    @Type(() => pokemon_move_methodsCreateInput)
    create!: pokemon_move_methodsCreateInput;

    @Field(() => pokemon_move_methodsUpdateInput, {nullable:false})
    @Type(() => pokemon_move_methodsUpdateInput)
    update!: pokemon_move_methodsUpdateInput;
}
