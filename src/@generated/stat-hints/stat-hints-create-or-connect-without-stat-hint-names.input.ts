import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { stat_hintsWhereUniqueInput } from './stat-hints-where-unique.input';
import { Type } from 'class-transformer';
import { stat_hintsCreateWithoutStat_hint_namesInput } from './stat-hints-create-without-stat-hint-names.input';

@InputType()
export class stat_hintsCreateOrConnectWithoutStat_hint_namesInput {

    @Field(() => stat_hintsWhereUniqueInput, {nullable:false})
    @Type(() => stat_hintsWhereUniqueInput)
    where!: stat_hintsWhereUniqueInput;

    @Field(() => stat_hintsCreateWithoutStat_hint_namesInput, {nullable:false})
    @Type(() => stat_hintsCreateWithoutStat_hint_namesInput)
    create!: stat_hintsCreateWithoutStat_hint_namesInput;
}
