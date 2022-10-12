import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutStat_hint_namesInput } from './languages-create-without-stat-hint-names.input';

@InputType()
export class languagesCreateOrConnectWithoutStat_hint_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutStat_hint_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutStat_hint_namesInput)
    create!: languagesCreateWithoutStat_hint_namesInput;
}
