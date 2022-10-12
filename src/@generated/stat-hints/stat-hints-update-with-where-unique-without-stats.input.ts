import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsWhereUniqueInput } from './stat-hints-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hintsUpdateWithoutStatsInput } from './stat-hints-update-without-stats.input';

@InputType()
export class stat_hintsUpdateWithWhereUniqueWithoutStatsInput {

    @Field(() => stat_hintsWhereUniqueInput, {nullable:false})
    @Type(() => stat_hintsWhereUniqueInput)
    where!: stat_hintsWhereUniqueInput;

    @Field(() => stat_hintsUpdateWithoutStatsInput, {nullable:false})
    @Type(() => stat_hintsUpdateWithoutStatsInput)
    data!: stat_hintsUpdateWithoutStatsInput;
}
