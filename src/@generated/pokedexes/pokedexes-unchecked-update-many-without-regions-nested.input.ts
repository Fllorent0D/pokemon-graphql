import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokedexesCreateWithoutRegionsInput } from './pokedexes-create-without-regions.input';
import { Type } from 'class-transformer';
import { pokedexesCreateOrConnectWithoutRegionsInput } from './pokedexes-create-or-connect-without-regions.input';
import { pokedexesUpsertWithWhereUniqueWithoutRegionsInput } from './pokedexes-upsert-with-where-unique-without-regions.input';
import { pokedexesWhereUniqueInput } from './pokedexes-where-unique.input';
import { pokedexesUpdateWithWhereUniqueWithoutRegionsInput } from './pokedexes-update-with-where-unique-without-regions.input';
import { pokedexesUpdateManyWithWhereWithoutRegionsInput } from './pokedexes-update-many-with-where-without-regions.input';
import { pokedexesScalarWhereInput } from './pokedexes-scalar-where.input';

@InputType()
export class pokedexesUncheckedUpdateManyWithoutRegionsNestedInput {

    @Field(() => [pokedexesCreateWithoutRegionsInput], {nullable:true})
    @Type(() => pokedexesCreateWithoutRegionsInput)
    create?: Array<pokedexesCreateWithoutRegionsInput>;

    @Field(() => [pokedexesCreateOrConnectWithoutRegionsInput], {nullable:true})
    @Type(() => pokedexesCreateOrConnectWithoutRegionsInput)
    connectOrCreate?: Array<pokedexesCreateOrConnectWithoutRegionsInput>;

    @Field(() => [pokedexesUpsertWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => pokedexesUpsertWithWhereUniqueWithoutRegionsInput)
    upsert?: Array<pokedexesUpsertWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [pokedexesWhereUniqueInput], {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    set?: Array<pokedexesWhereUniqueInput>;

    @Field(() => [pokedexesWhereUniqueInput], {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    disconnect?: Array<pokedexesWhereUniqueInput>;

    @Field(() => [pokedexesWhereUniqueInput], {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    delete?: Array<pokedexesWhereUniqueInput>;

    @Field(() => [pokedexesWhereUniqueInput], {nullable:true})
    @Type(() => pokedexesWhereUniqueInput)
    connect?: Array<pokedexesWhereUniqueInput>;

    @Field(() => [pokedexesUpdateWithWhereUniqueWithoutRegionsInput], {nullable:true})
    @Type(() => pokedexesUpdateWithWhereUniqueWithoutRegionsInput)
    update?: Array<pokedexesUpdateWithWhereUniqueWithoutRegionsInput>;

    @Field(() => [pokedexesUpdateManyWithWhereWithoutRegionsInput], {nullable:true})
    @Type(() => pokedexesUpdateManyWithWhereWithoutRegionsInput)
    updateMany?: Array<pokedexesUpdateManyWithWhereWithoutRegionsInput>;

    @Field(() => [pokedexesScalarWhereInput], {nullable:true})
    @Type(() => pokedexesScalarWhereInput)
    deleteMany?: Array<pokedexesScalarWhereInput>;
}
