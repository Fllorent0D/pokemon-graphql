import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_stat_changesWhereUniqueInput } from './move-meta-stat-changes-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_stat_changesUpdateWithoutStatsInput } from './move-meta-stat-changes-update-without-stats.input';
import { move_meta_stat_changesCreateWithoutStatsInput } from './move-meta-stat-changes-create-without-stats.input';

@InputType()
export class move_meta_stat_changesUpsertWithWhereUniqueWithoutStatsInput {

    @Field(() => move_meta_stat_changesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_stat_changesWhereUniqueInput)
    where!: move_meta_stat_changesWhereUniqueInput;

    @Field(() => move_meta_stat_changesUpdateWithoutStatsInput, {nullable:false})
    @Type(() => move_meta_stat_changesUpdateWithoutStatsInput)
    update!: move_meta_stat_changesUpdateWithoutStatsInput;

    @Field(() => move_meta_stat_changesCreateWithoutStatsInput, {nullable:false})
    @Type(() => move_meta_stat_changesCreateWithoutStatsInput)
    create!: move_meta_stat_changesCreateWithoutStatsInput;
}
