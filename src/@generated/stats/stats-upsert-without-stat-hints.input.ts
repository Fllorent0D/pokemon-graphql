import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsUpdateWithoutStat_hintsInput } from './stats-update-without-stat-hints.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutStat_hintsInput } from './stats-create-without-stat-hints.input';

@InputType()
export class statsUpsertWithoutStat_hintsInput {

    @Field(() => statsUpdateWithoutStat_hintsInput, {nullable:false})
    @Type(() => statsUpdateWithoutStat_hintsInput)
    update!: statsUpdateWithoutStat_hintsInput;

    @Field(() => statsCreateWithoutStat_hintsInput, {nullable:false})
    @Type(() => statsCreateWithoutStat_hintsInput)
    create!: statsCreateWithoutStat_hintsInput;
}
