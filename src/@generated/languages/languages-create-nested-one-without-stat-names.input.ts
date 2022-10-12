import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutStat_namesInput } from './languages-create-without-stat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutStat_namesInput } from './languages-create-or-connect-without-stat-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';

@InputType()
export class languagesCreateNestedOneWithoutStat_namesInput {

    @Field(() => languagesCreateWithoutStat_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutStat_namesInput)
    create?: languagesCreateWithoutStat_namesInput;

    @Field(() => languagesCreateOrConnectWithoutStat_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutStat_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutStat_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;
}
