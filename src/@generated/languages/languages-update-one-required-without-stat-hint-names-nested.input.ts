import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutStat_hint_namesInput } from './languages-create-without-stat-hint-names.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutStat_hint_namesInput } from './languages-create-or-connect-without-stat-hint-names.input';
import { languagesUpsertWithoutStat_hint_namesInput } from './languages-upsert-without-stat-hint-names.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutStat_hint_namesInput } from './languages-update-without-stat-hint-names.input';

@InputType()
export class languagesUpdateOneRequiredWithoutStat_hint_namesNestedInput {

    @Field(() => languagesCreateWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => languagesCreateWithoutStat_hint_namesInput)
    create?: languagesCreateWithoutStat_hint_namesInput;

    @Field(() => languagesCreateOrConnectWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutStat_hint_namesInput)
    connectOrCreate?: languagesCreateOrConnectWithoutStat_hint_namesInput;

    @Field(() => languagesUpsertWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => languagesUpsertWithoutStat_hint_namesInput)
    upsert?: languagesUpsertWithoutStat_hint_namesInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutStat_hint_namesInput, {nullable:true})
    @Type(() => languagesUpdateWithoutStat_hint_namesInput)
    update?: languagesUpdateWithoutStat_hint_namesInput;
}
