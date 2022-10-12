import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutStat_hint_namesInput } from './languages-create-without-stat-hint-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutStat_hint_namesInput } from './languages-create-or-connect-without-stat-hint-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutStat_hint_namesInput {

    @Field(() => languagesCreateWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutStat_hint_namesInput)
    create?: languagesCreateWithoutStat_hint_namesInput;

    @Field(() => languagesCreateOrConnectWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutStat_hint_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutStat_hint_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
