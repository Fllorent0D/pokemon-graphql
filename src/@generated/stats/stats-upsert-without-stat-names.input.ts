import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { statsUpdateWithoutStat_namesInput } from './stats-update-without-stat-names.input';
import { Type } from 'class-transformer';
import { statsCreateWithoutStat_namesInput } from './stats-create-without-stat-names.input';

@InputType()
export class statsUpsertWithoutStat_namesInput {

    @Field(() => statsUpdateWithoutStat_namesInput, {nullable:false})
    @Type(() => statsUpdateWithoutStat_namesInput)
    update!: statsUpdateWithoutStat_namesInput;

    @Field(() => statsCreateWithoutStat_namesInput, {nullable:false})
    @Type(() => statsCreateWithoutStat_namesInput)
    create!: statsCreateWithoutStat_namesInput;
}
