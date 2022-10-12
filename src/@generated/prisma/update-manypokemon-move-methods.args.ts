import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { pokemon_move_methodsUpdateManyMutationInput } from '../pokemon-move-methods/pokemon-move-methods-update-many-mutation.input';
import { Type } from 'class-transformer';
import { pokemon_move_methodsWhereInput } from '../pokemon-move-methods/pokemon-move-methods-where.input';

@ArgsType()
export class UpdateManypokemonMoveMethodsArgs {

    @Field(() => pokemon_move_methodsUpdateManyMutationInput, {nullable:false})
    @Type(() => pokemon_move_methodsUpdateManyMutationInput)
    data!: pokemon_move_methodsUpdateManyMutationInput;

    @Field(() => pokemon_move_methodsWhereInput, {nullable:true})
    @Type(() => pokemon_move_methodsWhereInput)
    where?: pokemon_move_methodsWhereInput;
}
