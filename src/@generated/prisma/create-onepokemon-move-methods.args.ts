import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsCreateInput } from '../pokemon-move-methods/pokemon-move-methods-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnepokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsCreateInput, {nullable:false})
    @Type(() => pokemon_move_methodsCreateInput)
    data!: pokemon_move_methodsCreateInput;
}
