import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesCreateWithoutStatsInput } from './move-meta-stat-changes-create-without-stats.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesCreateOrConnectWithoutStatsInput } from './move-meta-stat-changes-create-or-connect-without-stats.input';
import { move_meta_stat_changesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';

@InputType()
export class move_meta_stat_changesUncheckedCreateNestedManyWithoutStatsInput {

    @Field(() => [move_meta_stat_changesCreateWithoutStatsInput], {nullable:true})
    @Type(() => move_meta_stat_changesCreateWithoutStatsInput)
    create?: Array<move_meta_stat_changesCreateWithoutStatsInput>;

    @Field(() => [move_meta_stat_changesCreateOrConnectWithoutStatsInput], {nullable:true})
    @Type(() => move_meta_stat_changesCreateOrConnectWithoutStatsInput)
    connectOrCreate?: Array<move_meta_stat_changesCreateOrConnectWithoutStatsInput>;

    @Field(() => [move_meta_stat_changesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    connect?: Array<move_meta_stat_changesWhereUniqueInput>;
}
