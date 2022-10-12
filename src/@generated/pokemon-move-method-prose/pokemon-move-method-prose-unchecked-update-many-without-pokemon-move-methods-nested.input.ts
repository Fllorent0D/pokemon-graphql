import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-create-without-pokemon-move-methods.input';
import { Type } from 'class-transformer';
import { pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-create-or-connect-without-pokemon-move-methods.input';
import { pokemon_move_method_proseUpsertWithWhereUniqueWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-upsert-with-where-unique-without-pokemon-move-methods.input';
import { pokemon_move_method_proseWhereUniqueInput } from './pokemon-move-method-prose-where-unique.input';
import { pokemon_move_method_proseUpdateWithWhereUniqueWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-update-with-where-unique-without-pokemon-move-methods.input';
import { pokemon_move_method_proseUpdateManyWithWhereWithoutPokemon_move_methodsInput } from './pokemon-move-method-prose-update-many-with-where-without-pokemon-move-methods.input';
import { pokemon_move_method_proseScalarWhereInput } from './pokemon-move-method-prose-scalar-where.input';

@InputType()
export class pokemon_move_method_proseUncheckedUpdateManyWithoutPokemon_move_methodsNestedInput {

    @Field(() => [pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput)
    create?: Array<pokemon_move_method_proseCreateWithoutPokemon_move_methodsInput>;

    @Field(() => [pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput], {nullable:true})
    @Type(() => pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput)
    connectOrCreate?: Array<pokemon_move_method_proseCreateOrConnectWithoutPokemon_move_methodsInput>;

    @Field(() => [pokemon_move_method_proseUpsertWithWhereUniqueWithoutPokemon_move_methodsInput], {nullable:true})
    @Type(() => pokemon_move_method_proseUpsertWithWhereUniqueWithoutPokemon_move_methodsInput)
    upsert?: Array<pokemon_move_method_proseUpsertWithWhereUniqueWithoutPokemon_move_methodsInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    set?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    disconnect?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    delete?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokemon_move_method_proseWhereUniqueInput)
    connect?: Array<pokemon_move_method_proseWhereUniqueInput>;

    @Field(() => [pokemon_move_method_proseUpdateWithWhereUniqueWithoutPokemon_move_methodsInput], {nullable:true})
    @Type(() => pokemon_move_method_proseUpdateWithWhereUniqueWithoutPokemon_move_methodsInput)
    update?: Array<pokemon_move_method_proseUpdateWithWhereUniqueWithoutPokemon_move_methodsInput>;

    @Field(() => [pokemon_move_method_proseUpdateManyWithWhereWithoutPokemon_move_methodsInput], {nullable:true})
    @Type(() => pokemon_move_method_proseUpdateManyWithWhereWithoutPokemon_move_methodsInput)
    updateMany?: Array<pokemon_move_method_proseUpdateManyWithWhereWithoutPokemon_move_methodsInput>;

    @Field(() => [pokemon_move_method_proseScalarWhereInput], {nullable:true})
    @Type(() => pokemon_move_method_proseScalarWhereInput)
    deleteMany?: Array<pokemon_move_method_proseScalarWhereInput>;
}
