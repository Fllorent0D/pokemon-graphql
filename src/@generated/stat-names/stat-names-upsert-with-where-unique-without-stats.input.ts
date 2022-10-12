import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_namesUpdateWithoutStatsInput } from './stat-names-update-without-stats.input';
import { stat_namesCreateWithoutStatsInput } from './stat-names-create-without-stats.input';

@InputType()
export class stat_namesUpsertWithWhereUniqueWithoutStatsInput {

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;

    @Field(() => stat_namesUpdateWithoutStatsInput, {nullable:false})
    @Type(() => stat_namesUpdateWithoutStatsInput)
    update!: stat_namesUpdateWithoutStatsInput;

    @Field(() => stat_namesCreateWithoutStatsInput, {nullable:false})
    @Type(() => stat_namesCreateWithoutStatsInput)
    create!: stat_namesCreateWithoutStatsInput;
}
