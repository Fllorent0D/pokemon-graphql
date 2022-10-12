import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutStat_namesInput } from './languages-update-without-stat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutStat_namesInput } from './languages-create-without-stat-names.input';

@InputType()
export class languagesUpsertWithoutStat_namesInput {

    @Field(() => languagesUpdateWithoutStat_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutStat_namesInput)
    update!: languagesUpdateWithoutStat_namesInput;

    @Field(() => languagesCreateWithoutStat_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutStat_namesInput)
    create!: languagesCreateWithoutStat_namesInput;
}
