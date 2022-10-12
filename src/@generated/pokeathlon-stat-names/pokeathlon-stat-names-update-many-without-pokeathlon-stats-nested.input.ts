import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-create-without-pokeathlon-stats.input';
import { Type } from 'class-transformer';
import { pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-create-or-connect-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesUpsertWithWhereUniqueWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-upsert-with-where-unique-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesWhereUniqueInput } from './pokeathlon-stat-names-where-unique.input';
import { pokeathlon_stat_namesUpdateWithWhereUniqueWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-update-with-where-unique-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesUpdateManyWithWhereWithoutPokeathlon_statsInput } from './pokeathlon-stat-names-update-many-with-where-without-pokeathlon-stats.input';
import { pokeathlon_stat_namesScalarWhereInput } from './pokeathlon-stat-names-scalar-where.input';

@InputType()
export class pokeathlon_stat_namesUpdateManyWithoutPokeathlon_statsNestedInput {

    @Field(() => [pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput)
    create?: Array<pokeathlon_stat_namesCreateWithoutPokeathlon_statsInput>;

    @Field(() => [pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput)
    connectOrCreate?: Array<pokeathlon_stat_namesCreateOrConnectWithoutPokeathlon_statsInput>;

    @Field(() => [pokeathlon_stat_namesUpsertWithWhereUniqueWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesUpsertWithWhereUniqueWithoutPokeathlon_statsInput)
    upsert?: Array<pokeathlon_stat_namesUpsertWithWhereUniqueWithoutPokeathlon_statsInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    set?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    disconnect?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    delete?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesWhereUniqueInput)
    connect?: Array<pokeathlon_stat_namesWhereUniqueInput>;

    @Field(() => [pokeathlon_stat_namesUpdateWithWhereUniqueWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesUpdateWithWhereUniqueWithoutPokeathlon_statsInput)
    update?: Array<pokeathlon_stat_namesUpdateWithWhereUniqueWithoutPokeathlon_statsInput>;

    @Field(() => [pokeathlon_stat_namesUpdateManyWithWhereWithoutPokeathlon_statsInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesUpdateManyWithWhereWithoutPokeathlon_statsInput)
    updateMany?: Array<pokeathlon_stat_namesUpdateManyWithWhereWithoutPokeathlon_statsInput>;

    @Field(() => [pokeathlon_stat_namesScalarWhereInput], {nullable:true})
    @Type(() => pokeathlon_stat_namesScalarWhereInput)
    deleteMany?: Array<pokeathlon_stat_namesScalarWhereInput>;
}
