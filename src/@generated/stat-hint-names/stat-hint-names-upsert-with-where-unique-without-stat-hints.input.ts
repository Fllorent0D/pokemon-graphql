import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hint_namesWhereUniqueInput } from './stat-hint-names-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hint_namesUpdateWithoutStat_hintsInput } from './stat-hint-names-update-without-stat-hints.input';
import { stat_hint_namesCreateWithoutStat_hintsInput } from './stat-hint-names-create-without-stat-hints.input';

@InputType()
export class stat_hint_namesUpsertWithWhereUniqueWithoutStat_hintsInput {

    @Field(() => stat_hint_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_hint_namesWhereUniqueInput)
    where!: stat_hint_namesWhereUniqueInput;

    @Field(() => stat_hint_namesUpdateWithoutStat_hintsInput, {nullable:false})
    @Type(() => stat_hint_namesUpdateWithoutStat_hintsInput)
    update!: stat_hint_namesUpdateWithoutStat_hintsInput;

    @Field(() => stat_hint_namesCreateWithoutStat_hintsInput, {nullable:false})
    @Type(() => stat_hint_namesCreateWithoutStat_hintsInput)
    create!: stat_hint_namesCreateWithoutStat_hintsInput;
}
