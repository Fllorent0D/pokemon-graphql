import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsWhereUniqueInput } from './stat-hints-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hintsUpdateWithoutStatsInput } from './stat-hints-update-without-stats.input';
import { stat_hintsCreateWithoutStatsInput } from './stat-hints-create-without-stats.input';

@InputType()
export class stat_hintsUpsertWithWhereUniqueWithoutStatsInput {

    @Field(() => stat_hintsWhereUniqueInput, {nullable:false})
    @Type(() => stat_hintsWhereUniqueInput)
    where!: stat_hintsWhereUniqueInput;

    @Field(() => stat_hintsUpdateWithoutStatsInput, {nullable:false})
    @Type(() => stat_hintsUpdateWithoutStatsInput)
    update!: stat_hintsUpdateWithoutStatsInput;

    @Field(() => stat_hintsCreateWithoutStatsInput, {nullable:false})
    @Type(() => stat_hintsCreateWithoutStatsInput)
    create!: stat_hintsCreateWithoutStatsInput;
}
