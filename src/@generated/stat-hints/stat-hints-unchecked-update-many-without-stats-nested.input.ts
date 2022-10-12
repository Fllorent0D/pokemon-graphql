import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsCreateWithoutStatsInput } from './stat-hints-create-without-stats.input';
import { Type } from 'class-transformer';
import { stat_hintsCreateOrConnectWithoutStatsInput } from './stat-hints-create-or-connect-without-stats.input';
import { stat_hintsUpsertWithWhereUniqueWithoutStatsInput } from './stat-hints-upsert-with-where-unique-without-stats.input';
import { stat_hintsWhereUniqueInput } from './stat-hints-where-unique.input';
import { stat_hintsUpdateWithWhereUniqueWithoutStatsInput } from './stat-hints-update-with-where-unique-without-stats.input';
import { stat_hintsUpdateManyWithWhereWithoutStatsInput } from './stat-hints-update-many-with-where-without-stats.input';
import { stat_hintsScalarWhereInput } from './stat-hints-scalar-where.input';

@InputType()
export class stat_hintsUncheckedUpdateManyWithoutStatsNestedInput {

    @Field(() => [stat_hintsCreateWithoutStatsInput], {nullable:true})
    @Type(() => stat_hintsCreateWithoutStatsInput)
    create?: Array<stat_hintsCreateWithoutStatsInput>;

    @Field(() => [stat_hintsCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => stat_hintsCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<stat_hintsCreateOrConnectWithoutStatsInput>;

    @Field(() => [stat_hintsUpsertWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => stat_hintsUpsertWithWhereUniqueWithoutStatsInput)
    upsert?: Array<stat_hintsUpsertWithWhereUniqueWithoutStatsInput>;

    @Field(() => [stat_hintsWhereUniqueInput], {nullable:true})
    @Type(() => stat_hintsWhereUniqueInput)
    set?: Array<stat_hintsWhereUniqueInput>;

    @Field(() => [stat_hintsWhereUniqueInput], {nullable:true})
    @Type(() => stat_hintsWhereUniqueInput)
    disconnect?: Array<stat_hintsWhereUniqueInput>;

    @Field(() => [stat_hintsWhereUniqueInput], {nullable:true})
    @Type(() => stat_hintsWhereUniqueInput)
    delete?: Array<stat_hintsWhereUniqueInput>;

    @Field(() => [stat_hintsWhereUniqueInput], {nullable:true})
    @Type(() => stat_hintsWhereUniqueInput)
    connect?: Array<stat_hintsWhereUniqueInput>;

    @Field(() => [stat_hintsUpdateWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => stat_hintsUpdateWithWhereUniqueWithoutStatsInput)
    update?: Array<stat_hintsUpdateWithWhereUniqueWithoutStatsInput>;

    @Field(() => [stat_hintsUpdateManyWithWhereWithoutStatsInput], {nullable:true})
    @Type(() => stat_hintsUpdateManyWithWhereWithoutStatsInput)
    updateMany?: Array<stat_hintsUpdateManyWithWhereWithoutStatsInput>;

    @Field(() => [stat_hintsScalarWhereInput], {nullable:true})
    @Type(() => stat_hintsScalarWhereInput)
    deleteMany?: Array<stat_hintsScalarWhereInput>;
}
