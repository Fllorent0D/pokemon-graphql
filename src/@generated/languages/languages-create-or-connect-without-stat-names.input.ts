import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { Type } from 'class-transformer';
import { languagesCreateWithoutStat_namesInput } from './languages-create-without-stat-names.input';

@InputType()
export class languagesCreateOrConnectWithoutStat_namesInput {

    @Field(() => languagesWhereUniqueInput, {nullable:false})
    @Type(() => languagesWhereUniqueInput)
    where!: languagesWhereUniqueInput;

    @Field(() => languagesCreateWithoutStat_namesInput, {nullable:false})
    @Type(() => languagesCreateWithoutStat_namesInput)
    create!: languagesCreateWithoutStat_namesInput;
}
