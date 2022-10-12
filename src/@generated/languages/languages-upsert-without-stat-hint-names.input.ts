import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesUpdateWithoutStat_hint_namesInput } from './languages-update-without-stat-hint-names.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutStat_hint_namesInput } from './languages-create-without-stat-hint-names.input';

@InputType()
export class languagesUpsertWithoutStat_hint_namesInput {

    @Field(() => languagesUpdateWithoutStat_hint_namesInput, {nullable:false})
    @Type(() => languagesUpdateWithoutStat_hint_namesInput)
    update!: languagesUpdateWithoutStat_hint_namesInput;

    @Field(() => languagesCreateWithoutStat_hint_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutStat_hint_namesInput)
    create!: languagesCreateWithoutStat_hint_namesInput;
}
