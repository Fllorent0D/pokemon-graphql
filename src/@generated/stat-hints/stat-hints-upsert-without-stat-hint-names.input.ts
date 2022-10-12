import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsUpdateWithoutStat_hint_namesInput } from './stat-hints-update-without-stat-hint-names.input';
import { Type } from 'class-transformer';
import { stat_hintsCreateWithoutStat_hint_namesInput } from './stat-hints-create-without-stat-hint-names.input';

@InputType()
export class stat_hintsUpsertWithoutStat_hint_namesInput {

    @Field(() => stat_hintsUpdateWithoutStat_hint_namesInput, {nullable:false})
    @Type(() => stat_hintsUpdateWithoutStat_hint_namesInput)
    update!: stat_hintsUpdateWithoutStat_hint_namesInput;

    @Field(() => stat_hintsCreateWithoutStat_hint_namesInput, {nullable:false})
    @Type(() => stat_hintsCreateWithoutStat_hint_namesInput)
    create!: stat_hintsCreateWithoutStat_hint_namesInput;
}
