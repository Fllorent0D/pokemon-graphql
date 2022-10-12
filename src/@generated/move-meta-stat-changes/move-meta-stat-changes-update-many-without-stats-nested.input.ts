import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesCreateWithoutStatsInput } from './move-meta-stat-changes-create-without-stats.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesCreateOrConnectWithoutStatsInput } from './move-meta-stat-changes-create-or-connect-without-stats.input';
import { move_meta_stat_changesUpsertWithWhereUniqueWithoutStatsInput } from './move-meta-stat-changes-upsert-with-where-unique-without-stats.input';
import { move_meta_stat_changesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { move_meta_stat_changesUpdateWithWhereUniqueWithoutStatsInput } from './move-meta-stat-changes-update-with-where-unique-without-stats.input';
import { move_meta_stat_changesUpdateManyWithWhereWithoutStatsInput } from './move-meta-stat-changes-update-many-with-where-without-stats.input';
import { move_meta_stat_changesScalarWhereInput } from './move-meta-stat-changes-scalar-where.input';

@InputType()
export class move_meta_stat_changesUpdateManyWithoutStatsNestedInput {

    @Field(() => [move_meta_stat_changesCreateWithoutStatsInput], {nullable:true})
    @Type(() => move_meta_stat_changesCreateWithoutStatsInput)
    create?: Array<move_meta_stat_changesCreateWithoutStatsInput>;

    @Field(() => [move_meta_stat_changesCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => move_meta_stat_changesCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<move_meta_stat_changesCreateOrConnectWithoutStatsInput>;

    @Field(() => [move_meta_stat_changesUpsertWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => move_meta_stat_changesUpsertWithWhereUniqueWithoutStatsInput)
    upsert?: Array<move_meta_stat_changesUpsertWithWhereUniqueWithoutStatsInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    set?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    disconnect?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    delete?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    connect?: Array<move_meta_stat_changesWhereUniqueInput>;

    @Field(() => [move_meta_stat_changesUpdateWithWhereUniqueWithoutStatsInput], {nullable:true})
    @Type(() => move_meta_stat_changesUpdateWithWhereUniqueWithoutStatsInput)
    update?: Array<move_meta_stat_changesUpdateWithWhereUniqueWithoutStatsInput>;

    @Field(() => [move_meta_stat_changesUpdateManyWithWhereWithoutStatsInput], {nullable:true})
    @Type(() => move_meta_stat_changesUpdateManyWithWhereWithoutStatsInput)
    updateMany?: Array<move_meta_stat_changesUpdateManyWithWhereWithoutStatsInput>;

    @Field(() => [move_meta_stat_changesScalarWhereInput], {nullable:true})
    @Type(() => move_meta_stat_changesScalarWhereInput)
    deleteMany?: Array<move_meta_stat_changesScalarWhereInput>;
}
