import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_namesWhereUniqueInput } from './stat-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_namesUpdateWithoutStatsInput } from './stat-names-update-without-stats.input';

@InputType()
export class stat_namesUpdateWithWhereUniqueWithoutStatsInput {

    @Field(() => stat_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_namesWhereUniqueInput)
    where!: stat_namesWhereUniqueInput;

    @Field(() => stat_namesUpdateWithoutStatsInput, {nullable:false})
    @Type(() => stat_namesUpdateWithoutStatsInput)
    data!: stat_namesUpdateWithoutStatsInput;
}
