import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutStat_namesInput } from './languages-create-without-stat-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutStat_namesInput } from './languages-create-or-connect-without-stat-names.input';
import { languagesUpsertWithoutStat_namesInput } from './languages-upsert-without-stat-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutStat_namesInput } from './languages-update-without-stat-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutStat_namesNestedInput {

    @Field(() => languagesCreateWithoutStat_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutStat_namesInput)
    create?: languagesCreateWithoutStat_namesInput;

    @Field(() => languagesCreateOrConnectWithoutStat_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutStat_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutStat_namesInput;

    @Field(() => languagesUpsertWithoutStat_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutStat_namesInput)
    upsert?: languagesUpsertWithoutStat_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutStat_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutStat_namesInput)
    update?: languagesUpdateWithoutStat_namesInput;
}
