import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedex_proseCreateWithoutPokedexesInput } from './pokedex-prose-create-without-pokedexes.input';
import { Type } from 'class-transformer';
import { pokedex_proseCreateOrConnectWithoutPokedexesInput } from './pokedex-prose-create-or-connect-without-pokedexes.input';
import { pokedex_proseUpsertWithWhereUniqueWithoutPokedexesInput } from './pokedex-prose-upsert-with-where-unique-without-pokedexes.input';
import { pokedex_proseWhereUniqueInput } from './pokedex-prose-where-unique.input';
import { pokedex_proseUpdateWithWhereUniqueWithoutPokedexesInput } from './pokedex-prose-update-with-where-unique-without-pokedexes.input';
import { pokedex_proseUpdateManyWithWhereWithoutPokedexesInput } from './pokedex-prose-update-many-with-where-without-pokedexes.input';
import { pokedex_proseScalarWhereInput } from './pokedex-prose-scalar-where.input';

@InputType()
export class pokedex_proseUpdateManyWithoutPokedexesNestedInput {

    @Field(() => [pokedex_proseCreateWithoutPokedexesInput], {nullable:true})
    @Type(() => pokedex_proseCreateWithoutPokedexesInput)
    create?: Array<pokedex_proseCreateWithoutPokedexesInput>;

    @Field(() => [pokedex_proseCreateOrConnectWithoutPokedexesInput], {nullable:true})
    @Type(() => pokedex_proseCreateOrConnectWithoutPokedexesInput)
    connectOrCreate?: Array<pokedex_proseCreateOrConnectWithoutPokedexesInput>;

    @Field(() => [pokedex_proseUpsertWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => pokedex_proseUpsertWithWhereUniqueWithoutPokedexesInput)
    upsert?: Array<pokedex_proseUpsertWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    set?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    disconnect?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    delete?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseWhereUniqueInput], {nullable:true})
    @Type(() => pokedex_proseWhereUniqueInput)
    connect?: Array<pokedex_proseWhereUniqueInput>;

    @Field(() => [pokedex_proseUpdateWithWhereUniqueWithoutPokedexesInput], {nullable:true})
    @Type(() => pokedex_proseUpdateWithWhereUniqueWithoutPokedexesInput)
    update?: Array<pokedex_proseUpdateWithWhereUniqueWithoutPokedexesInput>;

    @Field(() => [pokedex_proseUpdateManyWithWhereWithoutPokedexesInput], {nullable:true})
    @Type(() => pokedex_proseUpdateManyWithWhereWithoutPokedexesInput)
    updateMany?: Array<pokedex_proseUpdateManyWithWhereWithoutPokedexesInput>;

    @Field(() => [pokedex_proseScalarWhereInput], {nullable:true})
    @Type(() => pokedex_proseScalarWhereInput)
    deleteMany?: Array<pokedex_proseScalarWhereInput>;
}
