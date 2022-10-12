import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesCreateWithoutStatsInput } from './stat-names-create-without-stats.input';
import { Type } from 'class-transformer';
import { stat_namesCreateOrConnectWithoutStatsInput } from './stat-names-create-or-connect-without-stats.input';
import { stat_namesUpsertWithWhereUniqueWithoutStatsInput } from './stat-names-upsert-with-where-unique-without-stats.input';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';
import { stat_namesUpdateWithWhereUniqueWithoutStatsInput } from './stat-names-update-with-where-unique-without-stats.input';
import { stat_namesUpdateManyWithWhereWithoutStatsInput } from './stat-names-update-many-with-where-without-stats.input';
import { stat_namesScalarWhereInput } from './stat-names-scalar-where.input';

@InputType()
export class stat_namesUncheckedUpdateManyWithoutStatsNestedInput {

    @Field(() => [stat_namesCreateWithoutStatsInput], {nullable:true})
    @Type(() => stat_namesCreateWithoutStatsInput)
    create?: Array<stat_namesCreateWithoutStatsInput>;

    @Field(() => [stat_namesCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => stat_namesCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<stat_namesCreateOrConnectWithoutStatsInput>;

    @Field(() => [stat_namesUpsertWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => stat_namesUpsertWithWhereUniqueWithoutStatsInput)
    upsert?: Array<stat_namesUpsertWithWhereUniqueWithoutStatsInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    set?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    disconnect?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    delete?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesWhereUniqueInput], {nullable:true})
    @Type(() => stat_namesWhereUniqueInput)
    connect?: Array<stat_namesWhereUniqueInput>;

    @Field(() => [stat_namesUpdateWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => stat_namesUpdateWithWhereUniqueWithoutStatsInput)
    update?: Array<stat_namesUpdateWithWhereUniqueWithoutStatsInput>;

    @Field(() => [stat_namesUpdateManyWithWhereWithoutStatsInput], {nullable:true})
    @Type(() => stat_namesUpdateManyWithWhereWithoutStatsInput)
    updateMany?: Array<stat_namesUpdateManyWithWhereWithoutStatsInput>;

    @Field(() => [stat_namesScalarWhereInput], {nullable:true})
    @Type(() => stat_namesScalarWhereInput)
    deleteMany?: Array<stat_namesScalarWhereInput>;
}
