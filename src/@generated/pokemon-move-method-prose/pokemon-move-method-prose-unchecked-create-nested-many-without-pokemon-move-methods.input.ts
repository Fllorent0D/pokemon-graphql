import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-create-without-pokemon-move-methods.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-create-or-connect-without-pokemon-move-methods.input';
import { pokemon_move_method_proseWhereUniqueInput } from './pokemon-move-method-prose-where-unique.input';

@InputType()
export class pokemon_move_method_proseUncheckedCreateNestedManyWithoutPokemon_move_methodsInput {

    @Field(() => [pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput)
    create?: Array<pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput>;

    @Field(() => [pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput)
    connectOrCreate?: Array<pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    connect?: Array<pokemon_move_method_proseWhereUniqueInput>;
}
