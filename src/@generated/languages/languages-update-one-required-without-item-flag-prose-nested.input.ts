import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { languagesCreateWithoutItem_flag_proseInput } from './languages-create-without-item-flag-prose.input';
import { Type } from 'class-transformer';
import { languagesCreateOrConnectWithoutItem_flag_proseInput } from './languages-create-or-connect-without-item-flag-prose.input';
import { languagesUpsertWithoutItem_flag_proseInput } from './languages-upsert-without-item-flag-prose.input';
import { languagesWhereUniqueInput } from './languages-where-unique.input';
import { languagesUpdateWithoutItem_flag_proseInput } from './languages-update-without-item-flag-prose.input';

@InputType()
export class languagesUpdateOneRequiredWithoutItem_flag_proseNestedInput {

    @Field(() => languagesCreateWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateWithoutItem_flag_proseInput)
    create?: languagesCreateWithoutItem_flag_proseInput;

    @Field(() => languagesCreateOrConnectWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => languagesCreateOrConnectWithoutItem_flag_proseInput)
    connectOrCreate?: languagesCreateOrConnectWithoutItem_flag_proseInput;

    @Field(() => languagesUpsertWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => languagesUpsertWithoutItem_flag_proseInput)
    upsert?: languagesUpsertWithoutItem_flag_proseInput;

    @Field(() => languagesWhereUniqueInput, {nullable:true})
    @Type(() => languagesWhereUniqueInput)
    connect?: languagesWhereUniqueInput;

    @Field(() => languagesUpdateWithoutItem_flag_proseInput, {nullable:true})
    @Type(() => languagesUpdateWithoutItem_flag_proseInput)
    update?: languagesUpdateWithoutItem_flag_proseInput;
}
